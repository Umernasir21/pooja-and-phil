import Link from "next/link";
import { nav, site } from "@/content/site";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-espresso text-cream border-t border-orange/40 print:hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center gap-5">
        <Link
          href="/"
          className="font-serif-display text-base sm:text-lg font-bold uppercase tracking-[0.25em] text-cream"
        >
          {site.name}
        </Link>
        <span className="h-px w-10 bg-saffron/70" aria-hidden="true" />

        <div className="flex flex-col items-center gap-2 w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
            Stay in the loop
          </p>
          <NewsletterSignup />
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wide text-cream/55 hover:text-saffron transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-cream/40 pt-1">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
