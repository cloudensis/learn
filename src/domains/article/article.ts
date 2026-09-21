export type Article = {
	/** URL の /articles/ 以下に使われる識別子。 */
	slug: string;
	title: string;
	/** 一覧に表示する要約文。 */
	description: string;
	/** 公開日（YYYY-MM-DD）。一覧の並び替えに使用。 */
	publishedAt: string;
};
