import type { Handler } from "hono";
import { site } from "@/lib/site";
import { Template, title } from "./template";

const ssg = true;

const GET: Handler = (c) => {
	return c.render(<Template />, { title: `${title} | ${site.name}` });
};

export { GET, ssg };
