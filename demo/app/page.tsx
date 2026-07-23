"use client";

import { useMemo, useRef, useState } from "react";
import { createSpecStreamCompiler, type Spec } from "@json-render/core";
import { JSONUIProvider, Renderer } from "@json-render/react";
import { registry } from "@/lib/registry";
import { SAMPLE_SPEC } from "@/lib/sample-spec";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [spec, setSpec] = useState<Spec | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // 進行中のストリーミングを打ち切るためのコントローラ。
  // これがないと「サンプル表示」や再生成の直後に、古いストリームの
  // setSpec が新しい表示を上書きしてしまう。
  const abortRef = useRef<AbortController | null>(null);

  // LLM が spec に含めた state ({"$state": "/..."} バインディングの参照先) を
  // Provider の state ストアへ反映する。compiler は state を in-place で更新する
  // ことがあるため、spec が更新されるたびに新しい参照を渡して同期を確実にする。
  const initialState = useMemo(() => ({ ...(spec?.state ?? {}) }), [spec]);

  async function generate() {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    setSpec(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const reader = res.body?.getReader();
      if (!reader) throw new Error("レスポンスボディが空です");
      const decoder = new TextDecoder();
      // 最初の patch (root 設定) 適用直後は elements が存在せず
      // Renderer の spec.elements[spec.root] で落ちるため、初期値で elements を用意する
      const compiler = createSpecStreamCompiler<Spec>({ elements: {} });

      while (true) {
        const { done, value } = await reader.read();
        if (done || controller.signal.aborted) break;
        const { result } = compiler.push(decoder.decode(value, { stream: true }));
        if (result && !controller.signal.aborted) setSpec(result);
      }
      if (!controller.signal.aborted) setSpec(compiler.getResult());
    } catch (e) {
      if (!controller.signal.aborted) {
        setError(e instanceof Error ? e.message : String(e));
      }
    } finally {
      if (abortRef.current === controller) {
        setLoading(false);
      }
    }
  }

  function showSample() {
    abortRef.current?.abort();
    abortRef.current = null;
    setLoading(false);
    setError(null);
    setSpec(SAMPLE_SPEC);
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
        <button type="button" className="secondary" onClick={showSample}>
          サンプル表示
        </button>
      </form>
      {error && <p className="error">生成に失敗しました: {error}</p>}
      <section className="result">
        {spec != null && (
          <JSONUIProvider registry={registry} initialState={initialState}>
            <Renderer spec={spec} registry={registry} loading={loading} />
          </JSONUIProvider>
        )}
      </section>
    </main>
  );
}
