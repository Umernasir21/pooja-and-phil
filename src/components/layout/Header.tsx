"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/content/site";
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
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-ink/10">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Pooja and Phil — home"
        >
          <Image
            src="/images/elements/wordmark-orange.png"
            alt="Pooja and Phil"
            width={220}
            height={22}
            priority
            className="h-6 sm:h-7 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-orange" : "text-ink/80 hover:text-orange"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden inline-flex flex-col gap-1.5 p-2"
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
        className="lg:hidden border-t border-ink/10 bg-ivory"
      >
        <nav
          className="flex flex-col py-2"
          aria-label="Primary, mobile"
        >
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
