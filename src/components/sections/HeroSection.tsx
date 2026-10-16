import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site, synopsis } from "@/content/site";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-ivory"
      aria-label="Introduction"
    >
      <div
        className="absolute inset-0 bg-cover bg-[position:75%_center]"
        style={{ backgroundImage: "url(/images/backgrounds/01-hero-clean-illustrated.png)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent" aria-hidden="true" />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rust">
              A debut novel by {site.name}
            </span>
            <h1 className="font-serif-display text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink">
              {site.tagline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink/75">
              {synopsis.short}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/the-book" variant="primary">
                Discover the Book
              </Button>
              <Button href="/trailer" variant="secondary">
                Watch the Trailer
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto flex max-w-md items-end justify-center gap-2 sm:gap-4">
              <Image
                src="/images/characters/pooja-transparent.png"
                alt="Pooja, a young British Indian woman in a mustard kurta, smiling"
                width={1089}
                height={1444}
                priority
                className="relative z-10 h-auto w-[46%] drop-shadow-xl"
              />
              <Image
                src="/images/books/book-standing-with-shadow.png"
                alt=""
                aria-hidden="true"
                width={1600}
                height={2000}
                className="relative z-20 h-auto w-[34%] -mx-4 drop-shadow-2xl"
              />
              <Image
                src="/images/characters/phil-transparent.png"
                alt="Phil, a grey-haired businessman, seated in his wheelchair"
                width={980}
                height={1605}
                priority
                className="relative z-10 h-auto w-[40%] drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
