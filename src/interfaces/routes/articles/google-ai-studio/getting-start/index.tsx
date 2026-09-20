import { Hono } from "hono";
import { Template } from "./template";

export const googleAiStudioGettingStartRoutes = new Hono<{
	Bindings: CloudflareBindings;
}>();

googleAiStudioGettingStartRoutes.get("/", async (c) => {
	return c.render(<Template />);
});
