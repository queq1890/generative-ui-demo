---
layout: default
---

# デモの構成

<div class="mt-6 grid grid-cols-3 gap-4 text-center text-sm">

<div class="box">💬 <strong>Next.js</strong><br>チャット入力 + ストリーミング受信</div>
<div class="box">🤖 <strong>Claude API</strong><br>カタログ制約付きで JSON を生成</div>
<div class="box">📦 <strong>json-render</strong><br>JSON → React コンポーネント</div>

</div>

<div class="mt-8 text-sm opacity-70">

見どころ:

1. カタログ(コンポーネント定義)がプロンプトに変換される様子
2. JSON がストリーミングされ、UI が**段階的に**組み上がる様子
3. カタログ外のコンポーネントを頼んでも**壊れない**こと

</div>

<style>
.box { background: #282a36; border: 1px solid #44475a; border-radius: 0.5rem; padding: 1rem; }
</style>

---
layout: center
class: text-center
---

# 🎬 Live Demo

<div class="mt-4 opacity-70">
pnpm --filter demo dev
</div>

---
layout: default
---

# デモで見せたポイント

<div class="mt-6">

- ✅ カタログ定義(Zod)が**そのままプロンプトと型安全性の源**になる
- ✅ ストリーミング中も**常に valid な UI** が表示される
- ✅ LLM が「知らないコンポーネント」を出そうとしても、カタログ外は描画されない

</div>

<!-- TODO: デモのスクリーンショットを 1 枚貼る(ライブが事故ったときの保険) -->
