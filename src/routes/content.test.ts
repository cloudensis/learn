import { describe, expect, it } from "vitest";
import { articles } from "@/routes/articles/registry";
import { askStyles } from "@/routes/books/first-steps/_components/ask-styles";
import { findChapter } from "@/routes/books/first-steps/_components/chapter-ref";
import { books } from "@/routes/books/registry";

/* noindex の記事も含めて確かめるため、レジストリとは別に集める */
const allArticles = Object.values(
	import.meta.glob<{ default: { slug: string; publishedAt: string } }>(
		"./articles/*/meta.ts",
		{ eager: true },
	),
).map((module) => module.default);

const isDate = (value: string) =>
	/^\d{4}-\d{2}-\d{2}$/.test(value) &&
	!Number.isNaN(new Date(`${value}T00:00:00Z`).getTime()) &&
	new Date(`${value}T00:00:00Z`).toISOString().startsWith(value);

describe("記事", () => {
	it.each(allArticles.map((article) => [article.slug, article]))(
		"%s の publishedAt が YYYY-MM-DD の日付になっている",
		(_, article) => {
			expect(isDate(article.publishedAt)).toBe(true);
		},
	);

	it("slug が重複していない", () => {
		const slugs = allArticles.map((article) => article.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
	});

	it("一覧は公開日の新しい順に並ぶ", () => {
		const dates = articles.map((article) => article.publishedAt);
		expect(dates).toEqual([...dates].sort().reverse());
	});
});

describe.each(books.map((book) => [book.slug, book] as const))(
	"本 %s",
	(_, book) => {
		it("publishedAt が YYYY-MM-DD の日付になっている", () => {
			expect(isDate(book.publishedAt)).toBe(true);
		});

		it("章番号が 1 から欠番・重複なく並ぶ", () => {
			expect(book.chapters.map((chapter) => chapter.number)).toEqual(
				book.chapters.map((_, index) => index + 1),
			);
		});

		it("章の slug が重複していない", () => {
			const slugs = book.chapters.map((chapter) => chapter.slug);
			expect(new Set(slugs).size).toBe(slugs.length);
		});

		it("章の目安時間が正の整数になっている", () => {
			for (const chapter of book.chapters) {
				expect(Number.isInteger(chapter.estimatedMinutes)).toBe(true);
				expect(chapter.estimatedMinutes).toBeGreaterThan(0);
			}
		});
	},
);

describe("first-steps の聞き方", () => {
	it.each(Object.entries(askStyles))("%s の章が存在する", (_, style) => {
		expect(() => findChapter(style.slug)).not.toThrow();
	});
});
