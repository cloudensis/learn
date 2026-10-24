/*
 * ビルド時に Hono のアプリから全ページを HTML として書き出す Vite プラグイン。
 * Worker の環境はビルドしないため、Cloudflare には静的ファイルだけがデプロイされる。
 */
import fs from "node:fs/promises";
import path from "node:path";
import type { Hono } from "hono";
import { type SSGPlugin, toSSG } from "hono/ssg";
import type { Plugin } from "vite";

/* HTML の書き出しにだけ使う環境。ビルド後に消す。 */
const ssgEnvironmentName = "ssg";
/* @cloudflare/vite-plugin が Worker に使う環境。 */
const workerEnvironmentName = "ssr";

/* 200 以外のページは書き出さずに黙って飛ばされるため、ビルドを失敗させる。 */
const failOnErrorPlugin: SSGPlugin = {
	afterResponseHook: (res) => {
		if (!res.ok) {
			throw new Error(`HTML の書き出しに失敗しました: ${res.status}`);
		}
		return res;
	},
};

export function ssg({ entry }: { entry: string }): Plugin {
	return {
		name: "ssg",
		config(config) {
			config.environments ??= {};
			config.environments[ssgEnvironmentName] = {
				consumer: "server",
				/* vite-ssr-components が本番用のパスを出せるよう、バンドルに含める。 */
				resolve: { noExternal: ["vite-ssr-components"] },
				build: {
					outDir: `.cloudflare/${ssgEnvironmentName}`,
					rollupOptions: { input: entry },
				},
			};

			/*
			 * vite-ssr-components は client を先にビルドし、そのマニフェストを使って
			 * client 以外の全環境をビルドする。そこから Worker の環境だけを外す。
			 */
			const buildApp = config.builder?.buildApp;
			if (!buildApp) {
				throw new Error(
					"ssg プラグインは vite-ssr-components の後に置いてください",
				);
			}
			config.builder = {
				...config.builder,
				buildApp: async (builder) => {
					const { [workerEnvironmentName]: _, ...environments } =
						builder.environments;
					await buildApp({ ...builder, environments });

					const { client, [ssgEnvironmentName]: server } = environments;
					const clientDir = path.resolve(
						client.config.root,
						client.config.build.outDir,
					);
					const serverDir = path.resolve(
						server.config.root,
						server.config.build.outDir,
					);
					const app: Hono = (await import(path.join(serverDir, "index.js")))
						.default;

					const result = await toSSG(app, fs, {
						dir: clientDir,
						plugins: [failOnErrorPlugin],
					});
					if (!result.success) {
						throw result.error;
					}

					/* Workers Static Assets は、見つからない URL に 404.html を返す。 */
					const notFound = await app.request("/404");
					await fs.writeFile(
						path.join(clientDir, "404.html"),
						await notFound.text(),
					);

					await fs.rm(serverDir, { recursive: true });
				},
			};
		},
	};
}
