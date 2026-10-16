import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { closingBand } from "@/content/site";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Begin reading">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center]"
        style={{ backgroundImage: "url(/images/backgrounds/06-closing-clean-sunset.png)" }}
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col items-start gap-5 max-w-md">
          <h2 className="font-serif-display text-cream font-bold leading-[1.08] text-[1.9rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem]">
            {closingBand.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <Button href="/the-book" variant="cream-pill">
            Discover the Book →
          </Button>
        </div>
      </Container>
    </section>
  );
}
