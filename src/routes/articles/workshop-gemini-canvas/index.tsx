import type { Handler } from "hono";
import { site } from "../../../lib/site";
import meta from "./meta";
import { Template } from "./template";

const ssg = true;

const GET: Handler = (c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${site.name}`,
		description: meta.description,
		ogImage: meta.ogp,
		noindex: meta.noindex,
	});
};

export { GET, ssg };
