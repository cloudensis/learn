import type { Child } from "hono/jsx";

type SectionProps = {
	title: string;
	children: Child;
};

export function Section({ title, children }: SectionProps) {
	return (
		<section>
			<h2 class="mb-4 font-medium text-xl">{title}</h2>
			{children}
		</section>
	);
}
