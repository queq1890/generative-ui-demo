"use client";

import { useState } from "react";
import { createSpecStreamCompiler } from "@json-render/core";
import { Renderer } from "@json-render/react";
import { registry } from "@/lib/registry";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [spec, setSpec] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    setSpec(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      const compiler = createSpecStreamCompiler();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const { result } = compiler.push(decoder.decode(value, { stream: true }));
        if (result) setSpec(result);
      }
      setSpec(compiler.getResult());
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Generative UI Demo</h1>
      <p>カタログ(Card / Stat / Table / Button)の範囲で UI が生成されます。</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generate();
        }}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="例: 今月のチームの KPI ダッシュボードを作って"
        />
        <button type="submit" disabled={loading}>
          {loading ? "生成中…" : "生成"}
        </button>
      </form>
      <section className="result">
        {spec != null && <Renderer spec={spec as never} registry={registry} />}
      </section>
    </main>
  );
}
