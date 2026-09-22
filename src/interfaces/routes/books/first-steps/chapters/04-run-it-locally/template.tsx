import { AskAi } from "../../../_components/ask-ai";
import { ChapterHeader } from "../../../_components/chapter-header";
import { ChapterNav } from "../../../_components/chapter-nav";
import { Checklist } from "../../../_components/checklist";
import { Troubleshoot } from "../../../_components/troubleshoot";
import { AskStyleLink, askStyles } from "../../_components/ask-styles";
import { CommonRulesLink } from "../../_components/common-rules-link";
import book from "../../meta";
import meta from "./meta";

export function Template() {
	return (
		<div class="mx-auto max-w-5xl space-y-8 p-5">
			<ChapterHeader book={book} chapter={meta} />

			<article class="prose">
				<p class="text-fg-muted text-sm">
					いまの位置：第2部 手元で作る ／ 第4章
				</p>
				<p>
					第2章で作ったゲームは、まだAIツールの中にしかありません。
					この章では、それを<strong>自分のパソコンのファイル</strong>
					にします。
					ファイルが手元にあれば、AIツールがなくてもゲームは残り、自分の手で中身を見たり直したりできます。
				</p>
				<p>
					パソコンのファイルやフォルダの扱いに自信がない人は、先に
					<a
						href="/articles/files-and-folders"
						target="_blank"
						rel="noopener noreferrer"
					>
						ダウンロードに置きっぱなしを卒業する：ファイルとフォルダの基本
					</a>
					を読んでおいてください。
				</p>

				<h2 id="ask-how-to-choose">コードを書くための道具を選ぶ</h2>
				<p>
					ゲームの中身は、HTML・CSS・JavaScript
					という言葉で書かれた文字の集まりです。
					この文字を書いたり直したりするには、
					<strong>コードエディタ</strong>
					という道具を使います。
					パソコンに最初から入っているメモ帳などでも書けないことはありませんが、おすすめしません。
				</p>
				<p>
					コードエディタにはいくつも種類がありますが、この本では、多くの人が使っていて、困ったときに情報を見つけやすい
					<strong>Visual Studio Code</strong>
					（よく VS Code と略されます）で進めます。
				</p>
				<p>
					その前に、なぜメモ帳ではいけないのか、そして VS Code
					が自分に合った選択なのかを、AIに聞いて確かめておきましょう。
					ここで使うのが、<strong>選び方を聞く</strong>
					です。
					答えそのものではなく、選択肢と、選ぶときの基準を手に入れるための聞き方です。
				</p>
				<AskAi title="選び方を聞く">
					{`（決めたいこと）で迷っています。

- 選択肢を3つまで挙げて、それぞれの特徴を一言で説明してください
- 選ぶときに何を基準にすればいいかを教えてください
- 私の状況なら、どれをすすめるかと、その理由を教えてください
- 私の状況は（自分の前提）です`}
				</AskAi>
				<p>丸かっこの部分を埋めると、この章ではこうなります。</p>
				<AskAi title="新しい会話で送ってください">
					{`HTML・CSS・JavaScript のファイルを書くための、コードエディタ選びで迷っています。

- パソコンに最初から入っているメモ帳などを使わず、コードエディタを使ったほうがよい理由を、先に短く教えてください
- パソコンに入れて使うものの中から、Visual Studio Code を含めて選択肢を3つまで挙げて、それぞれの特徴を一言で説明してください
- 選ぶときに何を基準にすればいいかを教えてください
- 私の状況なら、どれをすすめるかと、その理由を教えてください
- 私の状況は、プログラミングの知識がまったくない初心者で、パソコンは{{os}}、無料で使えるものを探しています`}
				</AskAi>
				<p>
					AIがほかのエディタをすすめてきても、間違いではありません。
					ただ、この本の説明と、案内する記事は Visual Studio Code
					を前提にしているので、ここでは Visual Studio Code を入れてください。
				</p>
				<p>
					<strong>ダウンロードは、必ず公式サイトから</strong>
					行います。 Visual Studio Code の公式サイトは{" "}
					<code>https://code.visualstudio.com/</code> です。
					検索結果の広告などから入れると、関係のないソフトが入ることがあります。
					入れ方は、同じ会話の続きで聞いてください。
				</p>
				<AskAi title="同じ会話の続きで送ってください">
					{`Visual Studio Code を、{{os}}に入れる手順を教えてください。

- 公式サイト https://code.visualstudio.com/ から入手する前提で、手順を順番に短く教えてください
- 入れ終わったあと、どうやって起動すればいいかも教えてください`}
				</AskAi>
				<p>
					ダウンロードのページを開いたら、ブラウザのアドレス欄が{" "}
					<code>code.visualstudio.com</code> で始まっているかを見てください。
					始まっていれば、公式サイトです。
				</p>
				<p>
					入れ方や最初の設定で迷ったら、
					<a
						href="/articles/code-editor"
						target="_blank"
						rel="noopener noreferrer"
					>
						コードを書く道具をそろえる：Visual Studio Code の準備
					</a>
					を見ながら進めてください。
				</p>

				<h2>ゲームを入れるフォルダを作る</h2>
				<p>
					ドキュメント（Mac
					では「書類」と表示されます）の中に、ゲーム用のフォルダを1つ作ってください。
					名前は <code>my-game</code> とします。
				</p>
				<p>
					この本では、フォルダやファイルの名前に
					<strong>半角の英小文字・数字・ハイフンだけ</strong>
					を使います。 空白や日本語、大文字は使いません。 理由が気になったら、
					<AskStyleLink style={askStyles.onePoint} />
					で聞いてみてください。
					いまは、決まりとして守っておいてもらえれば十分です。
				</p>

				<h2>ゲームを3つのファイルに分けてもらう</h2>
				<p>
					第2章で作ったゲームは、1つのHTMLファイルに全部が入っています。
					このままでも動きますが、見た目（CSS）と動き（JavaScript）を別のファイルに分けておくと、あとで直したい場所を探しやすくなります。
				</p>
				<p>
					<strong>第2章でゲームを作った会話</strong>
					を開いて、その続きで次の文を送ってください。
				</p>
				<AskAi title="第2章でゲームを作った会話の続きで送ってください">
					{`このゲームを、自分のパソコンにファイルとして保存して動かしたいです。
次の3つのファイルに分けて、それぞれの中身を全文で出してください。

- index.html：ページの骨組み。style.css と script.js を読み込む
- style.css：見た目
- script.js：ゲームの動き

3つのファイルは同じフォルダに置き、index.html をダブルクリックして開いても動くようにしたいです。
script.js は、type="module" を付けずに読み込んでください。
ゲームの内容や見た目は、いまのまま変えないでください。`}
				</AskAi>
				<p>
					返ってきたら、エディタで <code>my-game</code>{" "}
					フォルダを開き、3つのファイルを作って、それぞれの中身を貼り付けて保存します。
					エディタでのフォルダの開き方やファイルの作り方が分からなければ、エディタの名前を添えて、
					<AskStyleLink style={askStyles.onePoint} />
					で聞いてください。
				</p>
				<p>
					ファイル名は、<code>index.html</code>・<code>style.css</code>・
					<code>script.js</code>
					と、1文字も違わないように付けてください。 ファイルの中身を貼るときは、
					<strong>一部ではなく全文</strong>
					を貼ります。
				</p>

				<h2>確かめる</h2>
				<p>
					<code>my-game</code> フォルダの <code>index.html</code>{" "}
					をダブルクリックして、ブラウザで開いてください。
					第2章と同じゲームが遊べれば成功です。
				</p>
				<p>
					もうひとつ、<strong>本当に3つのファイルで動いているか</strong>
					も確かめておきます。 エディタで <code>style.css</code>{" "}
					を開き、色を表している部分（<code>#ff6600</code> や <code>red</code>{" "}
					のように書かれているところ）を1か所だけ別の色に書き換えて保存してください。
					ブラウザを再読み込みして色が変われば、index.html が style.css
					をちゃんと読み込めています。 確かめたら、元の色に戻しておきます。
				</p>
				<p>
					script.js も確かめます。 エディタで <code>script.js</code>{" "}
					の名前を、いったん <code>script-off.js</code> に変えてください。
					ブラウザを再読み込みして、ゲームが動かなくなれば、ゲームの動きは
					script.js から読み込まれています。
					ゲームによっては、もぐらの穴やボタンなど、画面の一部が表示されなくなることもあります。
					それも、script.js が読み込まれていないしるしです。 確かめたら、名前を{" "}
					<code>script.js</code> に戻し、ゲームがまた動くことを見ておきます。
				</p>
				<p>
					名前を変えても<strong>ゲームが動いたままなら</strong>
					、動きがまだ index.html の中に残っています。
					その場合は、ゲームを作った会話の続きで「index.html の中に残っている
					JavaScript を、すべて script.js に移してください。変更後の index.html
					と script.js
					を全文で出してください」と頼み、もう一度確かめてください。
					次の第5章は、動きが script.js に分かれていることを前提に進みます。
				</p>
				<p>
					このように、
					<strong>わざと小さく変えて、変化が見えるかを確かめる</strong>
					のは、ファイルどうしがつながっているかを確かめるいちばん確実な方法です。
				</p>

				<h2>次へ進んでよい状態</h2>
				<ul>
					<li>
						ドキュメントの中の <code>my-game</code>{" "}
						フォルダに、3つのファイルがある
					</li>
					<li>
						<code>index.html</code>{" "}
						をブラウザで開くと、第2章と同じゲームが遊べる
					</li>
					<li>style.css を書き換えると、見た目が変わることを確かめた</li>
					<li>
						script.js の名前を変えると、ゲームが動かなくなることを確かめた
					</li>
				</ul>

				<Troubleshoot
					footer={<CommonRulesLink />}
					items={[
						{
							symptom:
								"index.html を開くと、ゲームではなく文字がそのまま表示される",
							action:
								"ファイル名が「index.html.txt」のようになっていないか確かめてください。拡張子の表示のしかたは、ファイルとフォルダの記事にあります。",
						},
						{
							symptom: "ゲームは表示されるが、見た目が崩れている・動かない",
							action:
								"style.css か script.js が読み込めていない可能性があります。3つのファイルが同じフォルダにあるか、ファイル名が1文字も違わないかを確かめてください。それでも直らなければ、第5章で扱うエラーの見方が役に立ちます。いったん先に進んでもかまいません。",
						},
						{
							symptom: "AIが3つのファイルの一部しか出してくれない",
							action:
								"「省略せずに、script.js の全文を出してください」のように、ファイルごとに頼み直してください。",
						},
						{
							symptom: "エディタのインストールで、見慣れない確認画面が出た",
							action:
								"画面に出ている文をそのままAIに伝えて、どれを選べばよいか聞いてください。公式サイトから入手したものなら、たいていは標準の選択のままで大丈夫です。",
						},
					]}
				/>

				<Checklist
					items={[
						"「選び方を聞く」で、コードエディタの選択肢と選び方を聞いた",
						"Visual Studio Code を公式サイトから入手して入れた",
						"my-game フォルダに、index.html・style.css・script.js を作った",
						"ブラウザでゲームが遊べることと、style.css と script.js が読み込まれていることを確かめた",
					]}
				/>

				<h2>ロードマップ用チャットに報告する</h2>
				<AskAi title="ロードマップ用チャットで送ってください">
					{`第4章を終えました。
AIツールの中で作ったゲームを、自分のパソコンの3つのファイル（HTML・CSS・JavaScript）にして、ブラウザで動かせるようになりました。`}
				</AskAi>

				<h2>次の一歩</h2>
				<p>
					ゲームが手元に来ました。
					第5章では、このゲームをわざと壊して、直します。
					壊れたときにどこを見ればいいかを、壊しても安全ないまのうちに身につけておきます。
				</p>
			</article>

			<ChapterNav book={book} chapter={meta} />
		</div>
	);
}
