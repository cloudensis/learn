import { chapterPage } from "@/lib/page";
import book from "@/routes/books/first-steps/meta";
import meta from "./meta";
import { Template } from "./template";

export const { GET, ssg } = chapterPage(book, meta, Template);
