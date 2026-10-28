import type { Metadata } from "next";
import Image from "next/image";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { authorBio, banners, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Author Bansi Pattni",
  description:
    "Meet Bansi Pattni, a London-based lawyer and first-time novelist. Her debut novel Pooja and Phil explores friendship, identity and belonging across generations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Author Bansi Pattni",
    description:
      "Bansi Pattni is a London-based lawyer and first-time novelist. Pooja and Phil is her debut novel.",
    url: "/about",
    type: "profile",
    images: ["/images/author/bansi-pattni.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Author",
  description: authorBio.short,
  sameAs: ["https://www.instagram.com/bansi_pattni/"],
};

export default function AboutPage() {
  const b = banners.about;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <EditorialBanner
        image={b.image}
        theme={b.theme}
        eyebrow={b.eyebrow}
        heading={b.heading}
        description="Bansi Pattni is a London-based lawyer and a first-time author."
        objectPosition={b.objectPosition}
        mobileObjectPosition={b.mobileObjectPosition}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[1362/2048] rounded-sm shadow-xl ring-4 ring-paper">
              <Image
                src="/images/author/bansi-pattni.png"
                alt="Bansi Pattni, author of Pooja and Phil"
                fill
                sizes="(min-width: 640px) 320px, 288px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {authorBio.extended.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            Writing Interests
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-ink">
            Cultural heritage and human emotion
          </h2>
          <p className="text-lg leading-relaxed text-ink/70">
            Bansi is a lover of books who particularly enjoys stories that
            touch on cultural heritage and focus on human emotion. She is
            fascinated by human psychology and how it has shaped society over
            time &mdash; an interest that runs through Pooja and Phil, a story
            about two people shaped by very different pressures, histories
            and expectations.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-[0.6fr_1fr] gap-10 items-center rounded-sm border-l-4 border-orange bg-paper/50 p-8 sm:p-10">
            <div className="flex justify-center">
              <Image
                src="/images/books/book-front-premium.png"
                alt="Pooja and Phil, book cover standing upright"
                width={1012}
                height={1554}
                className="h-auto w-full max-w-[220px] drop-shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif-display text-xl sm:text-2xl font-medium text-ink">
                Her Debut Novel
              </h2>
              <p className="mt-2 text-ink/70 leading-relaxed">
                Pooja and Phil tells the story of an unexpected friendship
                between a young British Asian dreamer and a self-made
                businessman relearning how to live &mdash; two people from
                entirely different worlds who find, in each other, something
                neither expected.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Button href="/the-book" variant="primary">
                  Discover the Book
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink/50">
            Follow along on{" "}
            <a
              href="https://www.instagram.com/bansi_pattni/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-orange underline underline-offset-4 hover:text-rust"
            >
              Instagram
            </a>{" "}
            and Substack.
          </p>
        </Container>
      </section>
    </>
  );
}
