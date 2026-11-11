import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { getPublishedPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "News, behind-the-scenes writing notes and book-club resources from Bansi Pattni, author of Pooja and Phil.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & News — Pooja and Phil",
    description:
      "News, behind-the-scenes writing notes and book-club resources from Bansi Pattni, author of Pooja and Phil.",
    url: "/blog",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { dateStyle: "long" });
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog & News"
        title="Stories, notes and news."
        description="Behind-the-scenes writing notes, themes from the novel, and resources for book clubs and readers."
        background="/images/backgrounds/02-book-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          {posts.length === 0 ? (
            <p className="text-ink/60">No posts yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article key={post.slug} className="flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-paper">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-4 font-serif-display text-xl font-medium text-ink group-hover:text-orange transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-rust">
                    {formatDate(post.publishedAt)}
                  </p>
                  <p className="mt-2 text-ink/70 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 text-sm font-semibold text-orange hover:text-rust underline underline-offset-4"
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
