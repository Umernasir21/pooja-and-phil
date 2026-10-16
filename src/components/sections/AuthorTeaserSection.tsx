import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { authorBio } from "@/content/site";

export function AuthorTeaserSection() {
  return (
    <section className="relative bg-paper" aria-label="About the author">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url(/images/backgrounds/05-author-ivory-paper.png)" }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative h-72 w-56 sm:h-80 sm:w-64 overflow-hidden rounded-sm shadow-xl ring-4 ring-ivory">
              <Image
                src="/images/author/bansi-pattni.png"
                alt="Bansi Pattni, author of Pooja and Phil"
                fill
                sizes="(min-width: 640px) 256px, 224px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <SectionHeading eyebrow="The Author" title="About Bansi Pattni" />
            <p className="text-lg leading-relaxed text-ink/75 max-w-2xl">
              {authorBio.short}
            </p>
            <div className="pt-2">
              <Button href="/about" variant="primary">
                About the Author
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
