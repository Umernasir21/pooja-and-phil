import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { getPostBySlug } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
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
  const cookieStore = await cookies();
  if (!isValidSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }

  const { slug } = await params;
  const post = await getPostBySlug(slug, { includeUnpublished: true });
  if (!post) notFound();

  return (
    <section className="bg-ivory py-16 min-h-screen">
      <Container>
        <div className="flex items-center justify-between gap-4 mb-4">
          <Link href="/admin" className="text-sm text-ink/60 hover:text-orange">
            &larr; Back to dashboard
          </Link>
          <DeletePostButton slug={post.slug} title={post.title} />
        </div>
        <h1 className="font-serif-display text-3xl font-medium text-ink mb-8">Edit Post</h1>
        <BlogForm mode="edit" initialPost={post} />
      </Container>
    </section>
  );
}
