import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReadingSample } from "@/components/sections/ReadingSample";
import { synopsis, site, banners, characters } from "@/content/site";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "Pooja and Phil: an unexpected friendship between a young British Asian dreamer and a self-made businessman relearning how to live. Read the synopsis and an excerpt from Chapter One.",
  alternates: { canonical: "/the-book" },
};

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: site.bookTitle,
  author: {
    "@type": "Person",
    name: site.name,
  },
  isbn: "979-8-950507-68-7",
  inLanguage: "en-GB",
  description: synopsis.short,
};

const themeIcons: Record<string, ReactNode> = {
  "Friendship across difference": (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="16" r="8" />
      <circle cx="20" cy="16" r="8" />
    </svg>
  ),
  "Chasing a dream against the odds": (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4l3.5 8.5L28 14l-7 6 2 9-7-4.5L9 29l2-9-7-6 8.5-1.5z" strokeLinejoin="round" />
    </svg>
  ),
  "British Asian identity and belonging": (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="11" />
      <path d="M16 5c3 3 4.5 7 4.5 11s-1.5 8-4.5 11c-3-3-4.5-7-4.5-11S13 8 16 5z" />
    </svg>
  ),
  "Vulnerability and connection": (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 27S5 20 5 12.5A6.5 6.5 0 0116 8a6.5 6.5 0 0111 4.5C27 20 16 27 16 27z" strokeLinejoin="round" />
    </svg>
  ),
};

export default function TheBookPage() {
  const b = banners.theBook;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <EditorialBanner
        image={b.image}
        theme={b.theme}
        eyebrow={b.eyebrow}
        heading={b.heading}
        description="A debut novel by Bansi Pattni, about the friendship neither of them saw coming."
        objectPosition={b.objectPosition}
        mobileObjectPosition={b.mobileObjectPosition}
        action={
          <div className="pt-2">
            <Button href="#excerpt" variant="primary">
              Read an Excerpt
            </Button>
          </div>
        }
        foreground={
          <div className="banner-book">
            <Image
              src="/images/books/book-front-premium.png"
              alt="Pooja and Phil, book cover standing upright"
              width={1012}
              height={1554}
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        }
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid grid-cols-1 sm:grid-cols-[0.45fr_0.55fr] gap-12 items-center">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/books/book-front-premium.png"
              alt="Pooja and Phil, book cover standing upright"
              width={1012}
              height={1554}
              className="h-auto w-full max-w-xs drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-serif-display text-3xl font-medium text-ink">Synopsis</h2>
            {synopsis.extended.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}

<div className="flex flex-wrap gap-4">
              <Button href="/trailer" variant="secondary">
                Watch the Trailer
              </Button>
              <Button href="/reading-guide" variant="secondary">
                Reading Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <h2 className="font-serif-display text-3xl font-medium text-ink text-center">
            At the Heart of the Story
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto">
            {synopsis.themeList.map((theme) => (
              <div key={theme.title} className="flex gap-4">
                <span className="shrink-0 text-orange">{themeIcons[theme.title]}</span>
                <div>
                  <h3 className="font-serif-display text-lg font-medium text-ink">
                    {theme.title}
                  </h3>
                  <p className="mt-1.5 text-ink/70 leading-relaxed">{theme.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="excerpt" className="bg-ivory py-16 sm:py-24 scroll-mt-20">
        <Container className="max-w-3xl">
          <h2 className="font-serif-display text-3xl font-medium text-ink mb-8">
            Read an Excerpt
          </h2>
          <ReadingSample />
        </Container>
      </section>

      <section className="bg-espresso py-16 sm:py-20">
        <Container className="flex flex-col sm:flex-row items-center gap-10">
          <div className="flex gap-3 shrink-0">
            <div className="relative h-44 w-28">
              <Image src={characters.pooja.image} alt="" fill sizes="96px" className="object-contain" />
            </div>
            <div className="relative h-44 w-28">
              <Image src={characters.phil.image} alt="" fill sizes="96px" className="object-contain" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-serif-display text-2xl font-medium text-cream">
              Two lives, one unexpected friendship
            </h2>
            <p className="mt-2 text-cream/75 leading-relaxed max-w-2xl">
              Meet Pooja and Phil in full &mdash; their ambitions, their guardedness,
              and where their story begins.
            </p>
          </div>
          <Button href="/characters" variant="ghost-cream" className="shrink-0">
            Meet the Characters
          </Button>
        </Container>
      </section>

      <section className="bg-paper py-10">
        <Container className="text-center">
          <p className="text-sm text-ink/50">
            Looking to go deeper? Visit the{" "}
            <Link href="/reading-guide" className="text-orange underline underline-offset-4 hover:text-rust">
              reading guide
            </Link>{" "}
            for spoiler-free discussion questions.
          </p>
        </Container>
      </section>
    </>
  );
}
