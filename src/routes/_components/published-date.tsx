type PublishedDateProps = {
	/** YYYY-MM-DD */
	date: string;
};

/** 記事の公開日。技術の手順は古くなるので、いつ書いたものかを読者に示す */
export function PublishedDate({ date }: PublishedDateProps) {
	const [year, month, day] = date.split("-").map(Number);
	return (
		<p class="text-sm">
			公開日：
			<time datetime={date}>
				{year}年{month}月{day}日
			</time>
		</p>
	);
}
