import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { characters, homeCharacters } from "@/content/site";

export function CharactersSection() {
  return (
    <section
      className="relative bg-espresso bg-cover bg-center"
      style={{ backgroundImage: "url(/images/editorial/two-lives-friendship.png)" }}
      aria-label="Meet the characters"
    >
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-end sm:justify-center sm:gap-10">
          {/* Heading + description, always first */}
          <div className="order-1 flex flex-col items-center gap-4 text-center sm:order-2 sm:max-w-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
              {homeCharacters.eyebrow}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-cream">
              Two lives. One unexpected friendship.
            </h2>
            <p className="text-cream/80 leading-relaxed">
              {homeCharacters.pooja.description} {homeCharacters.phil.description}
            </p>
            <div className="hidden pt-1 sm:block">
              <Button href="/characters" variant="ghost-cream">
                Meet the Characters
              </Button>
            </div>
          </div>

          {/* Characters: side-by-side row on mobile, flanking columns on desktop */}
          <div className="order-2 sm:contents">
            <div className="flex justify-center gap-6 sm:contents">
              <div className="flex flex-col items-center gap-3 sm:order-1">
                <Image
                  src={characters.pooja.image}
                  alt={homeCharacters.pooja.name}
                  width={1089}
                  height={1444}
                  sizes="(max-width: 639px) 40vw, 260px"
                  className="h-[220px] sm:h-[280px] w-auto object-contain"
                />
                <p className="font-serif-display text-xl italic text-saffron">
                  {homeCharacters.pooja.name}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:order-3">
                <Image
                  src={characters.phil.image}
                  alt={homeCharacters.phil.name}
                  width={980}
                  height={1605}
                  sizes="(max-width: 639px) 40vw, 260px"
                  className="h-[220px] sm:h-[280px] w-auto object-contain"
                />
                <p className="font-serif-display text-xl italic text-saffron">
                  {homeCharacters.phil.name}
                </p>
              </div>
            </div>
          </div>

          {/* Button, after the characters row on mobile only */}
          <div className="order-3 sm:hidden">
            <Button href="/characters" variant="ghost-cream">
              Meet the Characters
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
