type ChecklistProps = {
	items: string[];
};

/** 章の終わりに置く、到達できたかを自分で確かめるための一覧。 */
export function Checklist({ items }: ChecklistProps) {
	return (
		<div class="space-y-2 rounded border border-border bg-surface p-4">
			<p class="font-medium text-sm">ここまでの確認</p>
			<ul class="list-none space-y-2 pl-0 text-sm">
				{items.map((item) => (
					<li key={item} class="flex gap-2">
						<span aria-hidden="true">☐</span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
