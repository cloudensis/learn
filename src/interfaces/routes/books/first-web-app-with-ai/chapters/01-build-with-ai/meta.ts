import type { BookChapter } from "#/src/domains/book/book";

const meta: BookChapter = {
	slug: "01-build-with-ai",
	number: 1,
	title: "AIにアプリを作ってもらう",
	description:
		"作りたいものを言葉で伝えて、AIにWebアプリを作ってもらいます。受け取ったものを自分のパソコンで動かし、気になるところを直すところまで進めます。",
	goal: "AIへの伝え方が分かり、作ってもらったアプリを自分のパソコンで動かして直せる",
	deliverable: "ブラウザで開くと動く、HTMLファイル1つ",
	estimatedMinutes: 60,
};

export default meta;
