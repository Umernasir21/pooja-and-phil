import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { banners } from "@/content/site";

export function ReadingGuideTeaser() {
  const b = banners.readingGuide;

  return (
    <section className="relative overflow-hidden bg-paper" aria-label="Reading guide">
      <div className="absolute inset-0">
        <Image
          src={b.image}
          alt=""
          fill
          sizes="100vw"
          style={{ objectPosition: "80% center" }}
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col gap-4 max-w-md">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            Book Clubs
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-ink">
            {b.heading}
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Spoiler-free discussion questions for reading groups, grouped by
            theme — with a closed-by-default section for readers who&rsquo;ve
            finished the book.
          </p>
          <div className="pt-1">
            <Button href="/reading-guide" variant="secondary">
              Open the Reading Guide
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
