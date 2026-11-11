"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeletePostButton({ slug, title }: { slug: string; title: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="text-xs font-semibold text-ink/50 hover:text-rust"
      >
        Delete
      </button>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className="text-ink/70">Delete &ldquo;{title}&rdquo;?</span>
      <button
        type="button"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          await fetch(`/api/admin/blog/${slug}`, { method: "DELETE" });
          router.push("/admin");
          router.refresh();
        }}
        className="font-semibold text-rust hover:underline"
      >
        {busy ? "Deleting…" : "Confirm"}
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="font-semibold text-ink/50 hover:text-ink"
      >
        Cancel
      </button>
    </span>
  );
}
