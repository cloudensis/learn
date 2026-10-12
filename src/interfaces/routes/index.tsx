import { Hono } from "hono";
import { Template } from "./template";

const routes = new Hono();

routes.get("/", async (c) => {
	return c.render(<Template />);
});

export default routes;
