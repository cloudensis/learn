import type { Handler } from "hono";
import type { FC } from "hono/jsx";
import type { Article } from "./article";
import type { Book, BookChapter } from "./book";
import { site } from "./site";

/** ルートファイル（index.tsx）が export するもの */
type Page = { GET: Handler; ssg: true };

/** 記事ページ。meta の noindex もここで反映する */
export function articlePage(article: Article, Template: FC): Page {
	return {
		ssg: true,
		GET: (c) =>
			c.render(<Template />, {
				title: `${article.title} | ${site.name}`,
				description: article.description,
				ogImage: article.ogp,
				noindex: article.noindex,
			}),
	};
}

/** 本の目次ページ */
export function bookPage(book: Book, Template: FC): Page {
	return {
		ssg: true,
		GET: (c) =>
			c.render(<Template />, {
				title: `${book.title} | ${site.name}`,
				description: book.description,
				ogImage: book.ogp,
			}),
	};
}

/** 章のページ。OGP 画像は本のものを使う */
export function chapterPage(
	book: Book,
	chapter: BookChapter,
	Template: FC,
): Page {
	return {
		ssg: true,
		GET: (c) =>
			c.render(<Template />, {
				title: `${chapter.title} | ${book.title} | ${site.name}`,
				description: chapter.description,
				ogImage: book.ogp,
			}),
	};
}
