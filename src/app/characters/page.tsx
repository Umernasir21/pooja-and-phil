import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { characters } from "@/content/site";

export const metadata: Metadata = {
  title: "Characters",
  description:
    "Meet Pooja and Phil — a young British Asian dreamer and a self-made businessman relearning how to live — the two voices at the heart of Bansi Pattni's debut novel.",
  alternates: { canonical: "/characters" },
};

function CharacterProfile({
  character,
  reverse = false,
}: {
  character: (typeof characters)["pooja"] | (typeof characters)["phil"];
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div
        className={`lg:col-span-5 flex justify-center ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="relative h-80 w-64 sm:h-96 sm:w-72">
          <Image
            src={character.image}
            alt={character.name}
            fill
            sizes="(min-width: 640px) 288px, 256px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
      <div className={`lg:col-span-7 flex flex-col gap-5 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-medium text-ink">
            {character.name}
          </h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-rust">
            {character.role}
            {character.age ? ` · Age ${character.age}` : ""}
          </p>
        </div>
        {character.bio.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-ink/75">
            {p}
          </p>
        ))}
        <blockquote className="mt-2 border-l-4 border-orange pl-5 font-serif-display text-xl italic text-ink/80">
          &ldquo;{character.quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

export default function CharactersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Characters"
        title="Two different worlds"
        description="A young dreamer determined to make a life in dance and theatre. A self-made businessman relearning how to live. Here's who they are before their story begins."
        background="/images/backgrounds/03-characters-espresso.png"
        tone="cream"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="flex flex-col gap-24">
          <CharacterProfile character={characters.pooja} />
          <CharacterProfile character={characters.phil} reverse />
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-2xl text-center flex flex-col items-center gap-6">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-ink">
            Two lives from entirely different worlds
          </h2>
          <p className="text-lg leading-relaxed text-ink/70">
            One is young, bold and determined to be heard. The other has spent
            a lifetime being heard and is only just learning how to listen.
            What happens when their worlds collide is a story about the
            families we&rsquo;re born into, the ones we choose, and the
            courage it takes to let someone else in.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/the-book" variant="primary">
              Discover the Book
            </Button>
            <Button href="/reading-guide" variant="secondary">
              Reading Guide
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
