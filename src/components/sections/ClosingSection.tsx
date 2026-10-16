import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ClosingSection() {
  return (
    <section
      className="relative bg-orange text-cream"
      aria-label="Begin reading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url(/images/backgrounds/06-closing-clean-sunset.png)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-rust/30" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-serif-display text-balance text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-cream max-w-3xl">
            Every friendship begins somewhere.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-cream/90">
            Step into the story of Pooja and Phil — two different worlds, one
            unexpected friendship.
          </p>
          <Button href="/the-book" variant="ghost-cream">
            Discover the Book
          </Button>
        </div>
      </Container>
    </section>
  );
}
