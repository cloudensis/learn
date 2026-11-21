import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

export default defineConfig({
	define: {
		// Preview では全ページを noindex にする（src/lib/build.ts）
		"import.meta.env.PREVIEW_BUILD": JSON.stringify(
			process.env.CLOUDFLARE_PREVIEW_BUILD === "true",
		),
	},
	resolve: { tsconfigPaths: true },
	plugins: [
		cloudflare(),
		tailwindcss(),
		ssrPlugin({ hotReload: { morph: false } }),
	],
});
