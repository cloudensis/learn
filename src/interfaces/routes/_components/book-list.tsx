import type { Book } from "#/src/domains/book/book";

type BookListProps = {
	books: Book[];
};

export function BookList({ books }: BookListProps) {
	return (
		<ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
			{books.map((book) => (
				<li key={book.slug}>
					<a href={`/books/${book.slug}`} class="block space-y-2">
						<div class="flex aspect-5/7 rounded-r border-neutral-950 border-l-8 bg-neutral-800 p-3 text-neutral-100 shadow hover:opacity-80">
							<div class="flex flex-1 items-center justify-center border border-neutral-500 p-2">
								<h3 class="text-center font-medium">{book.title}</h3>
							</div>
						</div>
						<p class="text-fg-muted text-sm">全{book.chapters.length}章</p>
						<p class="text-sm">{book.description}</p>
					</a>
				</li>
			))}
		</ul>
	);
}
