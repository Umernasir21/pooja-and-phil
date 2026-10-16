import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReadingSample } from "@/components/sections/ReadingSample";
import { synopsis, site } from "@/content/site";

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

export default function TheBookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <PageHeader
        eyebrow="The Book"
        title="Pooja and Phil"
        description="A debut novel by Bansi Pattni, about the friendship neither of them saw coming."
        background="/images/backgrounds/02-book-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-28">
            <Image
              src="/images/books/book-cover-full-wrap.png"
              alt="Pooja and Phil, full cover wrap"
              width={2048}
              height={1506}
              className="h-auto w-full max-w-sm drop-shadow-2xl"
            />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <h2 className="font-serif-display text-3xl font-medium text-ink">Synopsis</h2>
            {synopsis.extended.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-4">
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
            Themes at the Heart of the Story
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {synopsis.themeList.map((theme) => (
              <div
                key={theme.title}
                className="rounded-sm border-l-4 border-orange bg-ivory/60 p-6"
              >
                <h3 className="font-serif-display text-xl font-medium text-ink">
                  {theme.title}
                </h3>
                <p className="mt-2 text-ink/70 leading-relaxed">{theme.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-serif-display text-3xl font-medium text-ink mb-8">
            Read an Excerpt
          </h2>
          <ReadingSample />
          <p className="mt-6 text-sm text-ink/50">
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
