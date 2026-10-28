import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Theme = "light" | "dark";

export function EditorialBanner({
  image,
  theme,
  eyebrow,
  heading,
  description,
  action,
  objectPosition = "center",
  mobileObjectPosition,
  foreground,
  mobileForeground,
}: {
  image: string;
  theme: Theme;
  eyebrow?: string;
  heading: string;
  description?: string;
  action?: ReactNode;
  objectPosition?: string;
  mobileObjectPosition?: string;
  foreground?: ReactNode;
  /** Reserved-height artwork region shown below the mobile illustrated strip — e.g. character or book overlay sized for 390px. */
  mobileForeground?: ReactNode;
}) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "bg-espresso" : "bg-paper"}`}
      aria-label={heading}
    >
      {/* Desktop / tablet: full-bleed 3:1-ish banner */}
      <div className="hidden sm:block relative h-[340px] md:h-[400px] lg:h-[460px]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectPosition }}
          className="object-cover"
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-r from-espresso via-espresso/75 sm:via-espresso/55 to-transparent"
              : "bg-gradient-to-r from-paper via-paper/80 sm:via-paper/60 to-transparent"
          }`}
          aria-hidden="true"
        />

        {foreground}

        <Container className="relative z-10 h-full">
          <div className="flex h-full flex-col justify-center gap-4 max-w-[30rem]">
            {eyebrow ? (
              <span
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-saffron" : "text-rust"
                }`}
              >
                {eyebrow}
              </span>
            ) : null}
            <h1
              className={`font-serif-display font-bold leading-[1.05] text-4xl md:text-5xl ${
                isDark ? "text-cream" : "text-ink"
              }`}
            >
              {heading}
            </h1>
            {description ? (
              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-cream/80" : "text-ink/70"
                }`}
              >
                {description}
              </p>
            ) : null}
            {action}
          </div>
        </Container>
      </div>

      {/* Mobile: solid-background text first, short illustrated strip below */}
      <div className={`sm:hidden ${isDark ? "bg-espresso" : "bg-paper"}`}>
        <Container className="py-10 flex flex-col gap-3">
          {eyebrow ? (
            <span
              className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
                isDark ? "text-saffron" : "text-rust"
              }`}
            >
              {eyebrow}
            </span>
          ) : null}
          <h1
            className={`font-serif-display font-bold leading-[1.08] text-3xl ${
              isDark ? "text-cream" : "text-ink"
            }`}
          >
            {heading}
          </h1>
          {description ? (
            <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-cream/80" : "text-ink/70"}`}>
              {description}
            </p>
          ) : null}
          {action}
        </Container>
        <div className="relative h-[180px]">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: mobileObjectPosition ?? "85% center" }}
            className="object-cover"
          />
        </div>
        {mobileForeground ? (
          <div className="relative h-[220px] bg-paper/0">{mobileForeground}</div>
        ) : null}
      </div>
    </section>
  );
}
