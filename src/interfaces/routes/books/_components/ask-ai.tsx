import { CodeBlock } from "@cloudensis/design-system/components/ui/code-block";

type AskAiProps = {
	/** 何のための質問かを示す見出し。 */
	title?: string;
	/** プロンプトの下に添える補足。 */
	note?: string;
	/** AIに送るプロンプト本文。 */
	children: string;
};

/** AIに投げるプロンプトを示すブロック。本文をクリックすると全選択できる。 */
export function AskAi({
	title = "AIに聞いてみましょう",
	note,
	children,
}: AskAiProps) {
	return (
		<div class="space-y-2">
			<p class="font-medium text-sm">{title}</p>
			<CodeBlock lang="markdown">{children}</CodeBlock>
			{note && <p class="text-fg-muted text-sm">{note}</p>}
		</div>
	);
}
