import { company, site } from "@/lib/site";
import { HomeLink } from "@/routes/_components/home-link";

export const title = "利用規約";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-8 p-5">
			<article class="prose max-w-5xl">
				<h1>{title}</h1>
				<p>
					{site.name}（以下「本サイト」）は、{company.name}
					（以下「当社」）が運営しています。本サイトを利用する前に、次の内容をお読みください。
				</p>

				<h2>料金</h2>
				<p>本サイトの教材は、無料で読めます。</p>

				<h2>内容の正確さ</h2>
				<ul>
					<li>
						教材は、執筆または確認した時点の情報に基づいています。外部サービスの画面や手順、料金は、予告なく変わることがあります。
					</li>
					<li>
						教材はAIサービスの利用を前提にしています。AIの答えは間違えることがあるため、教材で案内する方法で確かめてから使ってください。
					</li>
					<li>
						当社は内容の正確さに努めますが、本サイトの利用によって生じた損害について、当社に故意または重大な過失がある場合を除き、責任を負いません。
					</li>
				</ul>

				<h2>著作権</h2>
				<p>
					本サイトの文章・画像の著作権は、当社または正当な権利者に帰属します。
					引用の範囲を超えて転載・配布する場合は、
					<a href="/about">運営者情報</a>の窓口までご相談ください。
				</p>

				<h2>改定</h2>
				<p>
					この規約は、必要に応じて改定します。改定したときは、このページでお知らせします。
				</p>
			</article>
			<HomeLink />
		</div>
	);
}
