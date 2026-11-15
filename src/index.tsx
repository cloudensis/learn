import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { type RouteModule, registerRoutes } from "#/src/lib/router";
import { renderer } from "#/src/renderer";
import { Template as NotFoundTemplate } from "#/src/routes/not-found/template";

const app = new Hono();

app.use(trimTrailingSlash({ alwaysRedirect: true }));
app.use(renderer);

registerRoutes(
	app,
	import.meta.glob<RouteModule>("./routes/**/index.{ts,tsx}", { eager: true }),
);

app.notFound((c) => {
	c.status(404);
	return c.render(<NotFoundTemplate />, { noindex: true });
});

app.onError((c) => {
	console.error(c.error);
	c.status(500);
	return c.render(<h1>500 Internal Server Error</h1>, { noindex: true });
});

export default app;
