export type BookChapter = {
	/** URL の /books/<本の slug>/ 以下に使われる識別子。 */
	slug: string;
	/** 章番号（1 始まり）。目次の並び替えに使用。 */
	number: number;
	title: string;
	/** 目次に表示する要約文。 */
	description: string;
};

export type Book = {
	/** URL の /books/ 以下に使われる識別子。 */
	slug: string;
	title: string;
	/** 一覧に表示する要約文。 */
	description: string;
	/** 公開日（YYYY-MM-DD）。一覧の並び替えに使用。 */
	publishedAt: string;
	/** OGP画像のパス。未指定の場合は public/ogp.png が使われる。 */
	ogp?: string;
	/** 収録している章の一覧。章番号の昇順に並ぶ。 */
	chapters: BookChapter[];
};
