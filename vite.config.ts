/// <reference types="node" />
import { existsSync, mkdirSync, readFileSync, renameSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

/**
 * Worker で import した画像などを、静的アセットとして配信される client のビルド先へ移す。
 *
 * @cloudflare/vite-plugin は本来この移動を自前の builder.buildApp で行うが、
 * vite-ssr-components が client を先にビルドするために builder.buildApp を
 * 上書きするので、その処理が走らない。放っておくと画像は Worker のビルド先
 * （dist/learn/assets）にだけ出力され、本番では 404 になる。
 * そこで、全環境のビルドが終わったあとに同じ移動を行う。
 */
function moveWorkerAssetsToClient(): Plugin {
	return {
		name: "move-worker-assets-to-client",
		apply: "build",
		buildApp: {
			order: "post",
			async handler(builder) {
				const { client, ...workers } = builder.environments;
				const root = builder.config.root;
				const clientOutDir = resolve(root, client.config.build.outDir);

				for (const worker of Object.values(workers)) {
					const workerOutDir = resolve(root, worker.config.build.outDir);
					const manifestPath = join(workerOutDir, ".vite", "manifest.json");
					if (!existsSync(manifestPath)) {
						continue;
					}
					const manifest: Record<string, { assets?: string[] }> = JSON.parse(
						readFileSync(manifestPath, "utf-8"),
					);
					const assetPaths = new Set(
						Object.values(manifest).flatMap((chunk) => chunk.assets ?? []),
					);
					for (const assetPath of assetPaths) {
						const src = join(workerOutDir, assetPath);
						const dest = join(clientOutDir, assetPath);
						if (!existsSync(src)) {
							continue;
						}
						mkdirSync(dirname(dest), { recursive: true });
						renameSync(src, dest);
					}
				}
			},
		},
	};
}

export default defineConfig({
	resolve: { alias: { "#/": "/" } },
	plugins: [
		cloudflare(),
		tailwindcss(),
		ssrPlugin({ hotReload: { morph: false } }),
		moveWorkerAssetsToClient(),
	],
});
