"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Overview", icon: GridIcon },
  { href: "/admin/blog", label: "Blog Posts", icon: DocIcon },
  { href: "/admin/newsletter", label: "Newsletter", icon: MailIcon },
  { href: "/admin/contact", label: "Contact", icon: ChatIcon },
  { href: "/admin/pricing", label: "Pricing", icon: TagIcon },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin sections" className="flex gap-1 overflow-x-auto px-2 py-2 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-3 lg:py-4">
      {items.map((item) => {
        const active =
          item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors lg:px-3.5 ${
              active
                ? "bg-orange/10 text-orange"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? "text-orange" : "text-slate-400"}`} />
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 2.75h6.5L16 7.25V16a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 16V4A1.25 1.25 0 0 1 5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 2.75V7h4.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 10.5h6M6.5 13.25h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.25 5.5 10 10.75l6.75-5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v7A1.5 1.5 0 0 1 15.5 13H9l-3.75 3.25a.4.4 0 0 1-.66-.3V13H4.5A1.5 1.5 0 0 1 3 11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.3 2.75h-3.1a1.5 1.5 0 0 0-1.06.44L2.86 7.5a1.5 1.5 0 0 0 0 2.12l7.52 7.52a1.5 1.5 0 0 0 2.12 0l4.62-4.62a1.5 1.5 0 0 0 0-2.12L10.6 3.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12.75" cy="7.25" r="1.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
