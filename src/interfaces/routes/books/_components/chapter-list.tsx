import type { Book } from "#/src/domains/book/book";

type ChapterListProps = {
	book: Book;
};

export function ChapterList({ book }: ChapterListProps) {
	return (
		<ol class="space-y-6">
			{book.chapters.map((chapter) => (
				<li key={chapter.slug}>
					<a
						href={`/books/${book.slug}/${chapter.slug}`}
						class="group block space-y-1"
					>
						<h3 class="font-medium group-hover:underline">
							第{chapter.number}章 {chapter.title}
						</h3>
						<p class="text-sm">{chapter.description}</p>
					</a>
				</li>
			))}
		</ol>
	);
}
