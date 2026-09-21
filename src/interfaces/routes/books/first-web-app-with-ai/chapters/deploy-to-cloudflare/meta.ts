import type { BookChapter } from "#/src/domains/book/book";

const meta: BookChapter = {
	slug: "deploy-to-cloudflare",
	number: 2,
	title: "世界に公開する",
	description:
		"作ったファイルをCloudflareにアップロードして、インターネットに公開します。自分だけのURLが手に入り、スマートフォンからも友達からも開けるようになります。",
	goal: "自分の作ったアプリをインターネットに公開し、URLで誰にでも見せられる",
	deliverable: "自分の公開URL",
	estimatedMinutes: 45,
};

export default meta;
