"use client";

import { readingGuide } from "@/content/site";

export function ReadingGuideList() {
  return (
    <div className="flex flex-col gap-14 print:gap-8">
      <div className="flex justify-end print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-sm border border-ink/30 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ink/80 hover:border-orange hover:text-orange transition-colors"
        >
          Print or Save as PDF
        </button>
      </div>

      {readingGuide.map((group) => {
        const hasSpoilers = group.questions.some((q) => q.spoiler);
        return (
          <section key={group.title} className="flex flex-col gap-5">
            <div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-ink">
                {group.title}
              </h2>
              <p className="mt-2 text-ink/70 leading-relaxed max-w-2xl">
                {group.intro}
              </p>
            </div>

            {hasSpoilers ? (
              <details className="group rounded-sm border border-rust/30 bg-rust/5 p-5 print:open">
                <summary className="cursor-pointer list-none font-semibold uppercase tracking-wide text-sm text-rust flex items-center gap-2">
                  <span className="print:hidden">
                    Contains spoilers &mdash; click to reveal
                  </span>
                  <span className="hidden print:inline">Spoiler questions</span>
                </summary>
                <ol className="mt-5 flex flex-col gap-4 list-decimal pl-5 marker:text-orange">
                  {group.questions.map((q) => (
                    <li key={q.question} className="text-lg leading-relaxed text-ink/80">
                      {q.question}
                    </li>
                  ))}
                </ol>
              </details>
            ) : (
              <ol className="flex flex-col gap-4 list-decimal pl-5 marker:text-orange">
                {group.questions.map((q) => (
                  <li key={q.question} className="text-lg leading-relaxed text-ink/80">
                    {q.question}
                  </li>
                ))}
              </ol>
            )}
          </section>
        );
      })}
    </div>
  );
}
