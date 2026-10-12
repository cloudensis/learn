import { Hono } from "hono";
import { renderer } from "#/src/interfaces/middleware/renderer";
import { Template as NotFoundTemplate } from "#/src/interfaces/routes/not-found/template";

const app = new Hono();

app.use(renderer);

const routeModules = import.meta.glob<{ default: Hono }>(
	"./interfaces/routes/**/index.tsx",
	{ eager: true },
);

for (const path of Object.keys(routeModules).sort()) {
	app.route("/", routeModules[path].default);
}

app.notFound((c) => {
	c.status(404);
	return c.render(<NotFoundTemplate />, { noindex: true });
});

export default app;
