import type { Book } from "@/lib/book";
import { collectMeta } from "@/lib/registry";

const metaModules = import.meta.glob<{ default: Book }>("./*/meta.ts", {
	eager: true,
});

/**
 * 各本フォルダの meta.ts を自動収集し、公開日の新しい順に並べた一覧。
 * 本を追加する際は meta.ts を置くだけでホームなどの一覧に反映される。
 */
export const books: Book[] = collectMeta(metaModules).sort((a, b) =>
	a.publishedAt < b.publishedAt ? 1 : -1,
);
