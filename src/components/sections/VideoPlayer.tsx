"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export function VideoPlayer({
  videoSrc,
  captionsSrc,
  posterSrc,
  title,
}: {
  videoSrc: string | null;
  captionsSrc: string | null;
  posterSrc: string;
  title: string;
}) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!videoSrc) {
    return (
      <div className="relative overflow-hidden rounded-sm shadow-2xl">
        <Image
          src={posterSrc}
          alt={`${title} — trailer poster`}
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/55 px-6 text-center">
          <span className="font-serif-display text-2xl text-cream">
            Trailer coming soon
          </span>
          <p className="max-w-sm text-sm text-cream/80">
            The official trailer for {title} is in production. Check back
            soon for a first look.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm shadow-2xl">
      {!started ? (
        <button
          type="button"
          onClick={() => {
            setStarted(true);
            requestAnimationFrame(() => videoRef.current?.play());
          }}
          className="group relative block w-full"
          aria-label={`Play trailer for ${title}`}
        >
          <Image
            src={posterSrc}
            alt=""
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/35">
            <Image
              src="/images/elements/play-ivory.png"
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
              className="h-20 w-20 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          className="h-auto w-full"
          controls
          playsInline
          preload="none"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          {captionsSrc ? (
            <track kind="captions" src={captionsSrc} srcLang="en" label="English" default />
          ) : null}
        </video>
      )}
    </div>
  );
}
