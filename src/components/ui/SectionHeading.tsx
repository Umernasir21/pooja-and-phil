type Tone = "ink" | "cream";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: Tone;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const toneTitle = tone === "cream" ? "text-cream" : "text-ink";
  const toneBody = tone === "cream" ? "text-cream/80" : "text-ink/70";
  const toneEyebrow = tone === "cream" ? "text-saffron" : "text-rust";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${toneEyebrow}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-serif-display text-balance text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${toneTitle}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base sm:text-lg leading-relaxed ${toneBody}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
