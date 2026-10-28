import type { Metadata } from "next";
import Image from "next/image";
import { EditorialBanner } from "@/components/ui/EditorialBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { media, site, banners } from "@/content/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Media resources for Pooja and Phil by Bansi Pattni: author bios, book description, and downloadable cover and author images.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  const b = banners.media;

  return (
    <>
      <EditorialBanner
        image={b.image}
        theme={b.theme}
        eyebrow={b.eyebrow}
        heading={b.heading}
        description="Bios, book description and approved imagery for press and promotional use."
        objectPosition={b.objectPosition}
        mobileObjectPosition={b.mobileObjectPosition}
        action={
          <div className="pt-2">
            <a
              href="/api/press-kit"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-rust"
            >
              Download Press Kit (ZIP)
            </a>
          </div>
        }
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-3xl flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif-display text-2xl font-medium text-ink">
                Short Author Bio
              </h2>
              <CopyButton text={media.shortBio} />
            </div>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.shortBio}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif-display text-2xl font-medium text-ink">
                Extended Author Bio
              </h2>
              <CopyButton text={media.extendedBio} />
            </div>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.extendedBio}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif-display text-2xl font-medium text-ink">
                Book Description
              </h2>
              <CopyButton text={media.bookDescription} />
            </div>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.bookDescription}
            </p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-sm border border-ink/10 p-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">Title</dt>
                <dd className="text-ink/80">{site.bookTitle}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">Author</dt>
                <dd className="text-ink/80">{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">ISBN</dt>
                <dd className="text-ink/80">979-8-950507-68-7</dd>
              </div>
            </dl>
            <p className="text-xs text-ink/40">
              ISBN as published on this site; not independently re-verified
              against separate publisher records in this update.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              Downloadable Assets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {media.downloads.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  download
                  className="group flex flex-col gap-3 rounded-sm border border-ink/10 bg-paper/40 p-5 transition-colors hover:border-orange"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-sm bg-ivory">
                    <Image
                      src={item.href}
                      alt={item.description}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ink group-hover:text-orange transition-colors">
                      {item.label}
                    </p>
                    <p className="text-sm text-ink/60">{item.description}</p>
                    <p className="mt-1 text-xs text-ink/40">{item.meta}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-rust">
                    Download
                  </span>
                </a>
              ))}
            </div>
            <div className="pt-2">
              <Button href="/api/press-kit" variant="secondary">
                Download Full Press Kit (ZIP)
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
