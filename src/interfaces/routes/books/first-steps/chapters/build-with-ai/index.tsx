import { Hono } from "hono";
import { site } from "#/src/domains/company/constants";
import book from "../../meta";
import meta from "./meta";
import { Template } from "./template";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get(`/books/${book.slug}/${meta.slug}`, async (c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${book.title} | ${site.name}`,
		description: meta.description,
		ogImage: book.ogp,
	});
});

export default routes;
