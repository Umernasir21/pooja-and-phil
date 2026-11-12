import Link from "next/link";
import { getContactMessages, getNewsletterSignups } from "@/lib/store";
import { getAllPostsAdmin } from "@/lib/blog";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatCard } from "@/components/admin/StatCard";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { dateStyle: "medium" });
}

export default async function AdminOverviewPage() {
  const [newsletter, contact, posts] = await Promise.all([
    getNewsletterSignups(),
    getContactMessages(),
    getAllPostsAdmin(),
  ]);

  const published = posts.filter((p) => p.published).length;
  const recentContact = [...contact].slice(-5).reverse();
  const recentNewsletter = [...newsletter].slice(-5).reverse();

  return (
    <>
      <AdminPageHeader
        title="Overview"
        description="A snapshot of the site — signups, messages and content."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Newsletter signups" value={newsletter.length} />
        <StatCard label="Contact messages" value={contact.length} />
        <StatCard label="Published posts" value={published} />
        <StatCard label="Drafts" value={posts.length - published} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-900">Recent contact messages</h2>
            <Link href="/admin/contact" className="text-sm font-medium text-orange hover:text-rust">
              View all
            </Link>
          </div>
          {recentContact.length === 0 ? (
            <p className="px-5 py-6 text-sm text-slate-400">No messages yet.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {recentContact.map((entry, i) => (
                <li key={i} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">{entry.name}</p>
                    <p className="truncate text-xs text-slate-400">{entry.email}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400">
                    {formatDate(entry.submittedAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-900">Recent newsletter signups</h2>
            <Link href="/admin/newsletter" className="text-sm font-medium text-orange hover:text-rust">
              View all
            </Link>
          </div>
          {recentNewsletter.length === 0 ? (
            <p className="px-5 py-6 text-sm text-slate-400">No signups yet.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {recentNewsletter.map((entry) => (
                <li key={entry.email} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <p className="truncate text-sm font-medium text-slate-900">{entry.email}</p>
                  <span className="shrink-0 text-xs text-slate-400">
                    {formatDate(entry.subscribedAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
