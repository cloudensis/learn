import type { Book } from "#/src/domains/book/book";
import { chapters } from "./chapters";

const meta: Book = {
	slug: "ai-app-development",
	title: "AIとはじめるアプリ開発",
	description:
		"使い慣れたチャットAIでアプリを作るところからはじめて、世の中に公開されているようなwebアプリケーションを開発できるようになるまでの道のりをまとめた本です。",
	publishedAt: "2026-09-21",
	chapters,
};

export default meta;
