import Link from "next/link";
import { getAllPostsAdmin } from "@/lib/blog";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export default async function AdminBlogPage() {
  const posts = await getAllPostsAdmin();

  return (
    <>
      <AdminPageHeader
        title="Blog Posts"
        description={`${posts.length} post${posts.length === 1 ? "" : "s"} total`}
        action={
          <Link
            href="/admin/blog/new"
            className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-cream hover:bg-rust transition-colors"
          >
            + New Post
          </Link>
        }
      />

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <p className="text-sm text-slate-500">No posts yet.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-left">
              <tr>
                <th className="px-5 py-3 font-medium text-slate-500">Title</th>
                <th className="px-5 py-3 font-medium text-slate-500">Status</th>
                <th className="px-5 py-3 font-medium text-slate-500">Published</th>
                <th className="px-5 py-3 font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.slug} className="hover:bg-slate-50/60">
                  <td className="px-5 py-3.5 font-medium text-slate-900">{post.title}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        post.published
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", { dateStyle: "medium" })}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/admin/blog/${post.slug}`}
                        className="text-xs font-semibold text-orange hover:text-rust"
                      >
                        Edit
                      </Link>
                      <DeletePostButton slug={post.slug} title={post.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
