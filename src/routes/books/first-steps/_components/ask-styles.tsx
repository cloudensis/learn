/** この本でくり返し使う、AIへの聞き方。初めて教える章と見出しの id を持つ。 */
export const askStyles = {
	onePoint: {
		name: "一点だけ聞く",
		use: "分からない言葉が出てきたとき、その一点だけを範囲を区切って聞く",
		chapter: 1,
		slug: "01-how-to-use-this-book",
		id: "ask-one-point",
	},
	bigPicture: {
		name: "全体像を聞く",
		use: "何が関係するのか分からないとき、登場するものとつながりを先に聞く",
		chapter: 3,
		slug: "03-make-the-roadmap",
		id: "ask-big-picture",
	},
	howToChoose: {
		name: "選び方を聞く",
		use: "選択肢がいくつかあるとき、選択肢と選ぶときの基準を聞く",
		chapter: 4,
		slug: "04-run-it-locally",
		id: "ask-how-to-choose",
	},
	error: {
		name: "エラーを相談する",
		use: "動かないとき、やったこと・期待・実際・エラー全文をそろえて渡す",
		chapter: 5,
		slug: "05-break-and-fix",
		id: "ask-about-error",
	},
	officialDocs: {
		name: "公式資料を読ませる",
		use: "答えが正しいか、古くないかが気になるとき、公式資料の場所を先に渡す",
		chapter: 7,
		slug: "07-publish",
		id: "ask-with-official-docs",
	},
} as const;

export type AskStyle = (typeof askStyles)[keyof typeof askStyles];

/** 本文から聞き方を参照するときのリンク。「第N章の「名前」」の形で、初めて教えた箇所へ飛ぶ。 */
export function AskStyleLink({ style }: { style: AskStyle }) {
	return (
		<a href={`/books/first-steps/${style.slug}#${style.id}`} class="underline">
			第{style.chapter}章の「{style.name}」
		</a>
	);
}
