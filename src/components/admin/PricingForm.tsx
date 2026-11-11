"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { PriceEntry } from "@/lib/settings";

export function PricingForm({ initialPrices }: { initialPrices: PriceEntry[] }) {
  const router = useRouter();
  const [prices, setPrices] = useState<PriceEntry[]>(
    initialPrices.length ? initialPrices : [{ format: "Paperback", price: "" }],
  );
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function updateRow(index: number, field: keyof PriceEntry, value: string) {
    setPrices((rows) => rows.map((row, i) => (i === index ? { ...row, [field]: value } : row)));
  }

  function addRow() {
    setPrices((rows) => [...rows, { format: "", price: "" }]);
  }

  function removeRow(index: number) {
    setPrices((rows) => rows.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices: prices.filter((p) => p.format.trim() && p.price.trim()) }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not save pricing.");
        setStatus("error");
        return;
      }
      setStatus("success");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {prices.map((row, i) => (
          <div key={i} className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Format (e.g. Paperback)"
              value={row.format}
              onChange={(e) => updateRow(i, "format", e.target.value)}
              className="flex-1 min-w-[140px] rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-orange"
            />
            <input
              type="text"
              placeholder="Price (e.g. £9.99)"
              value={row.price}
              onChange={(e) => updateRow(i, "price", e.target.value)}
              className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-orange"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              className="text-xs font-semibold text-slate-400 hover:text-rust"
              aria-label={`Remove ${row.format || "row"}`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={addRow}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-orange hover:text-orange transition-colors"
        >
          + Add format
        </button>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rust transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Saving…" : "Save Pricing"}
        </button>
        {status === "success" ? <span className="text-sm text-slate-500">Saved.</span> : null}
        {error ? (
          <span role="alert" className="text-sm text-rust">
            {error}
          </span>
        ) : null}
      </div>
      <p className="text-xs text-slate-400">
        Shown on /the-book next to the purchase button. This is a display price only — it
        does not change what Amazon (or any retailer) actually charges.
      </p>
    </form>
  );
}
