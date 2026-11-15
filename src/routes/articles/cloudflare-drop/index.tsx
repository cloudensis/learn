import { defineHandler } from "hono/factory";
import { site } from "#/src/domains/company/constants";
import meta from "./meta";
import { Template } from "./template";

const ssg = true;

const GET = defineHandler((c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${site.name}`,
		description: meta.description,
		ogImage: meta.ogp,
	});
});

export { GET, ssg };
