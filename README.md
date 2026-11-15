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

[@cloudensis/create-hono](https://github.com/cloudensis/create-hono) のテンプレートをもとにしています。

```sh
npm install
npm run dev        # 開発サーバー（Workers のランタイムで動かす）
npm test           # テスト（Vitest）
npm run lint       # Biome
npm run format     # 自動修正
npm run typecheck  # 型エラーチェック
npm run build      # cf build のあと、全ページを HTML に書き出す（SSG）
```

### ルーティング

`src/routes` 以下の `index.tsx` がルートになり、フォルダの名前がそのまま URL になります（`src/lib/router`）。

| ファイル                                  | パス                      |
| ----------------------------------------- | ------------------------- |
| `routes/index.tsx`                        | `/`                       |
| `routes/articles/<slug>/index.tsx`        | `/articles/<slug>`        |
| `routes/books/<slug>/index.tsx`           | `/books/<slug>`           |
| `routes/books/<slug>/<chapter>/index.tsx` | `/books/<slug>/<chapter>` |

- ルートファイルは `GET` などの HTTP メソッド名でハンドラーを export します。
- `ssg = true` を export したページは、`npm run build` で静的 HTML として書き出されます（`scripts/ssg.mjs`）。
- `meta.ts` の `slug` はフォルダの名前と揃えてください。
- `index.tsx` 以外のファイル（`template.tsx`、`meta.ts`、`_components/` など）はルートになりません。

ビルドとデプロイは Cloudflare CLI（[cf](https://www.npmjs.com/package/cf)）と `@cloudflare/vite-plugin` で行い、設定は `cloudflare.config.ts` にあります。書き出した HTML は静的アセットとして配信され、それ以外のリクエスト（404 など）は Worker の Hono アプリが返します。

デプロイは GitHub の Release 公開をトリガーに、GitHub Actions から Cloudflare Workers へ行われます。Preview は Actions の手動実行で、実行したブランチ名でデプロイされます。

```sh
npx cf auth login
npx cf previews deploy           # 現在のブランチ名で Preview をデプロイ
npm run build && npx cf deploy --prebuilt   # 本番にデプロイ
```
