import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { authorBio, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About the Author",
  description:
    "Bansi Pattni is a debut novelist. Pooja and Phil is her first novel.",
  alternates: { canonical: "/about" },
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHeader
        eyebrow="The Author"
        title="About Bansi Pattni"
        background="/images/backgrounds/05-author-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-28">
            <div className="relative h-96 w-72 sm:h-[26rem] sm:w-80 overflow-hidden rounded-sm shadow-xl ring-4 ring-paper">
              <Image
                src="/images/author/bansi-pattni.png"
                alt="Bansi Pattni, author of Pooja and Phil"
                fill
                sizes="(min-width: 640px) 320px, 288px"
                className="object-cover object-top"
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

            <div className="mt-4 rounded-sm border-l-4 border-orange bg-paper/60 p-6">
              <h2 className="font-serif-display text-xl font-medium text-ink">
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
                <Button href="/media" variant="secondary">
                  Media Resources
                </Button>
              </div>
            </div>

            <p className="text-sm text-ink/50">
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
          </div>
        </Container>
      </section>
    </>
  );
}
