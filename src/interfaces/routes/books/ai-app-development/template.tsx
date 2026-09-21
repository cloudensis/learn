import { Section } from "@cloudensis/design-system/components/layout/section";
import { ChapterList } from "../_components/chapter-list";
import meta from "./meta";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-12 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{meta.title}</h1>
				<p>{meta.description}</p>
			</div>

			<Section title="目次">
				<ChapterList book={meta} />
			</Section>
		</div>
	);
}
