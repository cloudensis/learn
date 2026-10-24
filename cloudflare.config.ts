import { defineConfig } from "cf/config";

export default defineConfig(() => ({
	worker: {
		name: "learn",
		compatibilityDate: "2026-10-01",
		entrypoint: "./src/index.tsx",
		assets: {
			htmlHandling: "auto-trailing-slash",
			notFoundHandling: "404-page",
		},
	},
}));
