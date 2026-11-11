import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  if (!isValidSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 lg:grid lg:grid-cols-[15rem_1fr]">
      <aside className="sticky top-0 z-40 flex flex-col border-b border-slate-200 bg-white lg:h-screen lg:border-b-0 lg:border-r">
        <Link href="/admin" className="flex items-center gap-2.5 border-b border-slate-200 px-5 py-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-orange font-serif-display text-sm font-semibold text-cream">
            BP
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">Bansi Pattni</span>
            <span className="text-xs text-slate-400">Admin</span>
          </span>
        </Link>

        <div className="lg:flex-1 lg:overflow-y-auto">
          <AdminSidebar />
        </div>

        <div className="hidden flex-col gap-1 border-t border-slate-200 p-3 lg:flex">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            View site <span aria-hidden="true">↗</span>
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <div className="min-w-0">
        <main className="mx-auto w-full max-w-[72rem] px-4 pb-20 pt-8 sm:px-6 lg:px-10 lg:pt-10">
          {children}
        </main>
      </div>
    </div>
  );
}
