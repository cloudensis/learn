import type { BookChapter } from "#/src/domains/book/book";

const metaModules = import.meta.glob<{ default: BookChapter }>(
	"./chapters/*/meta.ts",
	{ eager: true },
);

/**
 * 各章フォルダの meta.ts を自動収集し、章番号の昇順に並べた一覧。
 * 章を追加する際は chapters/ 配下にフォルダを作るだけで目次に反映される。
 */
export const chapters: BookChapter[] = Object.values(metaModules)
	.map((module) => module.default)
	.sort((a, b) => a.number - b.number);
