import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
export function EditorialBanner({image,theme,eyebrow,heading,description,action,objectPosition="center",mobileObjectPosition="85% center",foreground}:{image:string;theme:"light"|"dark";eyebrow?:string;heading:string;description?:string;action?:ReactNode;objectPosition?:string;mobileObjectPosition?:string;foreground?:ReactNode}){
 const style={"--banner-image":`url("${image}")`,"--banner-position":objectPosition,"--banner-mobile-position":mobileObjectPosition} as CSSProperties;
 return <section className={`reader-banner ${theme==="dark"?"reader-banner-dark":""}`} style={style} aria-label={heading}>
 <Container className="reader-banner-grid" maxWidth="max-w-[1680px]">
 <div className="reader-banner-copy">
 {eyebrow&&<span className="text-xs uppercase tracking-[0.2em] font-semibold">{eyebrow}</span>}
 <h1 className="font-serif-display text-4xl md:text-5xl font-bold leading-tight">{heading}</h1>
 {description&&<p className="text-base md:text-lg leading-relaxed opacity-85">{description}</p>}
 {action}
 </div>
 <div className={`reader-banner-art ${foreground?"has-foreground":""}`}>{foreground}</div>
 </Container></section>;
}
