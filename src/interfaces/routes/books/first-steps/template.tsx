import { Section } from "@cloudensis/design-system/components/layout/section";
import { totalMinutes } from "#/src/domains/book/book";
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
					<li>自分の作ったものが、インターネット上のURLで公開されている</li>
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
						必要なものは、パソコンとインターネット、そしてAIとの対話ツールを1つだけです
					</li>
					<li>
						どのAIを使うかは、あなたが選んでください。この本は特定のサービスを前提にしていません
					</li>
					<li>すべて無料の範囲で進められます</li>
				</ul>
			</Section>
		</div>
	);
}
