import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative bg-ivory overflow-hidden" aria-label="Introduction">
      <Container className="relative py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-[0.82fr_1fr] lg:grid-cols-[0.78fr_1fr] gap-8 sm:gap-6 lg:gap-10 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-4 sm:gap-3 lg:gap-4">
            <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              {hero.eyebrow}
            </span>

            <h1 className="font-serif-display text-ink font-bold leading-[0.98] text-[2.6rem] sm:text-[2.3rem] md:text-[2.9rem] lg:text-[3.4rem] xl:text-[3.75rem]">
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

            <p className="text-[0.95rem] sm:text-[0.9rem] lg:text-base leading-snug text-ink/70 max-w-[22rem]">
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
              <Button
                href="/trailer"
                variant="secondary"
                className="pl-2.5 pr-5 py-2"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange text-cream">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                    <path d="M6 4l15 8-15 8V4z" />
                  </svg>
                </span>
                Watch the Trailer
              </Button>
            </div>
          </div>

          {/* Artwork column */}
          <div className="relative aspect-[433/500] sm:aspect-[460/500] lg:aspect-[480/500] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/backgrounds/01-hero-clean-illustrated.png"
              alt=""
              fill
              priority
              sizes="(min-width: 640px) 55vw, 100vw"
              className="object-cover object-[80%_28%]"
            />

            {/* Pooja */}
            <div className="absolute bottom-0 left-[0%] h-[92%] w-[50%] overflow-hidden">
              <Image
                src="/images/characters/pooja-transparent.png"
                alt="Pooja, a young British Indian woman in a mustard kurta, smiling"
                fill
                priority
                sizes="30vw"
                className="object-cover object-top"
              />
            </div>

            {/* Phil */}
            <div className="absolute bottom-0 right-[-4%] h-[82%] w-[46%] overflow-hidden">
              <Image
                src="/images/characters/phil-transparent.png"
                alt="Phil, a grey-haired businessman, seated in his wheelchair"
                fill
                priority
                sizes="26vw"
                className="object-cover object-top"
              />
            </div>

            {/* Book, standing in front */}
            <div className="absolute bottom-0 left-1/2 w-[38%] -translate-x-[48%] z-10">
              <Image
                src="/images/books/book-standing-with-shadow.png"
                alt="Pooja and Phil, book cover standing upright"
                width={1600}
                height={2000}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
