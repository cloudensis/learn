# cloudensis learn

ソフトウェア開発者のための無料の学習教材です。

## 対象

ゼロから学びはじめる人から、現役のソフトウェア開発者までを想定する。
各article,book毎に詳細な対象を設定する。

## 目的

この教材を離れたあとも、AIを学習パートナーとしてソフトウェア開発を独学で進められる状態になること。

## 目標

1. 次に何を学ぶかを、自分で決められる
2. 分からないことをAIに聞き、返ってきた答えの正しさを自分で確かめられる
3. 詰まったときに、原因の場所を切り分けてAIに相談できる

## 設計

- 知識ではなく、学び方を身につける教材にする。
- AIを使う前提で設計する。
- 読むより、手を動かす。

## 編集方針

コンテンツを書くときの決まりごと。

1. 知識はAIに質問してもらうようにし、プロンプトと質問のTipsを提供する。

2. AIに頼って知識が付かない状態を避ける。成果物はAIに解説させるステップを入れる。

3. 本文は敬体で書き、専門用語には初出時に必ず一言添える。

## コンテンツの種類

|      | article            | book                                            |
| ---- | ------------------ | ----------------------------------------------- |
| 形式 | 単発の記事         | 章立て。順に進む                                |
| URL  | `/articles/<slug>` | `/books/<slug>`、章は `/books/<slug>/<chapter>` |

book は対象読者とゴールを1冊ごとに定める。冒頭で対象を明示し、その読者に必要な深さで書く。
各 book の設計は、その book のフォルダの README（例：`src/routes/books/first-steps/README.md`）に書く。

## 開発

| コマンド            | 内容                                  |
| ------------------- | ------------------------------------- |
| `npm run dev`       | 開発サーバー（Workers のランタイム）  |
| `npm run build`     | ビルドと SSG（`.cloudflare/output/`） |
| `npm test`          | テスト（Vitest）                      |
| `npm run lint`      | lint（Biome）                         |
| `npm run format`    | 整形                                  |
| `npm run typecheck` | 型チェック                            |

構成は [create-hono](https://github.com/cloudensis/create-hono) のテンプレートに合わせています。ビルドは Cloudflare CLI（[cf](https://www.npmjs.com/package/cf)）と `@cloudflare/vite-plugin` で行い、設定は `cloudflare.config.ts` にあります。

### ディレクトリ

| パス               | 内容                                 |
| ------------------ | ------------------------------------ |
| `src/index.tsx`    | Hono のアプリ                        |
| `src/renderer.tsx` | HTML の共通レイアウトとメタタグ      |
| `src/style.css`    | Tailwind と design-system の読み込み |
| `src/routes/`      | ルート（ファイルベースルーティング） |
| `src/components/`  | ページ共通のコンポーネント           |
| `src/lib/`         | 型・定数・ルーター                   |
| `src/scripts/`     | ブラウザで動くスクリプト             |

### ルーティング

`src/routes` 以下の `index.ts` / `index.tsx` がルートになり、フォルダ名がそのまま URL になります。`index` 以外のファイル（`meta.ts`、`template.tsx`、`_components/` など）はルートになりません。

| ファイル                                                     | パス                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| `routes/index.tsx`                                           | `/`                                          |
| `routes/articles/code-editor/index.tsx`                      | `/articles/code-editor`                      |
| `routes/books/first-steps/01-how-to-use-this-book/index.tsx` | `/books/first-steps/01-how-to-use-this-book` |

HTTP メソッド名（`GET` など）でハンドラーを export し、`ssg = true` を export したルートは `npm run build` で静的 HTML に書き出されます（`scripts/ssg.mjs`）。`meta.ts` の `slug` はフォルダ名と同じにしてください。

```tsx
import type { Handler } from "hono";

export const ssg = true;

export const GET: Handler = (c) =>
	c.render(<Template />, { title: "タイトル", description: "説明" });
```

## デプロイ

GitHub の Release 公開をトリガーに、GitHub Actions から Cloudflare Workers へデプロイします。SSG したページは Static Assets から配信し、それ以外（404 など）は Worker が返します。Preview は Actions の手動実行で、実行したブランチ名でデプロイされます。

```sh
npx cf auth login
npm run build && npx cf deploy --prebuilt   # 本番にデプロイ
CLOUDFLARE_PREVIEW_BUILD=true npm run build && npx cf previews deploy --prebuilt   # Preview
```
