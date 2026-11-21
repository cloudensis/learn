import type { Handler } from "hono";
import { site } from "@/lib/site";
import book from "@/routes/books/first-steps/meta";
import meta from "./meta";
import { Template } from "./template";

const ssg = true;

const GET: Handler = (c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${book.title} | ${site.name}`,
		description: meta.description,
		ogImage: book.ogp,
	});
};

export { GET, ssg };
