import {
	type Book,
	type BookChapter,
	chapterLabel,
} from "#/src/domains/book/book";
import { HomeLink } from "../../_components/home-link";

type ChapterNavProps = {
	book: Book;
	chapter: BookChapter;
};

/** 章の本文下に置く、前後の章・目次・ホームへのリンク。 */
export function ChapterNav({ book, chapter }: ChapterNavProps) {
	const index = book.chapters.findIndex((item) => item.slug === chapter.slug);
	const previous = index > 0 ? book.chapters[index - 1] : undefined;
	const next =
		index !== -1 && index + 1 < book.chapters.length
			? book.chapters[index + 1]
			: undefined;

	return (
		<nav class="space-y-4 border-border border-t pt-6 text-sm">
			{(previous || next) && (
				<div class="grid gap-3 sm:grid-cols-2">
					{previous && (
						<a
							href={`/books/${book.slug}/${previous.slug}`}
							class="block rounded border border-border p-3 hover:underline"
						>
							← {chapterLabel(previous)} {previous.title}
						</a>
					)}
					{next && (
						<a
							href={`/books/${book.slug}/${next.slug}`}
							class="block rounded border border-border p-3 hover:underline sm:col-start-2 sm:text-right"
						>
							{chapterLabel(next)} {next.title} →
						</a>
					)}
				</div>
			)}
			<p class="text-center">
				<a href={`/books/${book.slug}`} class="hover:underline">
					目次へ戻る
				</a>
			</p>
			<HomeLink />
		</nav>
	);
}
