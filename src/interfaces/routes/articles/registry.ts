import type { Article } from "#/src/domains/article/article";

const metaModules = import.meta.glob<{ default: Article }>("./*/meta.ts", {
	eager: true,
});

/**
 * 各記事フォルダの meta.ts を自動収集し、公開日の新しい順に並べた一覧。
 * 記事を追加する際は meta.ts を置くだけでホームなどの一覧に反映される。
 */
export const articles: Article[] = Object.values(metaModules)
	.map((module) => module.default)
	.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
