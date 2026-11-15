import type { BookChapter } from "#/src/domains/book/book";

const meta: BookChapter = {
	slug: "08-isolate-the-problem",
	number: 8,
	title: "動かないときに切り分ける",
	description:
		"手元では動くのに、公開先では動かない。この本が用意したその不具合を、手順に沿って切り分けて直します。",
	goal: "手元と公開先の違いから、原因の場所を絞り込める",
	deliverable: "公開先でも直ったゲーム",
	estimatedMinutes: 60,
};

export default meta;
