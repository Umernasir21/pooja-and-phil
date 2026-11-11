import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { BlogForm } from "@/components/admin/BlogForm";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export const metadata: Metadata = {
  title: "Edit Post — Admin",
  robots: { index: false, follow: false },
};

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, { includeUnpublished: true });
  if (!post) notFound();

  return (
    <>
      <Link href="/admin/blog" className="text-sm text-slate-500 hover:text-orange">
        &larr; Back to blog posts
      </Link>
      <AdminPageHeader title="Edit Post" action={<DeletePostButton slug={post.slug} title={post.title} />} />
      <BlogForm mode="edit" initialPost={post} />
    </>
  );
}
