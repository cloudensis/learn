import {
	type Book,
	type BookChapter,
	chapterLabel,
} from "#/src/domains/book/book";

type ChapterHeaderProps = {
	book: Book;
	chapter: BookChapter;
};

/** 章の冒頭に置く、ゴールと成果物を示す見出し。 */
export function ChapterHeader({ book, chapter }: ChapterHeaderProps) {
	return (
		<header class="space-y-4">
			<p class="text-fg-muted text-sm">
				<a href={`/books/${book.slug}`} class="hover:underline">
					{book.title}
				</a>
			</p>
			<h1 class="font-medium text-2xl">
				{chapterLabel(chapter)} {chapter.title}
			</h1>
			<dl class="space-y-2 rounded border border-border bg-surface p-4 text-sm">
				<div class="flex gap-3">
					<dt class="shrink-0 font-medium">ゴール</dt>
					<dd>{chapter.goal}</dd>
				</div>
				<div class="flex gap-3">
					<dt class="shrink-0 font-medium">手に入るもの</dt>
					<dd>{chapter.deliverable}</dd>
				</div>
				<div class="flex gap-3">
					<dt class="shrink-0 font-medium">目安の時間</dt>
					<dd>{chapter.estimatedMinutes}分</dd>
				</div>
			</dl>
		</header>
	);
}
