import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BookIntroSection } from "@/components/sections/BookIntroSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { TrailerTeaserSection } from "@/components/sections/TrailerTeaserSection";
import { AuthorTeaserSection } from "@/components/sections/AuthorTeaserSection";
import { ReadingGuideTeaser } from "@/components/sections/ReadingGuideTeaser";
import { ClosingSection } from "@/components/sections/ClosingSection";

export const metadata: Metadata = {
  title: "Pooja and Phil | Debut Novel by Bansi Pattni",
  description:
    "A British Asian dreamer. A self-made businessman relearning how to live. Discover Pooja and Phil — an unexpected friendship from debut author Bansi Pattni. Read the synopsis, meet the characters and watch the trailer.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pooja and Phil | Debut Novel by Bansi Pattni",
    description:
      "Different worlds. An unexpected friendship. A British Asian dreamer and a self-made businessman relearning how to live — discover Bansi Pattni's debut novel.",
    url: "/",
    type: "website",
    images: ["/images/books/book-cover-front.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja and Phil | Debut Novel by Bansi Pattni",
    description: "Different worlds. An unexpected friendship.",
    images: ["/images/books/book-cover-front.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookIntroSection />
      <CharactersSection />
      <TrailerTeaserSection />
      <AuthorTeaserSection />
      <ReadingGuideTeaser />
      <ClosingSection />
    </>
  );
}
