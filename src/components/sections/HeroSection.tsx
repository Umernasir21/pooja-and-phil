import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

function HeroArtwork({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Image
        src="/images/backgrounds/01-hero-clean-illustrated.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Pooja */}
      <div className="absolute bottom-0 left-[40%] h-[96%] w-[28%] overflow-hidden">
        <Image
          src="/images/characters/pooja-transparent.png"
          alt=""
          fill
          priority
          sizes="28vw"
          className="object-cover object-top"
        />
      </div>

      {/* Phil */}
      <div className="absolute bottom-0 left-[64%] h-[93%] w-[31%] overflow-hidden">
        <Image
          src="/images/characters/phil-transparent.png"
          alt=""
          fill
          priority
          sizes="28vw"
          className="object-cover object-top"
        />
      </div>

      {/* Book, standing in front, overlapping both figures' lower bodies */}
      <div className="absolute bottom-0 left-[50%] w-[22%] z-10">
        <Image
          src="/images/books/book-standing-with-shadow.png"
          alt=""
          width={1600}
          height={2000}
          className="h-auto w-full drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory" aria-label="Introduction">
      {/* Desktop / tablet: one continuous full-bleed composition behind the text */}
      <HeroArtwork className="hidden sm:block" />
      <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--color-ivory) 0%, var(--color-ivory) 24%, rgba(250,241,226,0.55) 34%, rgba(250,241,226,0) 46%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-20 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col gap-4 sm:gap-3 lg:gap-4 max-w-[19rem] sm:max-w-[21rem] lg:max-w-sm">
          <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            {hero.eyebrow}
          </span>

          <h1 className="font-serif-display text-ink font-bold leading-[0.96] text-[2.75rem] sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.6rem] xl:text-[4rem]">
            {hero.headline.map((line) => (
              <span
                key={line.text}
                className={`block ${line.italic ? "italic font-semibold" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <div className="h-[3px] w-12 bg-orange" aria-hidden="true" />

          <p className="text-[0.95rem] sm:text-[0.9rem] lg:text-base leading-snug text-ink/70 font-serif-display">
            {hero.support.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-2.5 lg:gap-3 pt-2">
            <Button href="/the-book" variant="primary" className="px-6 py-3">
              Discover the Book →
            </Button>
            <Button href="/trailer" variant="secondary" className="pl-2.5 pr-5 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-cream">
                <svg viewBox="0 0 24 24" className="h-3 w-3 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                  <path d="M6 4l15 8-15 8V4z" />
                </svg>
              </span>
              Watch the Trailer
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile: artwork in normal flow below the text — text always comes first */}
      <div className="sm:hidden relative h-[420px] mt-2">
        <HeroArtwork />
      </div>
    </section>
  );
}
