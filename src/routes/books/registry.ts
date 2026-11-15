import type { Book } from "#/src/domains/book/book";

const metaModules = import.meta.glob<{ default: Book }>("./*/meta.ts", {
	eager: true,
});

/**
 * 各本フォルダの meta.ts を自動収集し、公開日の新しい順に並べた一覧。
 * 本を追加する際は meta.ts を置くだけでホームなどの一覧に反映される。
 */
export const books: Book[] = Object.values(metaModules)
	.map((module) => module.default)
	.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
