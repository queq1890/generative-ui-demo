---
theme: dracula
title: Generative UI
transition: slide-left
---

# ✨ Generative UI

AI が「応答として UI」を返す時代

---
layout: center
class: text-center
---

# 📊 まずはみなさんに質問

<SlidoEmbed poll-id="POLL_1_PLACEHOLDER" />

<!--
Slido 投票: 「AI に UI を作らせたことある?」
- v0 / Lovable などで作ったことがある
- チャットのテキスト応答で十分
- 何それ?
-->

---
layout: default
---

# 今日話すこと

<div class="mt-8 text-lg">

1. **Generative UI とは**：応答がテキストから UI になる
2. **Server Driven UI という系譜**：「schema で UI を配る」は昔からあった
3. **OpenUI と A2UI**：Generative UI の 2 つの実装
4. **Demo**：Next.js + json-render でカタログ型を体感する

</div>

---
layout: section
---

<div class="section-num">01</div>

# Generative UI とは

<div class="section-sub">応答がテキストではなく、UI そのものになる</div>

<style>
.section-num { font-size: 1rem; font-weight: 700; color: #bd93f9; letter-spacing: 0.2em; opacity: 0.8; }
.section-sub { font-size: 1rem; color: #6272a4; margin-top: 0.5rem; }
</style>

---
src: ./pages/what-is-genui.md
---

---
layout: section
---

<div class="section-num">02</div>

# Server Driven UI という系譜

<div class="section-sub">「schema で UI を配る」は、実は昔からある</div>

<style>
.section-num { font-size: 1rem; font-weight: 700; color: #ffb86c; letter-spacing: 0.2em; opacity: 0.8; }
.section-sub { font-size: 1rem; color: #6272a4; margin-top: 0.5rem; }
</style>

---
src: ./pages/sdui.md
---

---
layout: section
---

<div class="section-num">03</div>

# OpenUI と A2UI

<div class="section-sub">Generative UI をプロダクションに載せるための 2 つの実装</div>

<style>
.section-num { font-size: 1rem; font-weight: 700; color: #50fa7b; letter-spacing: 0.2em; opacity: 0.8; }
.section-sub { font-size: 1rem; color: #6272a4; margin-top: 0.5rem; }
</style>

---
src: ./pages/implementations.md
---

---
layout: section
---

<div class="section-num">04</div>

# Demo

<div class="section-sub">Next.js + json-render + Claude API</div>

<style>
.section-num { font-size: 1rem; font-weight: 700; color: #ff79c6; letter-spacing: 0.2em; opacity: 0.8; }
.section-sub { font-size: 1rem; color: #6272a4; margin-top: 0.5rem; }
</style>

---
src: ./pages/demo.md
---

---
layout: default
---

# まとめ

<div class="mt-6 text-lg">

- Generative UI は、実行時に生成される「応答としての UI」
- 本命は自由生成ではなくカタログ型(スキーマ制約)。壊れた出力を画面に出さないため
- SDUI の知見はそのまま活きる。JSON を書く主体がサーバーから LLM に変わっただけ
- **コンポーネントカタログの設計力が、そのまま Generative UI の品質になる**

</div>

<div class="mt-8 text-sm opacity-70">
FE エンジニアの仕事は減らない。カタログとスキーマを設計する人が必要になる。
</div>

---
layout: center
class: text-center
---

# 📊 Q&A / 感想

<SlidoEmbed poll-id="POLL_2_PLACEHOLDER" />

<!--
Slido Q&A: 質問受付 + 「明日から試したくなった度」投票
-->

---
layout: center
class: text-center
---

# リンク集

<div class="links">
  <a class="link-card" href="https://github.com/thesysdev/openui" target="_blank">
    <div>
      <div class="link-name">OpenUI (Thesys)</div>
      <div class="link-desc">Generative UI のオープン標準</div>
    </div>
  </a>
  <a class="link-card" href="https://github.com/google/A2UI" target="_blank">
    <div>
      <div class="link-name">A2UI (Google)</div>
      <div class="link-desc">agent→UI プロトコル</div>
    </div>
  </a>
  <a class="link-card" href="https://github.com/vercel-labs/json-render" target="_blank">
    <div>
      <div class="link-name">json-render (Vercel Labs)</div>
      <div class="link-desc">カタログ型を最速で試す</div>
    </div>
  </a>
  <a class="link-card" href="https://azukiazusa.dev/blog/openui-framework-for-generative-ui/" target="_blank">
    <div>
      <div class="link-name">azukiazusa.dev</div>
      <div class="link-desc">OpenUI 解説記事(日本語)</div>
    </div>
  </a>
</div>

<style>
.links {
  display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
  margin-top: 2.5rem;
}
.link-card {
  display: flex; align-items: center; gap: 0.7rem; text-align: left;
  padding: 0.7rem 1rem; border-radius: 0.5rem;
  background: #282a36; border: 1px solid #44475a; text-decoration: none;
  transition: border-color .15s, transform .15s;
}
.link-card:hover { border-color: #bd93f9; transform: translateY(-2px); }
.link-name { color: #bd93f9; font-weight: 700; font-size: 0.9rem; }
.link-desc { color: #6272a4; font-size: 0.72rem; margin-top: 0.1rem; }
</style>
