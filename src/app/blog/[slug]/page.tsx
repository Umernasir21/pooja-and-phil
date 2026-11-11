import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { renderMarkdownLite } from "@/lib/markdown";
import { site } from "@/content/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [post.coverImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { dateStyle: "long" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [related] = (await getPublishedPosts()).filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: `${site.domain}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Person", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="bg-ivory py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-ink/50 hover:text-orange">
            &larr; Back to Blog
          </Link>

          {post.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rust"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <h1 className="mt-4 font-serif-display text-3xl sm:text-4xl font-semibold leading-[1.15] text-ink">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-ink/50">{formatDate(post.publishedAt)}</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm bg-paper">
            <Image
              src={post.coverImage}
              alt=""
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose-blog mt-10"
            dangerouslySetInnerHTML={{ __html: renderMarkdownLite(post.content) }}
          />

          <div className="mt-14 rounded-sm border border-orange/30 bg-paper/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-serif-display text-xl font-medium text-ink">
                Ready to meet Pooja and Phil?
              </h2>
              <p className="mt-1.5 text-ink/70">
                Read the synopsis, try a free chapter, or go straight to the book.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button href="/the-book" variant="primary">
                Discover the Book
              </Button>
            </div>
          </div>

          {related ? (
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Read next</p>
              <Link
                href={`/blog/${related.slug}`}
                className="mt-2 inline-block font-serif-display text-lg font-medium text-ink hover:text-orange transition-colors"
              >
                {related.title}
              </Link>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
