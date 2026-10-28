"use client";

import { useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2000);
  }

  const label = status === "copied" ? "Copied" : status === "failed" ? "Couldn't copy" : "Copy";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
        status === "failed"
          ? "border-rust/40 text-rust"
          : "border-ink/20 text-ink/70 hover:border-orange hover:text-orange"
      }`}
    >
      {label}
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Copied to clipboard" : status === "failed" ? "Copy failed" : ""}
      </span>
    </button>
  );
}
