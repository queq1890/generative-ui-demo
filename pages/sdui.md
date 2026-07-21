---
layout: default
---

# Server Driven UI とは

<div class="mt-6 text-center">

サーバーが **JSON で UI を記述** → クライアントは **コンポーネントカタログ** からレンダリング

</div>

```json
{
  "type": "section",
  "children": [
    { "type": "image", "props": { "src": "..." } },
    { "type": "title", "props": { "text": "Cozy room in Shibuya" } },
    { "type": "price", "props": { "amount": 8500, "unit": "night" } }
  ]
}
```

<div class="mt-4 text-sm opacity-70">
アプリを再リリースせずに画面を変えられる。ネイティブアプリの世界で発展した手法
</div>

---
layout: default
---

# 各社の事例

- **Airbnb** — Ghost Platform。検索結果や予約フローを SDUI 化
- **Lyft** — ドライバーアプリの画面を JSON で配信
- **Shopify** — チェックアウト拡張を schema ベースで構築

<div class="mt-6 text-sm opacity-70">
共通点: <strong>クライアントに「カタログ」、サーバーに「組み立て」</strong>の責務分割
</div>

<!-- TODO: Ghost Platform の図を引用(出典明記) -->

---
layout: default
---

# SDUI が教えてくれた難しさ

<div class="mt-6">

- 📚 **カタログ設計** — 粒度をどう切るか(原子的すぎると表現力がなく、大きすぎると柔軟性がない)
- 🔄 **スキーマ進化** — 古いクライアントに新しい JSON が届く問題
- ✅ **バリデーション** — 不正な JSON をどう防ぐ・どう落とすか

</div>

<div class="mt-8 text-center opacity-80">
この難しさと解法の蓄積が、そのまま Generative UI に引き継がれる
</div>

---
layout: center
class: text-center
---

# JSON を書く主体が、<br>サーバーから **LLM** に変わった

<div class="mt-8 text-lg opacity-80">

SDUI: サーバーのロジックが JSON を組み立てる<br>
Generative UI: **LLM が文脈に応じて JSON を組み立てる**

</div>

<div class="mt-8 text-sm opacity-60">
カタログ・スキーマ・バリデーション — 道具立ては同じ。だから FE の知見が活きる
</div>
