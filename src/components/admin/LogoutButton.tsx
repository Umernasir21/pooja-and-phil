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
      className="flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-rust"
    >
      Sign out <span aria-hidden="true">→</span>
    </button>
  );
}
