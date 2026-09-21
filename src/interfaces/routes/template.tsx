import { Section } from "@cloudensis/design-system/components/layout/section";
import { books } from "#/src/domains/book/books";
import { site } from "#/src/domains/company/constants";
import { ArticleList } from "./_components/article-list";
import { BookList } from "./_components/book-list";
import { articles } from "./articles/registry";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-16 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{site.name}</h1>
				<p>{site.description}</p>
			</div>

			{articles.length !== 0 && (
				<Section title="記事">
					<ArticleList articles={articles} />
				</Section>
			)}

			{books.length !== 0 && (
				<Section title="書籍">
					<BookList books={books} />
				</Section>
			)}
		</div>
	);
}
