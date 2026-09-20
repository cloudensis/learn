import { Hono } from "hono";
import { Template } from "./template";

export const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get("/", async (c) => {
	return c.render(<Template />);
});
