# CONTEXT

このリポジトリは、社内 FE チーム向け LT「Generative UI」の発表スライドとライブデモを格納する。

## 発表の前提(確定事項)

| 項目 | 決定 |
|---|---|
| 持ち時間 | 15〜20 分 |
| ボリューム | 25 枚前後(参考元 [sun-choma/febi-view-transition-api-26.07.08](https://github.com/sun-choma/febi-view-transition-api-26.07.08) と同等) |
| スライドフレームワーク | Slidev(参考元と同じ。pnpm + GitHub Actions で GitHub Pages にデプロイ) |
| インタラクション | Slido を iframe でスライドに埋め込み(アイスブレイク投票とクイズの 2 箇所)。Q&A は Slido ではなく Google Meet のコメントで行う |
| デモ | ライブのみ(ローカル実行)。GitHub Pages は静的ホスティングのため LLM API キーを伴うデモは公開しない |
| 聴衆のスタック | React / Next.js |

## 用語集

### Generative UI
LLM がチャット応答としてテキストではなく **UI そのものを生成・返却**する仕組み。v0 のような「開発時のコード生成」とは区別する(こちらはランタイム生成)。

### OpenUI
**Thesys 社の [thesysdev/openui](https://github.com/thesysdev/openui)** を指す。Generative UI のオープン標準。
- W3C Open UI(HTML 標準仕様策定)、wandb/openui(プロトタイピングツール)とは**別物**。混同注意。
- 構成: コンポーネントライブラリ(Zod スキーマ)/ プロンプトジェネレーター / パーサー / レンダラー
- JSON より トークン効率の良い独自の行指向・位置指定構文をストリーミングする
- 参考記事: https://azukiazusa.dev/blog/openui-framework-for-generative-ui/

### A2UI
Google の agent→UI プロトコル。事前定義した **UI カタログ**を元に LLM に宣言的 JSON を生成させる。制約により安全性を確保しつつ柔軟な UI を実現。

### json-render
Vercel Labs のライブラリ。A2UI と同じ「JSON カタログ型」アプローチを React で手軽に実装できる。**ライブデモはこれを採用**(Next.js + json-render)。

### Server Driven UI (SDUI)
サーバーが JSON スキーマで UI を記述し、クライアントがコンポーネントカタログからレンダリングする従来手法(Airbnb Ghost Platform 等)。本 LT では「JSON を書く主体がサーバーから LLM に変わった」という Generative UI の系譜上の先祖として位置づける。
