import { Hono } from "hono";
import { site } from "#/src/domains/company/constants";
import meta from "./meta";
import { Template } from "./template";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get(`/articles/${meta.slug}`, async (c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${site.name}`,
		description: meta.description,
		ogImage: meta.ogp,
	});
});

export default routes;
