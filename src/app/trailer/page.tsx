import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/sections/VideoPlayer";
import { trailer, synopsis } from "@/content/site";

export const metadata: Metadata = {
  title: "Trailer",
  description:
    "Watch the trailer for Pooja and Phil, a debut novel by Bansi Pattni about an unexpected friendship.",
  alternates: { canonical: "/trailer" },
};

export default function TrailerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Watch"
        title={trailer.heading}
        description={trailer.intro}
        background="/images/backgrounds/04-trailer-clean-sunset.png"
        tone="cream"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-4xl">
          <VideoPlayer
            videoSrc={trailer.videoSrc}
            captionsSrc={trailer.captionsSrc}
            posterSrc={trailer.posters[0]}
            title="Pooja and Phil"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trailer.posters.map((src, i) => (
              <div key={src} className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={`Scene still ${i + 1} from the Pooja and Phil trailer`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-10">
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
