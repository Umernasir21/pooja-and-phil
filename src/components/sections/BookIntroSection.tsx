import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { synopsis } from "@/content/site";

export function BookIntroSection() {
  return (
    <section className="relative bg-paper" aria-label="About the book">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url(/images/backgrounds/02-book-ivory-paper.png)" }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <Image
              src="/images/books/book-standing-transparent.png"
              alt="Pooja and Phil, book cover standing upright"
              width={1600}
              height={2000}
              className="h-auto w-full max-w-[280px] drop-shadow-2xl transition-transform duration-500 hover:-translate-y-1"
            />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <SectionHeading
              eyebrow="The Book"
              title="Two lives that were never meant to meet"
            />
            <p className="text-lg leading-relaxed text-ink/75 max-w-2xl">
              {synopsis.extended[0]}
            </p>
            <p className="text-lg leading-relaxed text-ink/75 max-w-2xl">
              {synopsis.extended[2]}
            </p>
            <div className="pt-2">
              <Button href="/the-book" variant="primary">
                Read the Full Synopsis
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
