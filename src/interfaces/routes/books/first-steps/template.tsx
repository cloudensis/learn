import { Section } from "@cloudensis/design-system/components/layout/section";
import { totalMinutes } from "#/src/domains/book/book";
import { HomeLink } from "../../_components/home-link";
import { ChapterList } from "../_components/chapter-list";
import meta from "./meta";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-12 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{meta.title}</h1>
				<p>{meta.description}</p>
				<p class="text-fg-muted text-sm">
					全{meta.chapters.length}章 ／ 目安 約
					{Math.round(totalMinutes(meta) / 60)}
					時間 ／ 費用 0円
				</p>
			</div>

			<Section title="この本を終えたときの状態">
				<ul class="space-y-2">
					<li>自分で作ったゲームが、インターネット上のURLで公開されている</li>
					<li>
						分からないことをAIに聞き、返ってきた答えの正しさを自分で確かめられる
					</li>
					<li>詰まったとき、原因の場所を切り分けてAIに相談できる</li>
					<li>次に何を学ぶかを、理由をつけて自分で決められる</li>
				</ul>
				<p class="mt-4 text-fg-muted text-sm">
					最初のひとつは、途中で手が止まらないための目印です。この本の本題は、残りの3つのほうにあります。
				</p>
			</Section>

			<Section title="目次">
				<ChapterList book={meta} />
			</Section>

			<Section title="はじめる前に">
				<ul class="space-y-2">
					<li>ソフトウェア開発の知識は、まったくなくてかまいません</li>
					<li>
						必要なものは、Windows または Mac
						のパソコン、インターネット、メールアドレス、そしてAIとの対話ツールを1つだけです
					</li>
					<li>
						AIは、作ったものをその場で動かして見せる機能があるものを選んでください。ChatGPT
						や Gemini の Canvas、Claude の Artifacts がこれにあたります
					</li>
					<li>
						コマンドを打ち込む操作や、Git
						のような専門の道具は使いません。すべて画面の操作だけで進められます
					</li>
					<li>
						すべて無料の範囲で進められます。クレジットカードの登録も要りません
					</li>
					<li>
						パソコンのファイルやフォルダの扱いに自信がない人は、先に
						<a
							href="/articles/files-and-folders"
							target="_blank"
							rel="noopener noreferrer"
							class="underline"
						>
							ダウンロードに置きっぱなしを卒業する：ファイルとフォルダの基本
						</a>
						を読んでおくと安心です
					</li>
				</ul>
			</Section>

			<nav class="border-border border-t pt-6">
				<HomeLink />
			</nav>
		</div>
	);
}
