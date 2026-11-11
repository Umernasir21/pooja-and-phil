import { getNewsletterSignups } from "@/lib/store";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default async function AdminNewsletterPage() {
  const newsletter = await getNewsletterSignups();

  return (
    <>
      <AdminPageHeader
        title="Newsletter"
        description={`${newsletter.length} signup${newsletter.length === 1 ? "" : "s"} total`}
      />

      {newsletter.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <p className="text-sm text-slate-500">No signups yet.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-left">
              <tr>
                <th className="px-5 py-3 font-medium text-slate-500">Email</th>
                <th className="px-5 py-3 font-medium text-slate-500">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {newsletter.map((entry) => (
                <tr key={entry.email} className="hover:bg-slate-50/60">
                  <td className="px-5 py-3.5 font-medium text-slate-900">{entry.email}</td>
                  <td className="px-5 py-3.5 text-slate-500">{formatDate(entry.subscribedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
