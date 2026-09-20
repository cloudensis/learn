export function Template() {
	return (
		<article>
			<h1>【初学者向け】Google AI Studioでwebアプリを作ってみよう</h1>

			<p>
				Google AI Studio は Google が提供するアプリ開発プラットフォームです。
				作りたいものを文章で伝えるだけで Gemini
				がコードを書いてくれるので、プログラミングの経験がなくても web アプリや
				Android アプリを作成し、そのまま公開できます。
			</p>
			<p>
				この記事では「大学の時間割管理アプリ」を題材に、アプリを作って公開するまでの流れを一通り紹介します。
			</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio.png"
					alt="Google AI Studio で時間割管理アプリを作成している画面"
					width="1815"
					height="1518"
				/>
				<figcaption>Google AI Studio で作成したアプリの例</figcaption>
			</figure>

			<h2>Google AI Studio を開く</h2>
			<p>
				まずは{" "}
				<a
					href="https://aistudio.google.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google AI Studio
				</a>{" "}
				にアクセスします。右上の「Get started」から Google
				アカウントでログインするだけで、すぐに使いはじめられます。
			</p>
			<p>
				無料で試せますが、無料枠には利用回数の上限があります。使い込みたい場合は有料プランを検討してください。
			</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_get_started.png"
					alt="Google AI Studio のトップページ"
					width="1815"
					height="1518"
				/>
				<figcaption>Google AI Studio のトップページ</figcaption>
			</figure>

			<h2>プロンプトを入力してアプリを作る</h2>
			<p>
				ログインしたら、左メニューの「New
				app」を選び、作りたいアプリの内容を入力します。今回は次のように書きました。
			</p>

			<pre>
				<code>
					{`大学の時間割管理アプリを作成してください。
それぞれのコマであと何回休めるか管理、表示できるようにしてください。
ダークトーンでモダンなデザインにして下さい。`}
				</code>
			</pre>

			<p>
				ポイントは「何を作るのか」「どんな機能が欲しいのか」「どんな見た目にしたいのか」を分けて伝えることです。
				細かい仕様が決まっていなくても構いません。まずはざっくり伝えて、あとから追加のプロンプトで調整していくほうがうまくいきます。
			</p>
			<p>入力できたら「Build」を押します。</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_prompt.png"
					alt="New app の画面でプロンプトを入力している様子"
					width="2848"
					height="2362"
				/>
				<figcaption>作りたいアプリをそのまま文章で伝える</figcaption>
			</figure>

			<h2>デザインを選ぶ</h2>
			<p>
				プロンプトを送ると、デザインの候補がいくつか提案されます。
				プレビューを見ながら好みのものを選び、「Select this
				design」を押します。こだわりがなければ「Skip」でも構いません。
			</p>
			<p>今回は「Clean Minimalism」を選びました。</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_design.png"
					alt="デザインの候補から Clean Minimalism を選択している画面"
					width="2848"
					height="2362"
				/>
				<figcaption>提案されたデザインから好みのものを選ぶ</figcaption>
			</figure>

			<h2>生成されたアプリを確認する</h2>
			<p>
				あとは待つだけです。数分ほどで必要なファイルが一通り書き上がり、画面右側の「Preview」タブで動くアプリがそのまま確認できます。
				「Code」タブに切り替えれば、生成されたソースコードも読めます。
			</p>
			<p>
				今回は指示していない機能まで作り込まれていました。左側のチャットには、
				シラバスの文章を貼り付けると授業名や教室を自動で読み取る機能や、入力したデータを{" "}
				<code>localStorage</code>{" "}
				に保存する仕組みを追加した、といった説明が並んでいます。
			</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_result.png"
					alt="生成された時間割管理アプリのプレビュー画面"
					width="3548"
					height="2362"
				/>
				<figcaption>数分でここまで動くものができあがる</figcaption>
			</figure>

			<h2>アプリを共有する</h2>
			<p>
				できあがったアプリは、画面右上の「Share」からすぐに共有できます。
				「General access」を「Public: Anyone with the link can
				view」に変更し、「Copy
				link」でURLをコピーすれば、リンクを知っている人なら誰でもアプリを開けるようになります。
			</p>
			<p>
				このとき「Include your Gemini chat
				history」をオンにすると、アプリを作るまでのやりとりも一緒に公開されます。
				見せたくない内容が含まれている場合はオフのままにしておきましょう。
			</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_share.png"
					alt="Share パネルで公開範囲を設定している画面"
					width="2612"
					height="2362"
				/>
				<figcaption>公開範囲を選んでリンクをコピーする</figcaption>
			</figure>

			<p>コピーしたURLを開くと、アプリだけが表示された状態になります。</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_shared_app.png"
					alt="共有リンクから開いた時間割管理アプリ"
					width="2960"
					height="2362"
				/>
				<figcaption>共有リンクから開いたアプリ</figcaption>
			</figure>

			<h2>追加のプロンプトで修正する</h2>
			<p>
				気になるところがあれば、チャット欄にそのまま伝えるだけで直してもらえます。
				今回はスマートフォンで開くと情報量が多すぎたので、次のように依頼しました。
			</p>

			<pre>
				<code>
					{`スマホで見るには要素が多くて閲覧、操作がしづらいので、最低限の要素のみに絞って下さい。`}
				</code>
			</pre>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_additional_prompt.png"
					alt="チャット欄に追加のプロンプトを入力している画面"
					width="2508"
					height="2362"
				/>
				<figcaption>直してほしいところを文章で伝える</figcaption>
			</figure>

			<p>
				修正が終わると、共有したURLはそのままで内容だけが更新されます。
				曜日を切り替えるタブと、その日のコマの一覧だけが並ぶ、スマートフォンでも扱いやすい画面になりました。
			</p>

			<figure>
				<img
					src="/articles/google-ai-studio/getting-start/aistudio_shared_app_updated.png"
					alt="スマートフォン向けに要素を絞った時間割管理アプリ"
					width="1796"
					height="2362"
				/>
				<figcaption>修正後のアプリ。共有URLはそのまま使える</figcaption>
			</figure>

			<h2>まとめ</h2>
			<p>
				Google AI Studio
				を使うと、作りたいものを文章で伝えるだけでアプリができあがり、そのまま公開まで進められます。
				はじめから完璧な指示を書こうとせず、まずはざっくり作ってもらい、動かしながら追加のプロンプトで整えていくのがおすすめです。
			</p>
			<p>
				思いついたアイデアを形にするまでの距離がぐっと縮まるので、ぜひ試してみてください。
			</p>
		</article>
	);
}
