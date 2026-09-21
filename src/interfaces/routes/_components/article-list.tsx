import type { Article } from "#/src/domains/article/article";

type ArticleListProps = {
	articles: Article[];
};

export function ArticleList({ articles }: ArticleListProps) {
	if (articles.length === 0) {
		return <p class="text-sm">まだ記事がありません。</p>;
	}

	return (
		<ul class="space-y-6">
			{articles.map((article) => (
				<li key={article.slug}>
					<a href={`/articles/${article.slug}`} class="group block space-y-1">
						<h3 class="font-medium group-hover:underline">{article.title}</h3>
						<p class="text-sm">{article.description}</p>
					</a>
				</li>
			))}
		</ul>
	);
}
