import type { Book } from "#/src/domains/book/book";

type BookListProps = {
	books: Book[];
};

export function BookList({ books }: BookListProps) {
	return (
		<ul class="space-y-6">
			{books.map((book) => (
				<li key={book.slug}>
					<a href={`/books/${book.slug}`} class="group block space-y-1">
						<h3 class="font-medium group-hover:underline">{book.title}</h3>
						<p class="text-sm">{book.description}</p>
						<p class="text-sm">全{book.chapters.length}章</p>
					</a>
				</li>
			))}
		</ul>
	);
}
