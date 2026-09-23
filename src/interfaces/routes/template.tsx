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
				<p>ソフトウェア開発者のための、無料の学習教材です。</p>
				<p>
					ChatGPTやClaudeなど、普段使っているAIを使ってソフトウェア開発を学習する方法を提供します。
				</p>
			</div>

			{books.length !== 0 && (
				<Section title="Books">
					<p class="mb-4 text-sm">
						順番に読み進める、章立ての教材です。考え方と判断の基準をあつかいます。
						最後まで進むと、形に残るものができあがります。
					</p>
					<BookList books={books} />
				</Section>
			)}

			{articles.length !== 0 && (
				<Section title="Articles">
					<p class="mb-4 text-sm">
						ひとつのテーマで完結する読みものです。道具の使い方など、
						いま手を動かすのに役立つ話をあつかいます。気になったものから読めます。
					</p>
					<ArticleList articles={articles} />
				</Section>
			)}
		</div>
	);
}
