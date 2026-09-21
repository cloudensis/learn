import type { BookChapter } from "#/src/domains/book/book";

const meta: BookChapter = {
	slug: "develop-on-your-pc",
	number: 4,
	title: "自分のパソコンで開発する",
	description:
		"開発の道具をそろえて、手元で編集してそのまま公開できるようにします。あわせて、サーバー側で動くしくみを1つだけ自分のアプリに足します。",
	goal: "手元で編集してすぐ公開でき、サーバーで動くコードを1つ足せる",
	deliverable: "ローカルの開発環境と、アクセスのたびに内容が変わるページ",
	estimatedMinutes: 90,
};

export default meta;
