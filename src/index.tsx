import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { NotFound } from "./components/not-found";
import { type RouteModule, registerRoutes } from "./lib/router";
import { securityHeaders } from "./lib/security-headers";
import { renderer } from "./renderer";

const app = new Hono();

// 静的アセットは public/_headers で同じヘッダーを付ける
app.use(async (c, next) => {
	await next();
	for (const [name, value] of Object.entries(securityHeaders)) {
		c.res.headers.set(name, value);
	}
});
app.use(trimTrailingSlash({ alwaysRedirect: true }));
app.use(renderer);

registerRoutes(
	app,
	import.meta.glob<RouteModule>("./routes/**/index.{ts,tsx}", { eager: true }),
);

app.notFound((c) => {
	c.status(404);
	return c.render(<NotFound />, { noindex: true });
});

app.onError((err, c) => {
	console.error(err);
	c.status(500);
	return c.render(
		<div class="mx-auto max-w-5xl px-4 py-12 lg:px-8">
			<h1 class="text-2xl font-medium">サーバーエラーが発生しました</h1>
		</div>,
		{ noindex: true },
	);
});

export default app;
