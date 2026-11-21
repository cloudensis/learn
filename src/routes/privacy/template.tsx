import { company, site } from "@/lib/site";
import { HomeLink } from "@/routes/_components/home-link";

export const title = "プライバシーポリシー";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-8 p-5">
			<article class="prose max-w-5xl">
				<h1>{title}</h1>
				<p>
					{company.name}（以下「当社」）は、{site.name}
					（以下「本サイト」）での利用者の情報の扱いを、次のとおり定めます。
				</p>

				<h2>本サイトが集める情報</h2>
				<p>
					本サイトには会員登録やお問い合わせフォームはなく、名前やメールアドレスなどの個人情報を本サイト上で集めることはありません。
				</p>

				<h2>ブラウザに保存する情報</h2>
				<p>
					プロンプトの表示を切り替える機能（利用OS・ブラウザの選択）は、選んだ値を利用者のブラウザの
					localStorage に保存します。この値は当社のサーバーには送られません。
					ブラウザの設定から、いつでも削除できます。
				</p>

				<h2>アクセスの記録</h2>
				<p>
					本サイトは Cloudflare, Inc.
					のサービスで配信しています。配信やエラーの調査のため、IPアドレス、ブラウザの種類、閲覧したページなどのアクセスの記録が
					Cloudflare
					に残ることがあります。これらは本サイトの運営と改善のためにだけ使います。
				</p>

				<h2>外部サービス</h2>
				<p>
					本サイトは、AIサービスや Google
					フォームなど外部のサービスへのリンクを含みます。リンク先での情報の扱いは、各サービスのプライバシーポリシーに従います。
				</p>

				<h2>改定</h2>
				<p>
					このポリシーは、必要に応じて改定します。改定したときは、このページでお知らせします。
				</p>

				<h2>お問い合わせ</h2>
				<p>
					このポリシーについてのお問い合わせは、
					<a href="/about">運営者情報</a>の窓口までご連絡ください。
				</p>
			</article>
			<HomeLink />
		</div>
	);
}
