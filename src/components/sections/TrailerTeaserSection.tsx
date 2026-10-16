import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { trailerBand } from "@/content/site";

export function TrailerTeaserSection() {
  return (
    <section className="relative bg-rust overflow-hidden" aria-label="Trailer">
      <div
        className="absolute inset-0 bg-cover bg-[position:60%_center]"
        style={{ backgroundImage: "url(/images/backgrounds/04-trailer-clean-sunset.png)" }}
        aria-hidden="true"
      />

      <Container className="relative py-10 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-[0.55fr_1fr] gap-6 sm:gap-8 items-center">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/books/book-standing-with-shadow.png"
              alt="Pooja and Phil, book cover standing upright"
              width={1600}
              height={2000}
              className="h-auto w-full max-w-[180px] sm:max-w-none drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/90">
                {trailerBand.eyebrow}
              </span>
              <span className="h-px w-8 bg-cream/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif-display text-ink font-bold leading-[1.05] text-[1.9rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.4rem]">
              {trailerBand.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <Link
              href="/trailer"
              className="group inline-flex items-center gap-3 w-fit"
              aria-label="Watch the trailer for Pooja and Phil"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso text-cream shadow-md transition-transform duration-200 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                  <path d="M6 4l15 8-15 8V4z" />
                </svg>
              </span>
              <span className="text-cream font-semibold">Watch the Trailer</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
