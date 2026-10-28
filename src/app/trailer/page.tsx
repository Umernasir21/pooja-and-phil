import type { Metadata } from "next";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/sections/VideoPlayer";
import { StillsLightbox } from "@/components/sections/StillsLightbox";
import { trailer, synopsis, banners } from "@/content/site";

export const metadata: Metadata = {
  title: "Trailer",
  description:
    "Watch the trailer for Pooja and Phil, a debut novel by Bansi Pattni about an unexpected friendship.",
  alternates: { canonical: "/trailer" },
};

export default function TrailerPage() {
  const b = banners.trailer;
  const stillImages = trailer.posters.map((src, i) => ({
    src,
    label: `Trailer still ${i + 1}`,
  }));

  return (
    <>
      <EditorialBanner
        image={b.image}
        theme={b.theme}
        eyebrow={b.eyebrow}
        heading={b.heading}
        description={trailer.intro}
        objectPosition={b.objectPosition}
        mobileObjectPosition={b.mobileObjectPosition}
      />

      <section className="bg-espresso py-16 sm:py-20">
        <Container className="max-w-4xl">
          <VideoPlayer
            videoSrc={trailer.videoSrc}
            captionsSrc={trailer.captionsSrc}
            posterSrc={trailer.posters[0]}
            title="Pooja and Phil"
          />
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container className="max-w-4xl">
          <h2 className="font-serif-display text-2xl font-medium text-ink mb-2">
            Trailer Stills
          </h2>
          <p className="text-ink/60 mb-8">
            Three stills from the trailer. Select one to view it larger.
          </p>
          <StillsLightbox images={stillImages} title="Pooja and Phil trailer" />
        </Container>
      </section>

      <section className="bg-ivory pb-16 sm:pb-24">
        <Container className="max-w-4xl">
          <div className="flex flex-col gap-4 border-t border-ink/10 pt-10">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              About the Book
            </h2>
            <p className="text-lg leading-relaxed text-ink/75">
              {synopsis.short}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/the-book" variant="primary">
                Discover the Book
              </Button>
              <Button href="/characters" variant="secondary">
                Meet the Characters
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
