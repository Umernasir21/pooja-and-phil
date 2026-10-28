"use client";

import { readingGuide } from "@/content/site";
import { slugify } from "@/components/sections/ReadingGuideList";

function TocLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ol className="flex flex-col gap-2">
      {readingGuide.map((group, index) => (
        <li key={group.title}>
          <a
            href={`#${slugify(group.title)}`}
            onClick={onNavigate}
            className="flex items-baseline gap-2 py-1 text-sm text-ink/65 hover:text-orange transition-colors"
          >
            <span className="text-xs text-orange/70 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            {group.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function ReadingGuideToc() {
  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Reading guide sections"
        className="hidden lg:block sticky top-28 self-start w-56 shrink-0 print:hidden"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 mb-3">
          On this page
        </p>
        <TocLinks />
      </nav>

      {/* Mobile / tablet: expandable table of contents */}
      <details className="lg:hidden mb-10 rounded-sm border border-ink/10 bg-paper/50 print:hidden">
        <summary className="cursor-pointer list-none px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink/70 flex items-center justify-between">
          Jump to a section
          <span className="text-orange">⌄</span>
        </summary>
        <div className="px-5 pb-4">
          <TocLinks />
        </div>
      </details>
    </>
  );
}
