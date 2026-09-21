type TroubleshootItem = {
	/** 起きている症状。 */
	symptom: string;
	/** その場での対処。 */
	action: string;
};

type TroubleshootProps = {
	title?: string;
	items: TroubleshootItem[];
};

/** 章ごとのつまずきと対処をまとめたブロック。 */
export function Troubleshoot({
	title = "つまずいたら",
	items,
}: TroubleshootProps) {
	return (
		<div class="space-y-3 rounded border border-border bg-surface p-4 text-sm">
			<p class="font-medium">{title}</p>
			<dl class="space-y-3">
				{items.map((item) => (
					<div key={item.symptom} class="space-y-1">
						<dt class="font-medium">{item.symptom}</dt>
						<dd>{item.action}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
