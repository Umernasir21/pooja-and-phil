import { getContactMessages } from "@/lib/store";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default async function AdminContactPage() {
  const contact = await getContactMessages();
  const recent = [...contact].reverse();

  return (
    <>
      <AdminPageHeader
        title="Contact"
        description={`${contact.length} message${contact.length === 1 ? "" : "s"} total`}
      />

      {recent.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <p className="text-sm text-slate-500">No messages yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {recent.map((entry, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{entry.name}</p>
                  <a
                    href={`mailto:${entry.email}`}
                    className="text-sm text-orange underline underline-offset-2 hover:text-rust"
                  >
                    {entry.email}
                  </a>
                </div>
                <p className="shrink-0 text-xs text-slate-400">{formatDate(entry.submittedAt)}</p>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-slate-700">{entry.message}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
