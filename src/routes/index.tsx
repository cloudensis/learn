import type { Handler } from "hono";
import { Template } from "./template";

const ssg = true;

const GET: Handler = (c) => {
	return c.render(<Template />);
};

export { GET, ssg };
