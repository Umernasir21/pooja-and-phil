import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Author Bansi Pattni",
  description:
    "Get in touch with Bansi Pattni, author of Pooja and Phil, for questions about the book, press enquiries, or just to say hello.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Author Bansi Pattni",
    description: "Get in touch with Bansi Pattni, author of Pooja and Phil.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="Questions about the book, press enquiries, or just want to say hello — send a message below."
        background="/images/backgrounds/05-author-ivory-paper.png"
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container className="max-w-2xl">
          <ContactForm />

          <p className="mt-10 text-sm text-ink/50 border-t border-ink/10 pt-6">
            Prefer email? Reach us directly at{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-orange underline underline-offset-4 hover:text-rust"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
