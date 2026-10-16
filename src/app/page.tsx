import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BookIntroSection } from "@/components/sections/BookIntroSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { TrailerTeaserSection } from "@/components/sections/TrailerTeaserSection";
import { AuthorTeaserSection } from "@/components/sections/AuthorTeaserSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

export const metadata: Metadata = {
  title: "Pooja and Phil | A Debut Novel by Bansi Pattni",
  description:
    "Different worlds. An unexpected friendship. Discover Pooja and Phil, a debut novel by Bansi Pattni, about a young British Asian dreamer and a self-made businessman relearning how to live.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookIntroSection />
      <CharactersSection />
      <TrailerTeaserSection />
      <AuthorTeaserSection />
      <ClosingSection />
    </>
  );
}
