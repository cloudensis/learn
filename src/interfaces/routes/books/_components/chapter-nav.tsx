import type { Book, BookChapter } from "#/src/domains/book/book";

type ChapterNavProps = {
	book: Book;
	chapter: BookChapter;
};

/** 章の本文下に置く、前後の章と目次へのリンク。 */
export function ChapterNav({ book, chapter }: ChapterNavProps) {
	const index = book.chapters.findIndex((item) => item.slug === chapter.slug);
	const previous = index > 0 ? book.chapters[index - 1] : undefined;
	const next =
		index !== -1 && index + 1 < book.chapters.length
			? book.chapters[index + 1]
			: undefined;

	return (
		<nav class="mt-12 space-y-3 border-t pt-6 text-sm">
			{previous && (
				<p>
					<a
						href={`/books/${book.slug}/${previous.slug}`}
						class="hover:underline"
					>
						← 第{previous.number}章 {previous.title}
					</a>
				</p>
			)}
			{next && (
				<p>
					<a href={`/books/${book.slug}/${next.slug}`} class="hover:underline">
						第{next.number}章 {next.title} →
					</a>
				</p>
			)}
			<p>
				<a href={`/books/${book.slug}`} class="hover:underline">
					目次へ戻る
				</a>
			</p>
		</nav>
	);
}
