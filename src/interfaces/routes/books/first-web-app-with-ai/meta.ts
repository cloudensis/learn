import type { Book } from "#/src/domains/book/book";
import { chapters } from "./chapters";

const meta: Book = {
	slug: "first-web-app-with-ai",
	title: "AIとつくる、はじめてのWebアプリ公開",
	description:
		"プログラミングをしたことがない人が、AIと一緒にWebアプリを作り、インターネットに公開し、その仕組みを理解するまでの本です。読み終わるころには、自分のURLと、AIを使って学び続ける方法が手に入ります。",
	publishedAt: "2026-09-21",
	chapters,
};

export default meta;
