import type { Article } from "./article";
import type { Book, BookChapter } from "./book";
import { company, site } from "./site";

/** JSON-LD（schema.org）のオブジェクト */
export type JsonLd = Record<string, unknown>;

const absolute = (path: string) => new URL(path, site.url).toString();

const publisher = { "@type": "Organization", name: company.name };

function breadcrumb(items: { name: string; path: string }[]): JsonLd {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: absolute(item.path),
		})),
	};
}

export function articleJsonLd(article: Article): JsonLd[] {
	const path = `/articles/${article.slug}`;
	return [
		{
			"@context": "https://schema.org",
			"@type": "Article",
			headline: article.title,
			description: article.description,
			datePublished: article.publishedAt,
			image: absolute(article.ogp ?? "/ogp.png"),
			inLanguage: "ja",
			mainEntityOfPage: absolute(path),
			author: publisher,
			publisher,
		},
		breadcrumb([
			{ name: site.name, path: "/" },
			{ name: article.title, path },
		]),
	];
}

export function bookJsonLd(book: Book): JsonLd[] {
	const path = `/books/${book.slug}`;
	return [
		{
			"@context": "https://schema.org",
			"@type": "Book",
			name: book.title,
			description: book.description,
			datePublished: book.publishedAt,
			image: absolute(book.ogp ?? "/ogp.png"),
			inLanguage: "ja",
			url: absolute(path),
			author: publisher,
			publisher,
			isAccessibleForFree: true,
		},
		breadcrumb([
			{ name: site.name, path: "/" },
			{ name: book.title, path },
		]),
	];
}

export function chapterJsonLd(book: Book, chapter: BookChapter): JsonLd[] {
	return [
		breadcrumb([
			{ name: site.name, path: "/" },
			{ name: book.title, path: `/books/${book.slug}` },
			{ name: chapter.title, path: `/books/${book.slug}/${chapter.slug}` },
		]),
	];
}
