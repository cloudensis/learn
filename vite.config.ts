import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";
import { ssg } from "./scripts/ssg";

export default defineConfig({
	resolve: { alias: { "#/": "/" } },
	plugins: [
		/* 開発中は Workers のランタイムでアプリを動かし、本番は静的ファイルだけを配信する。 */
		cloudflare({ assetsOnly: true }),
		tailwindcss(),
		ssrPlugin({ hotReload: { morph: false } }),
		ssg({ entry: "src/index.tsx" }),
	],
});
