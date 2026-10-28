import type { Metadata } from "next";
import Image from "next/image";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { characters, banners } from "@/content/site";

export const metadata: Metadata = {
  title: "Meet Pooja & Phil — The Characters",
  description:
    "Get to know Pooja, a young dreamer chasing a life in dance and theatre, and Phil, a self-made businessman relearning how to live — the two voices behind Pooja and Phil.",
  alternates: { canonical: "/characters" },
  openGraph: {
    title: "Meet Pooja & Phil — The Characters",
    description:
      "A young British Asian dreamer and a self-made businessman relearning how to live. Meet the two voices at the heart of Bansi Pattni's debut novel.",
    url: "/characters",
    type: "website",
    images: ["/images/characters/pooja-transparent.png"],
  },
};

function CharacterProfile({
  character,
  reverse = false,
  extra,
}: {
  character: (typeof characters)["pooja"] | (typeof characters)["phil"];
  reverse?: boolean;
  extra?: { title: string; body: string };
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
        {extra ? (
          <div className="mt-2 rounded-sm bg-paper/70 p-5">
            <h3 className="font-serif-display text-base font-semibold text-ink">
              {extra.title}
            </h3>
            <p className="mt-1.5 text-ink/70 leading-relaxed">{extra.body}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function CharactersPage() {
  const b = banners.characters;

  return (
    <>
      <EditorialBanner
        image={b.image}
        theme={b.theme}
        eyebrow={b.eyebrow}
        heading={b.heading}
        description="A young dreamer determined to make a life in dance and theatre. A self-made businessman relearning how to live. Here's who they are before their story begins."
        objectPosition={b.objectPosition}
        mobileObjectPosition={b.mobileObjectPosition}
        foreground={
          <div className="banner-character-pair">
            <div className="banner-character-figure">
              <Image
                src={characters.pooja.image}
                alt="Pooja"
                fill
                sizes="20vw"
                className="object-contain"
              />
            </div>
            <div className="banner-character-figure">
              <Image
                src={characters.phil.image}
                alt="Phil"
                fill
                sizes="20vw"
                className="object-contain"
              />
            </div>
          </div>
        }
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="flex flex-col gap-24">
          <CharacterProfile
            character={characters.pooja}
            extra={{
              title: "Ambitions and pressures",
              body: "Pooja's family equates a degree and a stable job with love and protection — and she's spent her whole life feeling like the one who didn't live up to that. Her dream of dance and theatre isn't rebellion for its own sake; it's the one thing that's unmistakably hers.",
            }}
          />
          <CharacterProfile
            character={characters.phil}
            reverse
            extra={{
              title: "A life relearning itself",
              body: "Phil built Ray and Co. on total control — of his time, his company, his image. The accident didn't just change what his body can do; it took away the one thing he always trusted to fix everything: himself.",
            }}
          />
        </Container>
      </section>

      <section className="relative bg-paper py-16 sm:py-20 overflow-hidden">
        <Container className="flex flex-col items-center gap-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            The Friendship
          </span>

          <div className="relative flex items-center gap-6 sm:gap-10">
            <div className="relative h-40 w-24 sm:h-48 sm:w-32">
              <Image src={characters.pooja.image} alt="" fill sizes="96px" className="object-contain" />
            </div>
            <svg viewBox="0 0 120 24" className="h-4 w-20 sm:w-28 text-orange/60" fill="none" aria-hidden="true">
              <path d="M2 12c20-14 40 14 58 0s38-14 58 0" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="relative h-40 w-24 sm:h-48 sm:w-32">
              <Image src={characters.phil.image} alt="" fill sizes="96px" className="object-contain" />
            </div>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
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
