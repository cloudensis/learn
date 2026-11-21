import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "learn",
		compatibilityDate: "2026-10-30",
		entrypoint: "./src/index.tsx",
		// ログとエラーをダッシュボードで見られるようにする。
		// URL のクエリ文字列は個人情報を含みうるため、ログから外す
		observability: {
			enabled: true,
			redactQueryString: true,
		},
	},
});
