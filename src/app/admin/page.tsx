import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { getContactMessages, getNewsletterSignups } from "@/lib/store";
import { Container } from "@/components/ui/Container";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }

  const [newsletter, contact] = await Promise.all([
    getNewsletterSignups(),
    getContactMessages(),
  ]);

  return (
    <section className="bg-ivory py-16 min-h-screen">
      <Container>
        <div className="flex items-center justify-between gap-4 mb-10">
          <h1 className="font-serif-display text-3xl font-medium text-ink">
            Admin Dashboard
          </h1>
          <LogoutButton />
        </div>

        <div className="rounded-sm border border-rust/30 bg-rust/5 p-4 mb-10 text-sm text-ink/70">
          Submissions below are stored on this server&rsquo;s local filesystem
          and will not persist across deployments on serverless hosting
          (e.g. Vercel) without a connected database. See
          LAUNCH_CHECKLIST.md.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif-display text-xl font-medium text-ink mb-4">
              Newsletter Signups ({newsletter.length})
            </h2>
            {newsletter.length === 0 ? (
              <p className="text-ink/50 text-sm">No signups yet.</p>
            ) : (
              <div className="overflow-x-auto rounded-sm border border-ink/10">
                <table className="w-full text-sm">
                  <thead className="bg-paper text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-ink/70">Email</th>
                      <th className="px-4 py-3 font-semibold text-ink/70">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletter.map((entry) => (
                      <tr key={entry.email} className="border-t border-ink/10">
                        <td className="px-4 py-3 text-ink">{entry.email}</td>
                        <td className="px-4 py-3 text-ink/60">
                          {formatDate(entry.subscribedAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-serif-display text-xl font-medium text-ink mb-4">
              Contact Inquiries ({contact.length})
            </h2>
            {contact.length === 0 ? (
              <p className="text-ink/50 text-sm">No messages yet.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {contact.map((entry, i) => (
                  <div key={i} className="rounded-sm border border-ink/10 bg-paper/40 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-ink">{entry.name}</p>
                      <p className="text-xs text-ink/50">{formatDate(entry.submittedAt)}</p>
                    </div>
                    <a
                      href={`mailto:${entry.email}`}
                      className="text-sm text-orange hover:text-rust underline underline-offset-2"
                    >
                      {entry.email}
                    </a>
                    <p className="mt-2 text-ink/75 whitespace-pre-wrap">{entry.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
