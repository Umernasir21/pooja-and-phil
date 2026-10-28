import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { authorBand } from "@/content/site";

export function AuthorTeaserSection() {
  return (
    <section className="bg-ivory" aria-label="About the author">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-[0.75fr_1fr] gap-8 sm:gap-10 items-center">
          <div className="flex justify-center sm:justify-start">
            <div className="relative w-full max-w-[340px] aspect-[1362/2048] rounded-sm shadow-lg">
              <Image
                src="/images/author/bansi-pattni.png"
                alt="Bansi Pattni, author of Pooja and Phil"
                fill
                sizes="(min-width: 640px) 35vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                {authorBand.eyebrow}
              </span>
              <span className="h-px w-8 bg-orange/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif-display text-ink font-extrabold leading-[1.05] text-[2.1rem] sm:text-[1.9rem] md:text-[2.4rem] lg:text-[2.7rem]">
              {authorBand.heading}
            </h2>

            <p className="text-[0.95rem] leading-relaxed text-ink/70 max-w-xl">
              {authorBand.bio}
            </p>
            <div><Button href="/about" variant="secondary">Meet Bansi Pattni</Button></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
