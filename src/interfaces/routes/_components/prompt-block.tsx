import { CopyIcon } from "@cloudensis/design-system/components/icon/copy";
import { Tooltip } from "@cloudensis/design-system/components/ui/tooltip";
import {
	type CodeLanguage,
	type CodeToken,
	highlight,
} from "@cloudensis/design-system/lib/highlight";
import { Fragment, useId } from "hono/jsx";
import {
	type Preference,
	preferenceLabel,
	preferences,
} from "#/src/domains/preference/preference";

type PromptBlockProps = {
	/** 省略すると markdown としてハイライトする。 */
	lang?: CodeLanguage;
	/** AIに送る文。`{{key}}` は preferences の値に置き換わる。 */
	children: string;
};

/* ハイライトでトークンが分かれても差し込み位置を見失わないよう、私用領域の文字で囲む。 */
const OPEN = "";
const CLOSE = "";
const placeholderPattern = /\{\{(\w+)\}\}/g;

type Segment =
	| { kind: "text"; content: string; style: string }
	| { kind: "preference"; preference: Preference; style: string };

/** 行のトークンを、ふつうの文字列と差し込み位置に分け直す。 */
function toSegments(tokens: CodeToken[]): Segment[] {
	const segments: Segment[] = [];
	let pendingKey: string | undefined;
	for (const token of tokens) {
		for (const part of token.content.split(/([])/)) {
			if (part === OPEN) {
				pendingKey = "";
			} else if (part === CLOSE) {
				const preference = preferences[pendingKey ?? ""];
				if (preference) {
					segments.push({ kind: "preference", preference, style: token.style });
				}
				pendingKey = undefined;
			} else if (pendingKey !== undefined) {
				pendingKey += part;
			} else if (part) {
				segments.push({ kind: "text", content: part, style: token.style });
			}
		}
	}
	return segments;
}

/**
 * AIに送るプロンプトを示すコードブロック。クリックで全選択できる。
 * `{{os}}` のような差し込みを含むと、上に切り替えを表示し、選んだ値を
 * localStorage に保存してページ内のすべてのプロンプトへ反映する
 * （反映は src/interfaces/scripts/preferences.ts が行う）。
 */
export function PromptBlock({ lang = "markdown", children }: PromptBlockProps) {
	const id = useId();
	/* JSX のテンプレートリテラルで前後に入りやすい空行を落とします。 */
	const source = children.replace(/^[\r\n]+/, "").trimEnd();

	const used: Preference[] = [];
	const code = source.replace(placeholderPattern, (match, key: string) => {
		const preference = preferences[key];
		if (!preference) {
			return match;
		}
		if (!used.includes(preference)) {
			used.push(preference);
		}
		return `${OPEN}${key}${CLOSE}`;
	});

	const lines =
		highlight(code, lang) ??
		code.split("\n").map((content) => [{ content, style: "" }]);

	return (
		<div class="space-y-1.5">
			{used.map((preference) => (
				<div
					key={preference.key}
					role="radiogroup"
					aria-label={preference.label}
					class="flex flex-wrap items-center justify-end gap-3 text-fg-muted text-xs"
				>
					<span>{preference.label}</span>
					{preference.options.map((option) => (
						<label
							key={option.value}
							class="inline-flex cursor-pointer items-center gap-1"
						>
							<input
								type="radio"
								name={`${id}-${preference.key}`}
								value={option.value}
								checked={option.value === preference.defaultValue}
								data-preference-key={preference.key}
								data-preference-label={option.label}
							/>
							{option.label}
						</label>
					))}
				</div>
			))}
			<Tooltip
				class="block w-full"
				label={
					<>
						<CopyIcon class="size-3.5" />
						クリックで全選択
					</>
				}
			>
				<pre
					data-slot="code-block"
					tabindex={0}
					class="cursor-pointer select-all overflow-x-auto rounded border border-code-border bg-code-bg p-4 text-code-fg text-sm"
				>
					<code>
						{lines.map((line, lineIndex) => (
							<Fragment key={String(lineIndex)}>
								{lineIndex > 0 ? "\n" : null}
								{toSegments(line).map((segment, segmentIndex) => (
									<span
										key={String(segmentIndex)}
										style={segment.style || undefined}
									>
										{segment.kind === "text" ? (
											segment.content
										) : (
											<span data-preference-value={segment.preference.key}>
												{preferenceLabel(
													segment.preference,
													segment.preference.defaultValue,
												)}
											</span>
										)}
									</span>
								))}
							</Fragment>
						))}
					</code>
				</pre>
			</Tooltip>
		</div>
	);
}
