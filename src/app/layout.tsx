import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

const playfair = localFont({
 variable: "--font-playfair",
 src: [{path:"./fonts/playfair-normal.woff2",weight:"500 900",style:"normal"},{path:"./fonts/playfair-italic.woff2",weight:"500 900",style:"italic"}],
 display:"swap"
});
const sourceSans = localFont({
 variable:"--font-source-sans",
 src:"./fonts/source-sans-normal.woff2",
 weight:"400 700",
 display:"swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.bookTitle} | A Novel by ${site.name}`,
    template: `%s | ${site.bookTitle}`,
  },
  description:
    "Pooja and Phil, a debut novel by Bansi Pattni — the story of an unexpected friendship between a young British Asian dreamer and a guarded, self-made businessman.",
  openGraph: {
    title: `${site.bookTitle} | A Novel by ${site.name}`,
    description:
      "Different worlds. An unexpected friendship. Discover Pooja and Phil, a debut novel by Bansi Pattni.",
    siteName: site.bookTitle,
    type: "website",
    images: ["/images/books/book-cover-front.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.bookTitle} | A Novel by ${site.name}`,
    description: "Different worlds. An unexpected friendship.",
    images: ["/images/books/book-cover-front.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
