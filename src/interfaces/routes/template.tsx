import { Section } from "@cloudensis/design-system/components/layout/section";
import { site } from "#/src/domains/company/constants";
import { ArticleList } from "./_components/article-list";
import { BookList } from "./_components/book-list";
import { articles } from "./articles/registry";
import { books } from "./books/registry";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-16 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{site.name}</h1>
				<p>{site.description}</p>
				<p>
					ChatGPTやClaudeなど、普段使っているAIを使ってソフトウェア開発を学習する方法を提供します。
				</p>
			</div>

			{books.length !== 0 && (
				<Section title="Books">
					<BookList books={books} />
				</Section>
			)}

			{articles.length !== 0 && (
				<Section title="Articles">
					<ArticleList articles={articles} />
				</Section>
			)}
		</div>
	);
}
