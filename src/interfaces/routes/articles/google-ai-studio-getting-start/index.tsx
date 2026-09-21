import { Hono } from "hono";
import { Template } from "./template";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get("/articles/google-ai-studio-getting-start", async (c) => {
	return c.render(<Template />);
});

export default routes;
