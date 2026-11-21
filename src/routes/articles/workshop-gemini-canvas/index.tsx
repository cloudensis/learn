import { articlePage } from "@/lib/page";
import meta from "./meta";
import { Template } from "./template";

export const { GET, ssg } = articlePage(meta, Template);
