"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { headerNav, nav } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ivory/97 backdrop-blur border-b border-ink/10">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 font-serif-display text-lg sm:text-xl font-bold uppercase tracking-[0.12em] text-ink"
          aria-label="Bansi Pattni — home"
        >
          Bansi Pattni
        </Link>

        <nav className="hidden sm:flex items-center gap-7" aria-label="Primary">
          {headerNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.95rem] font-medium transition-colors ${
                  active ? "text-orange" : "text-ink/75 hover:text-orange"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/the-book"
          className="hidden sm:inline-flex shrink-0 items-center justify-center rounded-md bg-orange px-5 py-2.5 text-[0.85rem] font-semibold text-cream transition-colors hover:bg-rust"
        >
          Discover the Book →
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="sm:hidden inline-flex flex-col gap-1.5 p-2"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="sm:hidden border-t border-ink/10 bg-ivory"
      >
        <nav className="flex flex-col py-2" aria-label="Primary, mobile">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-6 py-3 text-base font-semibold uppercase tracking-wide ${
                  active ? "text-orange" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
