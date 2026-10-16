import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { characters } from "@/content/site";

export function CharactersSection() {
  return (
    <section className="relative bg-espresso text-cream" aria-label="Meet the characters">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(/images/backgrounds/03-characters-espresso.png)" }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-28">
        <SectionHeading
          eyebrow="Meet the Characters"
          title="Pooja and Phil"
          description="A young dreamer determined to carve out a life in dance and theatre. A self-made businessman relearning how to live. Here's where their story begins."
          align="center"
          tone="cream"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {[characters.pooja, characters.phil].map((character) => (
            <div key={character.name} className="flex flex-col items-center text-center gap-5">
              <div className="relative h-64 w-48 sm:h-72 sm:w-56">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  sizes="(min-width: 640px) 224px, 192px"
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl font-medium text-cream">
                  {character.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-saffron">
                  {character.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/characters" variant="ghost-cream">
            Meet the Full Cast
          </Button>
        </div>
      </Container>
    </section>
  );
}
