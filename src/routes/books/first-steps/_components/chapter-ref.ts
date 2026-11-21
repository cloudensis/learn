import type { BookChapter } from "@/lib/book";
import book from "@/routes/books/first-steps/meta";

/** この本の章を slug で引く。章の slug を変えてリンクが切れたら、ビルドを止める */
export function findChapter(slug: string): BookChapter {
	const chapter = book.chapters.find((item) => item.slug === slug);
	if (!chapter) {
		throw new Error(`first-steps に章 "${slug}" がありません`);
	}
	return chapter;
}

/** 章（と見出し）へのリンク先 */
export function chapterHref(slug: string, id?: string): string {
	const chapter = findChapter(slug);
	return `/books/${book.slug}/${chapter.slug}${id ? `#${id}` : ""}`;
}
