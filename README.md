# Generative UI — LT スライド & デモ

社内 FE チーム向け LT「Generative UI」のスライド(Slidev)とライブデモ(Next.js + json-render)。

## スライド

```bash
pnpm install
pnpm dev        # ローカルでスライドを表示
pnpm build      # GitHub Pages 用にビルド(--base /generative-ui-demo/)
```

`main` に push すると GitHub Actions が GitHub Pages にデプロイする。

### インタラクション

投票・クイズ・Q&A はすべて Google Meet のコメントで受ける(スライド側の準備は不要)。

## デモ

```bash
cp demo/.env.example demo/.env.local   # ANTHROPIC_API_KEY を設定
pnpm --filter demo dev
```

デモは LLM の API キーを使うためローカル実行のみ。GitHub Pages には含まれない。

## ドキュメント

発表の確定事項・用語集は [CONTEXT.md](./CONTEXT.md) を参照。
