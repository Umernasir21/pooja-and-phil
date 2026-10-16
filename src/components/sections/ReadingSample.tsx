"use client";

import { useState } from "react";
import { readingSample } from "@/content/site";

const SIZES = ["text-base", "text-lg", "text-xl"] as const;
const SIZE_LABELS = ["Small", "Medium", "Large"] as const;

export function ReadingSample() {
  const [sizeIndex, setSizeIndex] = useState(1);

  return (
    <div className="rounded-sm border border-ink/10 bg-ivory shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 px-6 py-4 sm:px-8">
        <h3 className="font-serif-display text-xl font-medium text-ink">
          {readingSample.heading}
        </h3>
        <div
          role="group"
          aria-label="Text size"
          className="flex items-center gap-1 rounded-sm border border-ink/15 p-1"
        >
          {SIZE_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setSizeIndex(i)}
              aria-pressed={sizeIndex === i}
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-sm transition-colors ${
                sizeIndex === i
                  ? "bg-orange text-cream"
                  : "text-ink/60 hover:text-orange"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className={`flex flex-col gap-5 px-6 py-8 sm:px-8 font-serif-display ${SIZES[sizeIndex]} leading-relaxed text-ink/85`}>
        {readingSample.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="pt-2 text-sm font-sans uppercase tracking-wide text-ink/40">
          End of sample &mdash; from Chapter One of Pooja and Phil
        </p>
      </div>
    </div>
  );
}
