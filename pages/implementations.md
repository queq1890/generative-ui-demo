---
layout: center
class: text-center
---

# 📊 クイズ

<SlidoEmbed poll-id="POLL_QUIZ_PLACEHOLDER" />

<!--
Slido クイズ: 「LLM に UI を生成させるとき、一番の課題は?」
- 出力が壊れる(不正な JSON / HTML)
- トークンコストと速度
- デザインの一貫性
- セキュリティ
→ 全部正解。次の実装がこれらをどう解くかを見る
-->

---
layout: default
---

# 実装の全体地図

<div class="mt-6">

| | 開発元 | アプローチ |
|---|---|---|
| **OpenUI** | Thesys | 独自のストリーミング言語 + パーサー |
| **A2UI** | Google | UI カタログ + 宣言的 JSON |
| **json-render** | Vercel Labs | カタログ型を React で手軽に |
| MCP Apps | MCP コミュニティ | iframe サンドボックスで UI 配信 |

</div>

<div class="mt-4 text-sm opacity-70">
今日は OpenUI と A2UI を軸に、デモは json-render で
</div>

---
layout: default
---

# OpenUI ① — 4 つの構成要素

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="comp">📚 <strong>コンポーネントライブラリ</strong><br>Zod スキーマで props を定義</div>
<div class="comp">📝 <strong>プロンプトジェネレーター</strong><br>ライブラリからシステムプロンプトを自動生成</div>
<div class="comp">🛡️ <strong>パーサー</strong><br>出力を検証。無効な部分は削除し有効な部分のみ表示</div>
<div class="comp">🖼️ <strong>レンダラー</strong><br>ストリーミングで段階的にレンダリング</div>

</div>

<style>
.comp { background: #282a36; border: 1px solid #44475a; border-radius: 0.5rem; padding: 0.9rem 1.1rem; }
</style>

---
layout: default
---

# OpenUI ② — 独自言語をストリーミング

JSON ではなく、**トークン効率の良い行指向・位置指定の構文**

```
# TODO: OpenUI 言語の実際の出力例を貼る
```

<div class="mt-4 text-sm opacity-70">

- JSON より少ないトークンで同じ UI を表現 → 速い・安い
- 行単位でパースできる → 途中まででも描画できる(ストリーミングと相性◎)

</div>

---
layout: default
---

# A2UI ① — Google の agent→UI プロトコル

<div class="mt-6">

- エージェントが **宣言的 JSON** で UI を記述し、クライアントへ送る
- クライアントは**事前定義された UI カタログ**の範囲でレンダリング
- A2A(Agent2Agent)エコシステムの一部。エージェント間通信の先に「人間に見せる UI」を置く

</div>

<div class="mt-6 text-sm opacity-70">
制約を設けることで、安全性とブランド一貫性を確保するカタログ型の代表
</div>

---
layout: default
---

# A2UI ② — クライアント実装

```tsx
// TODO: A2UI の React クライアントのコード例を貼る
```

<div class="mt-4 text-sm opacity-70">
Web / Flutter などレンダラーはプラットフォームごとに差し替え可能
</div>

---
layout: default
---

# 比較

<div class="mt-4">

| | OpenUI | A2UI | json-render |
|---|---|---|---|
| 表現形式 | 独自言語 | JSON | JSON |
| トークン効率 | ◎ | ○ | ○ |
| 安全性の担保 | パーサーで検証 | カタログ制約 | カタログ + Zod |
| エコシステム | Thesys / React | Google / A2A、マルチプラットフォーム | Vercel / React |
| 試しやすさ | ○ | △ | ◎ |

</div>

<div class="mt-4 text-sm opacity-70">
json-render は「A2UI と同系のカタログ型」を最速で試せる選択肢 → 次のデモで
</div>
