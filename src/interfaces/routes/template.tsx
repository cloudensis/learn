import { Section } from "@cloudensis/design-system/components/layout/section";
import { LinkButton } from "@cloudensis/design-system/components/ui/button";
import { site } from "#/src/domains/company/constants";
import { ArticleList } from "./_components/article-list";
import { BookList } from "./_components/book-list";
import { articles } from "./articles/registry";
import { books } from "./books/registry";

const goals = [
	{
		title: "次に何を学ぶかを、自分で決められる",
		description:
			"ソフトウェア開発の全体像の中で、今いる場所が分かるようになります。作りたいものから逆算して、何をどの順番で学ぶかを、理由をつけて決められる状態を目指します。",
	},
	{
		title: "AIの答えが正しいかを、自分で確かめられる",
		description:
			"AIは間違えることも、古い情報を返すこともあります。実際に動かして確かめる、公式の資料と照らし合わせる。この2つを、教材の中でくり返し使っていただきます。",
	},
	{
		title: "詰まったときに、原因を切り分けて相談できる",
		description:
			"エラーが出たときに、どこで何が起きているのかを絞り込み、要点をまとめてAIに相談できるようになります。ここが、ひとりで学び続けるための分かれ目です。",
	},
] as const;

const policies = [
	{
		title: "AIと一緒に進めます",
		description:
			"解説を読んで覚えるのではなく、AIに聞きながら手を動かして進みます。そのための聞き方も、教材の中でお伝えします。",
	},
	{
		title: "読むだけで終わりません",
		description:
			"どの章にも、ゴールと目安の時間、そして終わったときに手元に残るものを用意しています。",
	},
	{
		title: "画面の手順は、あまり書きません",
		description:
			"サービスの画面は数か月で変わります。何を達成したいかをお伝えし、そのときどきの操作はAIに聞いていただく形にしています。この聞き方自体が、読み終えたあとも使える技術です。",
	},
	{
		title: "コードの全文は載せません",
		description:
			"写して動かすだけでは、次に応用できません。お渡しするのは「何をAIに頼むか」と「返ってきたものをどう確かめるか」です。",
	},
	{
		title: "プロンプトは、そのまま送れる形で置いています",
		description:
			"本文に出てくるプロンプトは、コピーしてそのままAIに送れます。書き換えていただきたい箇所には、その旨を添えています。",
	},
] as const;

const questionTypes = [
	{
		name: "一点だけ聞く",
		use: "分からない言葉が出てきたとき、その一点だけを範囲を区切って聞く",
	},
	{
		name: "全体像を聞く",
		use: "何が関係するのか分からないとき、登場するものとつながりを先に聞く",
	},
	{
		name: "選び方を聞く",
		use: "選択肢がいくつかあるとき、選択肢と選ぶときの基準を聞く",
	},
	{
		name: "エラーを相談する",
		use: "動かないとき、やったこと・期待・実際・エラー全文をそろえて渡す",
	},
	{
		name: "公式資料を読ませる",
		use: "答えが正しいか、古くないかが気になるとき、公式資料の場所を先に渡す",
	},
] as const;

export function Template() {
	const featuredBook = books.at(0);

	return (
		<div class="mx-auto max-w-5xl space-y-16 px-4 py-12 lg:px-8">
			<div class="space-y-4">
				<h1 class="font-medium text-2xl">{site.name}</h1>
				<p>ソフトウェア開発者のための、無料の学習教材です。</p>
				<p>
					ChatGPTやClaudeなど、普段使っているAIを使ってソフトウェア開発を学習する方法を提供します。
					この教材を離れたあとも、AIを学習パートナーとして独学できる状態を目標にしています。
				</p>
				{featuredBook && (
					<div class="pt-2">
						<LinkButton href={`/books/${featuredBook.slug}`}>
							{featuredBook.title}を読みはじめる
						</LinkButton>
					</div>
				)}
			</div>

			<Section title="読み終えたときの状態">
				<ul class="space-y-6">
					{goals.map((goal) => (
						<li key={goal.title} class="space-y-1">
							<h3 class="font-medium">{goal.title}</h3>
							<p class="text-sm">{goal.description}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section title="この教材の進め方">
				<ul class="space-y-6">
					{policies.map((policy) => (
						<li key={policy.title} class="space-y-1">
							<h3 class="font-medium">{policy.title}</h3>
							<p class="text-sm">{policy.description}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section title="くり返し使う、AIへの聞き方">
				<p class="mb-4 text-sm">
					毎回ちがう聞き方を覚える必要はありません。次の5つの聞き方を全編でくり返し使い、
					手が覚えている状態にしていきます。一覧は本の第1章で、書き方はそれぞれ必要になった章でお伝えします。
				</p>
				<ul class="space-y-4 rounded border border-border bg-surface p-4">
					{questionTypes.map((questionType) => (
						<li key={questionType.name} class="space-y-1 text-sm">
							<p class="font-medium">{questionType.name}</p>
							<p class="text-fg-muted">{questionType.use}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section title="こんな方に向けて書いています">
				<ul class="space-y-2">
					<li>ソフトウェア開発の知識がまったくない、大学1年生の方</li>
					<li>これからプログラミングをはじめてみたい、高校生の方</li>
					<li>ソフトウェア業界への転職を考えている、社会人の方</li>
					<li>自分の仕事にソフトウェアの知識を活かしたい、社会人の方</li>
				</ul>
				<p class="mt-4 text-sm">
					プログラミングの経験は必要ありません。必要なものは、パソコンとブラウザ、
					メールアドレス、そしてAI（ChatGPT・Gemini・Claudeのいずれか1つ）だけです。
					すべて無料の範囲で進められます。
				</p>
			</Section>

			{books.length !== 0 && (
				<Section title="Books">
					<p class="mb-4 text-sm">
						順番に読み進める、章立ての教材です。考え方と判断の基準をあつかいます。
						最後まで進むと、形に残るものができあがります。
					</p>
					<BookList books={books} />
				</Section>
			)}

			{articles.length !== 0 && (
				<Section title="Articles">
					<p class="mb-4 text-sm">
						ひとつのテーマで完結する読みものです。道具の使い方など、
						いま手を動かすのに役立つ話をあつかいます。気になったものから読めます。
					</p>
					<ArticleList articles={articles} />
				</Section>
			)}
		</div>
	);
}
