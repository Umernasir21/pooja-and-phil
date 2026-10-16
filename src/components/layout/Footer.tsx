import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-espresso text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url(/images/backgrounds/07-footer-espresso.png)" }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 py-14 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <Link href="/" aria-label="Pooja and Phil — home" className="shrink-0">
              <Image
                src="/images/elements/wordmark-ivory.png"
                alt="Pooja and Phil"
                width={220}
                height={22}
                className="h-6 w-auto"
              />
            </Link>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-wide text-cream/80 hover:text-saffron transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="h-px w-full bg-cream/15" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-cream/60">
            <p>
              &copy; {year} {site.name}. All rights reserved.
            </p>
            <a
              href="https://www.instagram.com/bansi_pattni/"
              className="hover:text-saffron transition-colors"
              target="_blank"
              rel="noreferrer noopener"
            >
              @bansi_pattni on Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
