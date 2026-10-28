import type { Metadata } from "next";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReadingGuideList } from "@/components/sections/ReadingGuideList";
import { ReadingGuideToc } from "@/components/sections/ReadingGuideToc";
import { banners } from "@/content/site";

export const metadata: Metadata = {
  title: "Reading Guide — Book Club Discussion Questions",
  description:
    "Spoiler-free book club discussion questions for Pooja and Phil, grouped by theme — friendship, ambition, identity and belonging — with a bonus spoiler section for groups who've finished the book.",
  alternates: { canonical: "/reading-guide" },
  openGraph: {
    title: "Reading Guide — Pooja and Phil Discussion Questions",
    description:
      "Spoiler-free book club questions for Pooja and Phil, grouped by theme, with a closed-by-default spoiler section for readers who've finished the book.",
    url: "/reading-guide",
    type: "website",
  },
};

export default function ReadingGuidePage() {
  const b = banners.readingGuide;

  return (
    <>
      <div className="print:hidden">
        <EditorialBanner
          image={b.image}
          theme={b.theme}
          eyebrow={b.eyebrow}
          heading={b.heading}
          description="Discussion questions for Pooja and Phil, grouped by theme — spoiler-free by default, with the final section hidden until you choose to reveal it."
          objectPosition={b.objectPosition}
          mobileObjectPosition={b.mobileObjectPosition}
        />
      </div>

      <section className="bg-ivory py-16 sm:py-20 print:hidden">
        <Container className="max-w-3xl flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
            How to Use This Guide
          </span>
          <p className="text-lg leading-relaxed text-ink/70">
            The questions below are grouped by theme and meant for discussion,
            not quizzing — there are no right answers. Each group is
            spoiler-free except the last, which is set aside for readers who
            have finished the book and stays closed until you choose to open
            it.
          </p>
        </Container>
      </section>

      <section className="bg-ivory pb-16 sm:pb-24 print:py-6">
        <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <ReadingGuideToc />
          <div className="flex-1 max-w-3xl">
            <ReadingGuideList />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 print:hidden">
        <Container className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-lg text-ink/70">Want more context before your discussion?</p>
          <div className="flex gap-3">
            <Button href="/characters" variant="secondary">
              Meet the Characters
            </Button>
            <Button href="/the-book" variant="secondary">
              Back to the Book
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
