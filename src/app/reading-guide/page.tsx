import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ReadingGuideList } from "@/components/sections/ReadingGuideList";

export const metadata: Metadata = {
  title: "Reading Guide",
  description:
    "Discussion questions for Pooja and Phil, grouped by theme — spoiler-free by default, with an optional spoiler section for groups who have finished the book.",
  alternates: { canonical: "/reading-guide" },
};

export default function ReadingGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Book Clubs"
        title="Reading Guide"
        description="Discussion questions for Pooja and Phil, grouped by theme. The final section contains spoilers and is hidden until you choose to reveal it."
        background="/images/backgrounds/02-book-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24 print:py-6">
        <Container className="max-w-3xl">
          <ReadingGuideList />
        </Container>
      </section>
    </>
  );
}
