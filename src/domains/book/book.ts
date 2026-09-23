export type Book = {
	/** URL の /books/ 以下に使われる識別子 */
	slug: string;
	title: string;
	/** 一覧に表示する要約文 */
	description: string;
	/** 公開日（YYYY-MM-DD）一覧の並び替えに使用 */
	publishedAt: string;
	/** OGP画像のパス未指定の場合は public/ogp.png が使われる */
	ogp?: string;
	/** 収録している章の一覧章番号の昇順に並ぶ */
	chapters: BookChapter[];
};

export type BookChapter = {
	/** URL の /books/<slug>/ 以下に使われる識別子 */
	slug: string;
	/** 章番号目次の並び替えに使用 */
	number: number;
	title: string;
	/** 目次に表示する要約文 */
	description: string;
	/** この章を終えたときにできるようになること */
	goal: string;
	/** この章を終えたときに手元に残るもの */
	deliverable: string;
	/** 読み進めるのに必要な時間の目安（分） */
	estimatedMinutes: number;
};

/** 章の見出しに使う表記 */
export function chapterLabel(chapter: BookChapter): string {
	return `第${chapter.number}章`;
}

/** 本全体の所要時間の目安（分） */
export function totalMinutes(book: Book): number {
	return book.chapters.reduce(
		(total, chapter) => total + chapter.estimatedMinutes,
		0,
	);
}
