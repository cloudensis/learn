import { defineHandler } from "hono/factory";
import { Template } from "./template";

const ssg = true;

const GET = defineHandler((c) => {
	return c.render(<Template />);
});

export { GET, ssg };
