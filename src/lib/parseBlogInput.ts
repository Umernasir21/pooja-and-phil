import type { BlogPostInput } from "@/lib/blog";

export function parseBlogInput(body: Record<string, unknown>): BlogPostInput | { error: string } {
  const slug = String(body.slug ?? "").trim().toLowerCase();
  const title = String(body.title ?? "").trim();
  const excerpt = String(body.excerpt ?? "").trim();
  const content = String(body.content ?? "").trim();
  const coverImage = String(body.coverImage ?? "").trim();
  const seoTitle = String(body.seoTitle ?? "").trim() || title;
  const seoDescription = String(body.seoDescription ?? "").trim() || excerpt;
  const tags = Array.isArray(body.tags)
    ? body.tags.map(String).map((t) => t.trim()).filter(Boolean)
    : String(body.tags ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
  const published = Boolean(body.published);

  if (!slug) return { error: "Slug is required." };
  if (!title) return { error: "Title is required." };
  if (!excerpt || excerpt.length > 300) return { error: "Excerpt is required (max 300 characters)." };
  if (!content) return { error: "Content is required." };
  if (!coverImage) return { error: "Cover image path is required." };

  return { slug, title, excerpt, content, coverImage, tags, seoTitle, seoDescription, published };
}
