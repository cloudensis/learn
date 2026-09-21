import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { HTTPException } from "hono/http-exception";
import { renderer } from "#/src/interfaces/middleware/renderer";
import { homeRoutes } from "#/src/interfaces/routes";
import { googleAiStudioGettingStartRoutes } from "#/src/interfaces/routes/articles/google-ai-studio/getting-start";
import { Template as ErrorTemplate } from "#/src/interfaces/routes/error/template";
import { Template as NotFoundTemplate } from "#/src/interfaces/routes/not-found/template";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use(renderer);
app.use(csrf());

app.route("/", homeRoutes);
app.route("/", googleAiStudioGettingStartRoutes);

app.notFound((c) => {
	c.status(404);
	return c.render(<NotFoundTemplate />);
});

app.onError((error, c) => {
	// CSRF の 403 など、意図して投げられた HTTP エラーはそのまま返す
	if (error instanceof HTTPException) {
		return error.getResponse();
	}

	console.error("Unhandled error", error);
	c.status(500);
	return c.render(<ErrorTemplate />);
});

export default app;
