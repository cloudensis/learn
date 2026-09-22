import type { Book } from "#/src/domains/book/book";
import { chapters } from "./chapters";

const meta: Book = {
	slug: "first-steps",
	title: "AIと学ぶ、はじめてのソフトウェア開発",
	description:
		"ソフトウェア開発の知識がまったくない人が、AIを学習パートナーにして、自分の作ったものをインターネットに公開するまでの本です。読み終えたとき、自分のURLと、この本がなくても学び続けられる型が手に入ります。",
	publishedAt: "2026-09-22",
	chapters,
};

export default meta;
