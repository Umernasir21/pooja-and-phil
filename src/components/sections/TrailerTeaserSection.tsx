import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrailerTeaserSection() {
  return (
    <section className="relative bg-rust text-cream" aria-label="Trailer">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url(/images/backgrounds/04-trailer-clean-sunset.png)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-espresso/30" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <div className="flex flex-col items-center gap-10 text-center">
          <SectionHeading
            eyebrow="Watch"
            title="See the world of Pooja and Phil"
            description="A first look at the story — two different worlds, and the friendship neither of them saw coming."
            align="center"
            tone="cream"
          />

          <Link
            href="/trailer"
            className="group relative block w-full max-w-2xl overflow-hidden rounded-sm shadow-2xl focus-visible:outline-3 focus-visible:outline-saffron"
            aria-label="Watch the trailer for Pooja and Phil"
          >
            <Image
              src="/images/trailer/trailer-poster-opening.png"
              alt="Trailer poster for Pooja and Phil"
              width={1280}
              height={720}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/35">
              <Image
                src="/images/elements/play-ivory.png"
                alt=""
                aria-hidden="true"
                width={256}
                height={256}
                className="h-16 w-16 sm:h-20 sm:w-20 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
