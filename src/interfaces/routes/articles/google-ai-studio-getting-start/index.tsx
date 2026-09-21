import { Hono } from "hono";
import meta from "./meta";
import { Template } from "./template";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get(`/articles/${meta.slug}`, async (c) => {
	return c.render(<Template />);
});

export default routes;
