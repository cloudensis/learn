import type { BookChapter } from "@/lib/book";
import { collectMeta } from "@/lib/registry";

const metaModules = import.meta.glob<{ default: BookChapter }>("./*/meta.ts", {
	eager: true,
});

/**
 * 各章フォルダの meta.ts を自動収集し、章番号の昇順に並べた一覧。
 * 章を追加する際は、このフォルダに章のフォルダを作るだけで目次に反映される。
 */
export const chapters: BookChapter[] = collectMeta(metaModules).sort(
	(a, b) => a.number - b.number,
);
