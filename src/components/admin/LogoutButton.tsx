"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-sm border border-ink/25 px-4 py-2 text-sm font-semibold text-ink/70 hover:border-orange hover:text-orange transition-colors"
    >
      Sign Out
    </button>
  );
}
