/** 各章の「つまずいたら」の下に置く、第1章の共通ルールへの案内。 */
export function CommonRulesLink() {
	return (
		<>
			どれにも当てはまらないとき、同じところで何度も止まるときは、
			<a
				href="/books/first-steps/01-how-to-use-this-book#when-stuck"
				class="underline"
			>
				第1章の「詰まったときの共通ルール」
			</a>
			に戻ってください。
		</>
	);
}
