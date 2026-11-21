import { company, site } from "@/lib/site";
import { HomeLink } from "@/routes/_components/home-link";

export const title = "運営者情報";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-8 p-5">
			<article class="prose max-w-5xl">
				<h1>{title}</h1>
				<p>
					{site.name} は、{company.name}
					が運営する、ソフトウェア開発を学ぶための無料の教材です。
				</p>
				<dl>
					<dt>運営者</dt>
					<dd>{company.name}</dd>
					<dt>お問い合わせ</dt>
					<dd>（要記入：問い合わせ先のメールアドレスまたはフォームの URL）</dd>
				</dl>
				<ul>
					<li>
						<a href="/privacy">プライバシーポリシー</a>
					</li>
					<li>
						<a href="/terms">利用規約</a>
					</li>
				</ul>
			</article>
			<HomeLink />
		</div>
	);
}
