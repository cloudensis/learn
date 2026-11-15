import { defineHandler } from "hono/factory";
import { site } from "#/src/domains/company/constants";
import book from "../meta";
import meta from "./meta";
import { Template } from "./template";

const ssg = true;

const GET = defineHandler((c) => {
	return c.render(<Template />, {
		title: `${meta.title} | ${book.title} | ${site.name}`,
		description: meta.description,
		ogImage: book.ogp,
	});
});

export { GET, ssg };
