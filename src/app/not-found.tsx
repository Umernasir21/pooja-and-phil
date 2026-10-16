import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/backgrounds/06-closing-clean-sunset.png)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
      <Container className="relative py-24 text-center">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
            Page not found
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-cream">
            This page has wandered off the page.
          </h1>
          <p className="text-lg leading-relaxed text-cream/85">
            The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s
            get you back to the story.
          </p>
          <Button href="/" variant="ghost-cream">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
