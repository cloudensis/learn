import { CodeBlock } from "@cloudensis/design-system/components/ui/code-block";
import type { CodeLanguage } from "@cloudensis/design-system/lib/highlight";
import { type Child, cloneElement, isValidElement, useId } from "hono/jsx";
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

/**
 * CodeBlock が描画した要素のうち、目印で囲まれた部分を差し込み位置に置き換える。
 * 目印はハイライトで別々のトークンに分かれることがあるため、文書順にたどりながら
 * 開始から終了までの文字列を集める。
 */
function replacePlaceholders(node: Child): Child {
	let pendingKey: string | undefined;

	const visit = (child: Child): Child => {
		if (typeof child === "string") {
			const parts: Child[] = [];
			for (const part of child.split(/([])/)) {
				if (part === OPEN) {
					pendingKey = "";
				} else if (part === CLOSE) {
					const preference = preferences[pendingKey ?? ""];
					if (preference) {
						parts.push(
							<span data-preference-value={preference.key}>
								{preferenceLabel(preference, preference.defaultValue)}
							</span>,
						);
					}
					pendingKey = undefined;
				} else if (pendingKey !== undefined) {
					pendingKey += part;
				} else if (part) {
					parts.push(part);
				}
			}
			return parts.length === 1 ? parts[0] : parts;
		}
		if (Array.isArray(child)) {
			return child.map(visit);
		}
		if (isValidElement(child) && "children" in child.props) {
			return cloneElement(child, {}, visit(child.props.children as Child));
		}
		return child;
	};

	return visit(node);
}

/**
 * AIに送るプロンプトを示すコードブロック。design-system の CodeBlock で表示し、
 * コピーボタンで全文をコピーできる。
 * `{{os}}` のような差し込みを含むと、上に切り替えを表示し、選んだ値を
 * localStorage に保存してページ内のすべてのプロンプトへ反映する
 * （反映は src/interfaces/scripts/preferences.ts が行う）。
 */
export function PromptBlock({ lang = "markdown", children }: PromptBlockProps) {
	const id = useId();

	const used: Preference[] = [];
	const code = children.replace(placeholderPattern, (match, key: string) => {
		const preference = preferences[key];
		if (!preference) {
			return match;
		}
		if (!used.includes(preference)) {
			used.push(preference);
		}
		return `${OPEN}${key}${CLOSE}`;
	});

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
			{used.length > 0 ? (
				replacePlaceholders(CodeBlock({ lang, children: code }))
			) : (
				<CodeBlock lang={lang}>{code}</CodeBlock>
			)}
		</div>
	);
}
