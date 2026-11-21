import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "learn",
		compatibilityDate: "2026-10-30",
		entrypoint: "./src/index.tsx",
	},
});
