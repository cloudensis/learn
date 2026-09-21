export type Book = {
	/** 一覧内で一意になる識別子。 */
	slug: string;
	title: string;
	author: string;
	/** 購入ページなど、書籍の詳細を確認できる外部リンク。 */
	url: string;
	/** 一覧に表示する紹介文。 */
	description: string;
	/** 紹介日（YYYY-MM-DD）。一覧の並び替えに使用。 */
	publishedAt: string;
};
