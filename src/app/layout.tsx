import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
