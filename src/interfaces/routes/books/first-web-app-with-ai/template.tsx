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
					<li>
						自分で作ったWebアプリが、インターネット上のURLで公開されている
					</li>
					<li>
						そのURLを開いたときに何が起きているかを、自分の言葉で説明できる
					</li>
					<li>アプリが壊れても、エラーを読んでAIに相談しながら直せる</li>
					<li>この本を読み終えたあとも、AIと一緒に学び続けられる</li>
				</ul>
			</Section>

			<Section title="目次">
				<ChapterList book={meta} />
			</Section>

			<Section title="はじめる前に">
				<ul class="space-y-2">
					<li>プログラミングの経験は必要ありません</li>
					<li>
						必要なものは、パソコンとブラウザ、メールアドレス、そしてAI（ChatGPT・Gemini・Claudeのいずれか1つ）です
					</li>
					<li>
						すべて無料の範囲で進められます。クレジットカードの登録も不要です
					</li>
				</ul>
			</Section>
		</div>
	);
}
