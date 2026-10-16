import Image from "next/image";
import { homeCharacters } from "@/content/site";

function ConnectorLine() {
  return (
    <svg
      viewBox="0 0 220 60"
      className="hidden sm:block absolute left-1/2 top-1/2 h-10 w-36 lg:w-44 -translate-x-1/2 -translate-y-1/2 text-saffron/70"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10 C 70 10, 70 50, 110 30 C 150 10, 150 50, 216 50"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CharactersSection() {
  return (
    <section className="relative bg-espresso overflow-hidden" aria-label="Meet the characters">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/backgrounds/03-characters-espresso.png)" }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="pt-8 sm:pt-10 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
            {homeCharacters.eyebrow}
          </span>
          <span className="h-px w-10 bg-saffron/60" aria-hidden="true" />
        </div>

        {/* Desktop / tablet: layered absolute composition matching the reference crop */}
        <div className="hidden sm:block relative mt-6 aspect-[788/190] lg:aspect-[788/170] w-full max-h-[260px]">
          <ConnectorLine />

          <div className="absolute inset-y-0 left-[2%] w-[18%]">
            <Image
              src="/images/characters/pooja-transparent.png"
              alt="Pooja"
              fill
              sizes="20vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute left-[22%] top-1/2 -translate-y-1/2 w-[19%]">
            <h3 className="font-serif-display italic font-bold text-saffron text-2xl lg:text-3xl">
              {homeCharacters.pooja.name}
            </h3>
            <p className="mt-1 text-[0.8rem] lg:text-sm leading-snug text-cream/85">
              {homeCharacters.pooja.description}
            </p>
          </div>

          <div className="absolute inset-y-0 left-[57%] w-[18%]">
            <Image
              src="/images/characters/phil-transparent.png"
              alt="Phil"
              fill
              sizes="20vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[19%] text-right">
            <h3 className="font-serif-display italic font-bold text-saffron text-2xl lg:text-3xl">
              {homeCharacters.phil.name}
            </h3>
            <p className="mt-1 text-[0.8rem] lg:text-sm leading-snug text-cream/85">
              {homeCharacters.phil.description}
            </p>
          </div>
        </div>

        {/* Mobile: stacked rows */}
        <div className="sm:hidden mt-6 flex flex-col gap-6 pb-8 px-6">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-20 shrink-0 overflow-hidden">
              <Image
                src="/images/characters/pooja-transparent.png"
                alt="Pooja"
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-serif-display italic font-bold text-saffron text-xl">
                {homeCharacters.pooja.name}
              </h3>
              <p className="mt-1 text-sm leading-snug text-cream/85">
                {homeCharacters.pooja.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-20 shrink-0 overflow-hidden">
              <Image
                src="/images/characters/phil-transparent.png"
                alt="Phil"
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-serif-display italic font-bold text-saffron text-xl">
                {homeCharacters.phil.name}
              </h3>
              <p className="mt-1 text-sm leading-snug text-cream/85">
                {homeCharacters.phil.description}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block h-8 lg:h-10" aria-hidden="true" />
      </div>
    </section>
  );
}
