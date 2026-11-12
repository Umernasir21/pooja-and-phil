"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/blog";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const fieldClasses =
  "w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm text-ink focus-visible:outline-3 focus-visible:outline-orange";
const labelClasses = "flex flex-col gap-1.5";
const labelTextClasses = "text-sm font-semibold text-ink/70";

export function BlogForm({ mode, initialPost }: { mode: "create" | "edit"; initialPost?: BlogPost }) {
  const router = useRouter();
  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [slug, setSlug] = useState(initialPost?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt ?? "");
  const [content, setContent] = useState(initialPost?.content ?? "");
  const [coverImage, setCoverImage] = useState(initialPost?.coverImage ?? "");
  const [tags, setTags] = useState(initialPost?.tags.join(", ") ?? "");
  const [seoTitle, setSeoTitle] = useState(initialPost?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = useState(initialPost?.seoDescription ?? "");
  const [published, setPublished] = useState(initialPost?.published ?? false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function handleImageUpload(file: File) {
    setUploading(true);
    setUploadError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setUploadError(data.error || "Upload failed.");
        return;
      }
      setCoverImage(data.path);
    } catch {
      setUploadError("Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const payload = {
      slug: slugify(slug),
      title: title.trim(),
      excerpt: excerpt.trim(),
      content,
      coverImage: coverImage.trim(),
      tags,
      seoTitle: seoTitle.trim(),
      seoDescription: seoDescription.trim(),
      published,
    };

    const url = mode === "create" ? "/api/admin/blog" : `/api/admin/blog/${initialPost!.slug}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Could not save this post.");
        setStatus("error");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-2xl">
      <label className={labelClasses}>
        <span className={labelTextClasses}>Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className={fieldClasses}
        />
      </label>

      <label className={labelClasses}>
        <span className={labelTextClasses}>Slug (URL path: /blog/…)</span>
        <input
          type="text"
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          required
          pattern="[a-z0-9]+(-[a-z0-9]+)*"
          className={fieldClasses}
        />
      </label>

      <label className={labelClasses}>
        <span className={labelTextClasses}>Excerpt (shown on the blog list, max 300 characters)</span>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          maxLength={300}
          rows={2}
          className={fieldClasses}
        />
      </label>

      <div className={labelClasses}>
        <span className={labelTextClasses}>Cover image</span>

        {coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- admin-only preview of an arbitrary uploaded/typed path
          <img
            src={coverImage}
            alt=""
            className="h-40 w-full max-w-xs rounded-sm border border-ink/15 object-cover"
          />
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-ink/25 px-4 py-2 text-sm font-semibold text-ink/70 hover:border-orange hover:text-orange transition-colors">
            {uploading ? "Uploading…" : "Upload image"}
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
                e.target.value = "";
              }}
              className="sr-only"
            />
          </label>
          <span className="text-xs text-ink/45">or paste a path below</span>
        </div>

        <input
          type="text"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          placeholder="/images/characters/pooja-transparent.png"
          required
          className={fieldClasses}
        />

        {uploadError ? (
          <p role="alert" className="text-sm text-rust">
            {uploadError}
          </p>
        ) : null}
      </div>

      <label className={labelClasses}>
        <span className={labelTextClasses}>
          Content — paragraphs, blank line between each. <code>## Heading</code>,{" "}
          <code>- bullet</code>, <code>**bold**</code>, <code>*italic*</code> and{" "}
          <code>[link](url)</code> are supported.
        </span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className={`${fieldClasses} font-mono text-[0.85rem] leading-relaxed`}
        />
      </label>

      <label className={labelClasses}>
        <span className={labelTextClasses}>Tags (comma-separated)</span>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className={fieldClasses} />
      </label>

      <label className={labelClasses}>
        <span className={labelTextClasses}>SEO title (defaults to the title above)</span>
        <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className={fieldClasses} />
      </label>

      <label className={labelClasses}>
        <span className={labelTextClasses}>SEO meta description (defaults to the excerpt above)</span>
        <textarea
          value={seoDescription}
          onChange={(e) => setSeoDescription(e.target.value)}
          rows={2}
          className={fieldClasses}
        />
      </label>

      <label className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 accent-orange"
        />
        <span className="text-sm font-semibold text-ink/70">Published (visible on the public blog)</span>
      </label>

      {error ? (
        <p role="alert" className="text-sm text-rust">
          {error}
        </p>
      ) : null}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-orange px-6 py-3 text-sm font-semibold text-cream hover:bg-rust transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Saving…" : mode === "create" ? "Create Post" : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
