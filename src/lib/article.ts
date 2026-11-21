export type Article = {
	/** URL の /articles/ 以下に使われる識別子 */
	slug: string;
	title: string;
	/** 一覧に表示する要約文 */
	description: string;
	/** 公開日（YYYY-MM-DD）一覧の並び替えに使用 */
	publishedAt: string;
	/** OGP画像のパス未指定の場合は public/ogp.png が使われる */
	ogp?: string;
	/**
	 * true にすると検索エンジンにインデックスさせず、ホームなどの一覧にも出さない
	 * ワークショップ用など、URLを知っている人だけに見せる記事に使う
	 */
	noindex?: boolean;
};
