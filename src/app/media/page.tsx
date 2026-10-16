import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { media, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Media resources for Pooja and Phil by Bansi Pattni: author bios, book description, and downloadable cover and author images.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press & Media"
        title="Media Resources"
        description="Bios, book description and approved imagery for press and promotional use."
        background="/images/backgrounds/05-author-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-3xl flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              Short Author Bio
            </h2>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.shortBio}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              Extended Author Bio
            </h2>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.extendedBio}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              Book Description
            </h2>
            <p className="rounded-sm bg-paper/60 p-6 text-lg leading-relaxed text-ink/80">
              {media.bookDescription}
            </p>
            <dl className="grid grid-cols-2 gap-4 text-sm text-ink/60 sm:grid-cols-3">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">Title</dt>
                <dd>{site.bookTitle}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">Author</dt>
                <dd>{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-ink/40">ISBN</dt>
                <dd>979-8-950507-68-7</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif-display text-2xl font-medium text-ink">
              Downloadable Assets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {media.downloads.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  download
                  className="group flex flex-col gap-4 rounded-sm border border-ink/10 bg-paper/40 p-5 transition-colors hover:border-orange"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-sm bg-ivory">
                    <Image
                      src={item.href}
                      alt={item.description}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ink group-hover:text-orange transition-colors">
                      {item.label}
                    </p>
                    <p className="text-sm text-ink/60">{item.description}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-rust">
                    Download
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
