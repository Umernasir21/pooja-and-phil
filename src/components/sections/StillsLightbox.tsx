"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function StillsLightbox({
  images,
  title,
}: {
  images: { src: string; label: string }[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    const i = openIndex;
    setOpenIndex(null);
    if (i !== null) triggerRefs.current[i]?.focus();
  };

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-video overflow-hidden rounded-sm focus-visible:outline-3 focus-visible:outline-orange"
            aria-label={`View ${img.label} larger`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors" />
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${images[openIndex].label} — ${title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream text-sm font-semibold uppercase tracking-wide border border-cream/40 rounded-sm px-4 py-2 hover:border-saffron hover:text-saffron focus-visible:outline-3 focus-visible:outline-saffron"
          >
            Close
          </button>
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].label}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-sm">
            {images[openIndex].label} &middot; {openIndex + 1} of {images.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
