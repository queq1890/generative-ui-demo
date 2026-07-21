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

| | 出自 | アプローチ |
|---|---|---|
| **OpenUI** | Thesys(2026/3 公開) | 独自言語 OpenUI Lang をストリーミング + パーサーで検証 |
| **A2UI** | Google 発(2025/12)、現 a2ui-project | UI カタログ + 宣言的 JSON |
| **json-render** | Vercel Labs | カタログ型を React で手軽に |
| **MCP Apps** | MCP 公式拡張(SEP-1865) | `ui://` リソースをサンドボックス iframe で描画 |

</div>

<div class="mt-4 text-sm opacity-70">
今日は OpenUI と A2UI を軸に、デモは json-render で
</div>

---
layout: default
---

# OpenUI を構成する 4 つの要素

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="comp">📚 <strong>コンポーネントライブラリ</strong>(= カタログ)<br>Zod スキーマで props を定義</div>
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

# OpenUI Lang のストリーミング

JSON ではなく、**トークン効率の良い行指向かつ位置指定の構文**(OpenUI Lang)

```coffee
root = Stack([title, tbl])
title = TextContent("Employees (Sample)", "large-heavy")
tbl = Table(cols, rows)
cols = [Col("Name", "string"), Col("Department", "string"), Col("Salary", "number")]
rows = [["Ava Patel", "Engineering", 132000], ["Marcus Lee", "Sales", 98000]]
```

<div class="mt-2 text-xs opacity-50">実際の出力例(リポジトリ benchmarks/samples より抜粋、一部省略)</div>

<div class="mt-3 text-sm opacity-70">

- 1 行 = 1 文。引数は名前なしの位置指定で、Zod スキーマのキー順に対応する
- 公式ベンチマークで JSON 比 最大 67%(7 シナリオ合計で約 52%)のトークン削減 → 速く、安い
- 行単位でパースできる → 途中まででも描画できる(ストリーミングと相性◎)

</div>

---
layout: default
---

# A2UI の仕組み

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="text-sm">

- Google が 2025/12 に発表した、エージェントが「UI を話す」ためのプロトコル(現在は a2ui-project として独立、v0.9 系)
- エージェントが **宣言的 JSON** で UI を記述し、クライアントへ送る
- クライアントは**信頼済みのコンポーネントカタログ**の範囲でだけレンダリング
- トランスポート非依存。A2A(Agent2Agent)は公式バインディングの一つで、AG-UI や WebSocket でも運べる

<div class="mt-3 opacity-70">
"safe like data, but expressive like code" (公式 README)
</div>

</div>

<div>

```json
{
  "version": "v0.9",
  "updateComponents": {
    "surfaceId": "user_profile_card",
    "components": [
      { "id": "root", "component": "Column",
        "children": ["user_name", "user_title"] },
      { "id": "user_name", "component": "Text",
        "text": "John Doe" },
      { "id": "user_title", "component": "Text",
        "text": "Software Engineer" }
    ]
  }
}
```

<div class="mt-1 text-xs opacity-50">実際のメッセージ例(v0.9 公式仕様書より)。フラットなリスト + ID 参照</div>

</div>

</div>

---
layout: default
---

# A2UI のクライアント実装

```tsx
import { MessageProcessor } from "@a2ui/web_core/v0_9";
import { A2uiSurface, basicCatalog } from "@a2ui/react/v0_9";

// エージェントからのメッセージ(createSurface / updateComponents / updateDataModel)を処理
const processor = new MessageProcessor([basicCatalog]);
processor.processMessages(agentMessages);

// エージェントが作った surface をそのまま描画
return surfaces.map((surface) => (
  <A2uiSurface key={surface.id} surface={surface} />
));
```

<div class="mt-1 text-xs opacity-50">公式 React レンダラーの Quick Start より抜粋</div>

<div class="mt-4 text-sm opacity-70">
レンダラーは差し替え可能。公式リポジトリに Lit / Angular / React / Flutter / Markdown が並び、同じ JSON を各レンダラーで描画できる
</div>

---
layout: default
---

# 比較

<div class="mt-4">

| | OpenUI | A2UI | json-render |
|---|---|---|---|
| 表現形式 | OpenUI Lang(独自言語) | JSON(4 種のメッセージ) | JSON Patch の JSONL |
| トークン効率 | ◎ JSON 比 最大 -67% | ○ | ○ |
| 安全性の担保 | パーサーが無効な部分を落とす | 信頼済みカタログに制約 | カタログ制約 + Zod 検証 |
| レンダラー | React(Vue / Svelte は初期段階) | Lit / Angular / React / Flutter | React / Vue / Svelte / RN ほか |
| 成熟度 | 言語仕様 v0.5、開発活発 | v0.9 系、早期プレビュー | v0.19 |

</div>

<div class="mt-4 text-sm opacity-70">
どれも共通するのは「カタログ + スキーマ + 検証」。json-render はこのカタログ型を最速で試せる → 次のデモで
</div>
