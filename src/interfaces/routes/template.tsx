import { Section } from "@cloudensis/design-system/components/layout/section";
import { site } from "#/src/domains/company/constants";
import { ArticleList } from "./_components/article-list";
import { BookList } from "./_components/book-list";
import { articles } from "./articles/registry";
import { books } from "./books/registry";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-16 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{site.name}</h1>
				<p>{site.description}</p>
				<p>
					分からないことはAIに聞ける時代になりました。このサイトがお渡しするのは、
					知識そのものではなく、どの順番で進むかという地図と、AIへの聞き方です。
					読み終えたあとも、ひとりで学び続けられる状態を目指しています。
				</p>
			</div>

			<Section title="このサイトの教材について">
				<ul class="space-y-4">
					<li>
						<strong>AIと一緒に進めます。</strong>
						解説を読んで覚えるのではなく、AIに聞きながら手を動かして進みます。
						そのための質問のしかたも、教材の中でお伝えします。
					</li>
					<li>
						<strong>読むだけで終わりません。</strong>
						どの章にも、終わったときに手元に残るものを用意しています。
					</li>
					<li>
						<strong>画面の手順は、あまり書きません。</strong>
						サービスの画面は変わります。何を達成したいかをお伝えし、
						具体的な操作は、そのつどAIに聞いていただく形にしています。
					</li>
					<li>
						<strong>無料ではじめられます。</strong>
						プログラミングの経験も必要ありません。
					</li>
				</ul>
			</Section>

			{books.length !== 0 && (
				<Section title="本">
					<p class="mb-4 text-sm">
						順番に読み進める、章立ての教材です。最後まで進むと、形に残るものができあがります。
					</p>
					<BookList books={books} />
				</Section>
			)}

			{articles.length !== 0 && (
				<Section title="記事">
					<p class="mb-4 text-sm">
						ひとつのテーマで完結する読みものです。気になったものから読めます。
					</p>
					<ArticleList articles={articles} />
				</Section>
			)}
		</div>
	);
}
