import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { bookIntro } from "@/content/site";

export function BookIntroSection() {
  return (
    <section className="bg-ivory" aria-label="About the book">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-[0.75fr_1fr] gap-8 sm:gap-10 items-center">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/books/book-standing-transparent.png"
              alt="Pooja and Phil, book cover standing upright"
              width={1600}
              height={2000}
              className="h-auto w-full max-w-[280px] sm:max-w-none drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                {bookIntro.eyebrow}
              </span>
              <span className="h-px w-8 bg-orange/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif-display text-ink font-bold leading-[1.05] text-[2rem] sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.6rem]">
              {bookIntro.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {bookIntro.paragraphs.map((p, i) => (
              <p key={i} className="text-[0.95rem] leading-relaxed text-ink/70 max-w-xl">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
