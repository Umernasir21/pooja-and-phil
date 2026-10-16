import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  background,
  tone = "ink",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  background: string;
  tone?: "ink" | "cream";
}) {
  const toneTitle = tone === "cream" ? "text-cream" : "text-ink";
  const toneBody = tone === "cream" ? "text-cream/85" : "text-ink/70";
  const toneEyebrow = tone === "cream" ? "text-saffron" : "text-rust";

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />
      <div className={`absolute inset-0 ${tone === "cream" ? "bg-espresso/55" : "bg-ivory/60"}`} aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${toneEyebrow}`}>
            {eyebrow}
          </span>
          <h1 className={`mt-4 font-serif-display text-balance text-4xl sm:text-5xl font-semibold leading-[1.1] ${toneTitle}`}>
            {title}
          </h1>
          {description ? (
            <p className={`mt-6 text-lg leading-relaxed ${toneBody}`}>{description}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
