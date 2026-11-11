import type { Metadata } from "next";
import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { BlogForm } from "@/components/admin/BlogForm";

export const metadata: Metadata = {
  title: "New Post — Admin",
  robots: { index: false, follow: false },
};

export default function NewBlogPostPage() {
  return (
    <>
      <Link href="/admin/blog" className="text-sm text-slate-500 hover:text-orange">
        &larr; Back to blog posts
      </Link>
      <AdminPageHeader title="New Blog Post" />
      <BlogForm mode="create" />
    </>
  );
}
