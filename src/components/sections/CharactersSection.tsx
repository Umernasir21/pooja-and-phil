import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { homeCharacters } from "@/content/site";
export function CharactersSection(){
 return <section className="reader-characters" aria-label="Meet the characters">
 <Container>
 <div className="text-center"><span className="text-xs uppercase tracking-[0.25em] text-saffron">{homeCharacters.eyebrow}</span><h2 className="font-serif-display text-3xl sm:text-4xl mt-3 text-cream">Two lives. One unexpected friendship.</h2></div>
 <div className="reader-character-grid">{(["pooja","phil"] as const).map(key=><article className="reader-character" key={key}>
 <Image src={"/images/characters/"+key+"-transparent.png"} alt={homeCharacters[key].name} width={key==="pooja"?1089:980} height={key==="pooja"?1444:1605} sizes="(max-width: 767px) 42vw, 240px" />
 <div><h3 className="font-serif-display text-3xl italic text-saffron">{homeCharacters[key].name}</h3><p className="mt-3 text-cream/85 leading-relaxed">{homeCharacters[key].description}</p></div>
 </article>)}</div>
 <div className="text-center mt-8"><Button href="/characters" variant="ghost-cream">Meet Pooja &amp; Phil</Button></div>
 </Container></section>;
}
