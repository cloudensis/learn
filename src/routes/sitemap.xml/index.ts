import type { Handler } from "hono";
import { site } from "@/lib/site";
import { articles } from "@/routes/articles/registry";
import { books } from "@/routes/books/registry";

const ssg = true;

/**
 * 検索エンジンに知らせるページのパス。
 * noindex の記事は articles に含まれないので、ここにも出ない。
 * 更新日を持っていないため lastmod は出さない（公開日を入れると誤った更新日になる）。
 */
function paths(): string[] {
	return [
		"/",
		...books.flatMap((book) => [
			`/books/${book.slug}`,
			...book.chapters.map((chapter) => `/books/${book.slug}/${chapter.slug}`),
		]),
		...articles.map((article) => `/articles/${article.slug}`),
	];
}

const GET: Handler = (c) => {
	const urls = paths()
		.map((path) => `<url><loc>${new URL(path, site.url)}</loc></url>`)
		.join("\n");
	return c.body(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		200,
		{ "Content-Type": "application/xml; charset=utf-8" },
	);
};

export { GET, ssg };
