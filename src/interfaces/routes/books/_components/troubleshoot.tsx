import type { Child } from "hono/jsx";

type TroubleshootItem = {
	/** 起きている症状。 */
	symptom: string;
	/** その場での対処。 */
	action: string;
};

type TroubleshootProps = {
	items: TroubleshootItem[];
	/** 一覧の下に添える案内。どれにも当てはまらないときの戻り先などに使う。 */
	footer?: Child;
};

/** 章ごとのつまずきと対処をまとめたブロック。 */
export function Troubleshoot({ items, footer }: TroubleshootProps) {
	return (
		<div class="space-y-3 rounded border border-border bg-surface p-4 text-sm">
			<p class="font-medium">つまずいたら</p>
			<dl class="space-y-3">
				{items.map((item) => (
					<div key={item.symptom} class="space-y-1">
						<dt class="font-medium">{item.symptom}</dt>
						<dd>{item.action}</dd>
					</div>
				))}
			</dl>
			{footer && <p>{footer}</p>}
		</div>
	);
}
