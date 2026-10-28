import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

export function HeroSection() {
 return <section className="reader-hero" aria-label="Introduction">
  <Container className="reader-hero-grid" maxWidth="max-w-[1680px]">
   <div className="reader-hero-copy">
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">{hero.eyebrow}</span>
    <h1 className="font-serif-display">{hero.headline.map(line=><span key={line.text} className={line.italic ? "block italic" : "block"}>{line.text}</span>)}</h1>
    <div className="h-[3px] w-12 bg-orange" aria-hidden="true" />
    <p className="font-serif-display text-lg leading-relaxed text-ink/75">{hero.support.map(line=><span className="block" key={line}>{line}</span>)}</p>
    <div className="flex flex-wrap gap-3"><Button href="/the-book" variant="primary">Discover the Book</Button><Button href="/trailer" variant="secondary">Watch the Trailer</Button></div>
   </div>
   <div className="reader-hero-art" aria-label="Pooja, Phil and the novel">
    <Image src="/images/characters/pooja-transparent.png" alt="Pooja" width={1089} height={1444} priority sizes="(max-width: 767px) 42vw, 24vw" className="hero-pooja" />
    <Image src="/images/characters/phil-transparent.png" alt="Phil" width={980} height={1605} priority sizes="(max-width: 767px) 42vw, 24vw" className="hero-phil" />
    <Image src="/images/books/book-front-premium.png" alt="Pooja and Phil by Bansi Pattni" width={1012} height={1554} priority sizes="(max-width: 767px) 25vw, 15vw" className="hero-book" />
   </div>
  </Container>
 </section>;
}
