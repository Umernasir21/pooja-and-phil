import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { Container } from "@/components/ui/Container";
import { BlogForm } from "@/components/admin/BlogForm";

export const metadata: Metadata = {
  title: "New Post — Admin",
  robots: { index: false, follow: false },
};

export default async function NewBlogPostPage() {
  const cookieStore = await cookies();
  if (!isValidSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }

  return (
    <section className="bg-ivory py-16 min-h-screen">
      <Container>
        <Link href="/admin" className="text-sm text-ink/60 hover:text-orange">
          &larr; Back to dashboard
        </Link>
        <h1 className="font-serif-display text-3xl font-medium text-ink mt-4 mb-8">
          New Blog Post
        </h1>
        <BlogForm mode="create" />
      </Container>
    </section>
  );
}
