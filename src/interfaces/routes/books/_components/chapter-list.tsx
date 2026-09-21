import { type Book, chapterLabel } from "#/src/domains/book/book";

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
							{chapterLabel(chapter)} {chapter.title}
						</h3>
						<p class="text-sm">{chapter.description}</p>
						<p class="text-fg-muted text-sm">
							目安 {chapter.estimatedMinutes}分 ／ {chapter.deliverable}
						</p>
					</a>
				</li>
			))}
		</ol>
	);
}
