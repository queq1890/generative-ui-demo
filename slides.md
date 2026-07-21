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

1. Generative UI とは：応答がテキストから UI になる
2. Server Driven UI という系譜：「スキーマで UI を配る」は昔からあった
3. OpenUI と A2UI：Generative UI の 2 つの実装
4. Demo：Next.js + json-render でカタログ型を体感する

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

<div class="section-sub">「スキーマで UI を配る」は、実は昔からある</div>

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
- SDUI の知見は引き継がれる。UI の宣言(JSON や OpenUI Lang)を書く主体がサーバーから LLM に変わっただけ
- **コンポーネントカタログの設計力が、そのまま Generative UI の品質になる**

</div>

<div class="mt-8 text-sm opacity-70">
FE エンジニアの仕事は減らない。カタログとスキーマを設計する人が必要になる。
</div>

---
layout: center
class: text-center
---

# リンク集

<div class="mt-2 text-sm opacity-70">
質問は Google Meet のコメントにどうぞ
</div>

<div class="links">
  <a class="link-card" href="https://github.com/thesysdev/openui" target="_blank">
    <div>
      <div class="link-name">OpenUI (Thesys)</div>
      <div class="link-desc">Generative UI のオープン標準</div>
    </div>
  </a>
  <a class="link-card" href="https://github.com/a2ui-project/a2ui" target="_blank">
    <div>
      <div class="link-name">A2UI (Google 発)</div>
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

---
layout: default
---

# References

<div class="refs grid grid-cols-2 gap-x-8 mt-4">

<div>

**Generative UI の実例**

- [Introducing apps in ChatGPT and the new Apps SDK](https://openai.com/index/introducing-apps-in-chatgpt/) (OpenAI, 2025)
- [Claude builds interactive visuals right in your conversation](https://claude.com/blog/claude-builds-visuals) (Anthropic, 2026)
- [Gemini 3 brings upgraded smarts and new capabilities to the Gemini app](https://blog.google/products-and-platforms/products/gemini/gemini-3-gemini-app/) (Google, 2025)
- [Generative UI: A rich, custom, visual interactive user experience for any prompt](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/) (Google Research, 2025)

**Server Driven UI**

- [A Deep Dive into Airbnb's Server-Driven UI System](https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5) (Airbnb, 2021)
- [The Journey to Server Driven UI At Lyft Bikes and Scooters](https://eng.lyft.com/the-journey-to-server-driven-ui-at-lyft-bikes-and-scooters-c19264a0378e) (Lyft, 2023)
- [Remote Rendering: Shopify's Take on Extensible UI](https://shopify.engineering/remote-rendering-ui-extensibility) (Shopify, 2021)
- [Improving Development Velocity with Generic, Server-Driven UI Components](https://careersatdoordash.com/blog/improving-development-velocity-with-generic-server-driven-ui-components/) (DoorDash, 2021)

</div>

<div>

**OpenUI**

- [thesysdev/openui](https://github.com/thesysdev/openui) / [公式ドキュメント](https://www.openui.com)
- [OpenUI Lang Specification v0.5](https://www.openui.com/docs/openui-lang/specification-v05)
- [Token Efficiency Benchmarks](https://github.com/thesysdev/openui/tree/main/benchmarks)
- [Why We're Open Sourcing OpenUI](https://www.thesys.dev/blogs/openui) (Thesys, 2026)

**A2UI**

- [a2ui-project/a2ui](https://github.com/a2ui-project/a2ui) / [a2ui.org](https://a2ui.org/)
- [Introducing A2UI: An open project for agent-driven interfaces](https://developers.googleblog.com/en/introducing-a2ui-an-open-project-for-agent-driven-interfaces/) (Google, 2025)
- [A2UI Protocol v0.9.1 Specification](https://github.com/a2ui-project/a2ui/blob/main/specification/v0_9_1/docs/a2ui_protocol.md)

**json-render / MCP Apps ほか**

- [vercel-labs/json-render](https://github.com/vercel-labs/json-render) / [json-render.dev](https://json-render.dev)
- [SEP-1865: MCP Apps](https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx) (MCP, 2026)
- [OpenUI の解説記事](https://azukiazusa.dev/blog/openui-framework-for-generative-ui/) / [A2UI の解説記事](https://azukiazusa.dev/blog/a2ui-protocol/) (azukiazusa.dev)

</div>

</div>

<style>
.refs { font-size: 0.62rem; line-height: 1.5; }
.refs strong { color: #bd93f9; font-size: 0.7rem; }
.refs ul { margin: 0.2rem 0 0.8rem 0; }
.refs li { margin: 0.1rem 0; }
.refs a { color: #8be9fd; text-decoration: none; }
</style>
