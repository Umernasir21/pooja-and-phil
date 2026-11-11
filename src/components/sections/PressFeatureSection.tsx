import { Container } from "@/components/ui/Container";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";

export function PressFeatureSection() {
  return (
    <section className="bg-paper py-16 sm:py-20" aria-label="Press feature">
      <Container className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">
          Press &amp; Podcast
        </span>
        <h2 className="mt-2 font-serif-display text-2xl sm:text-3xl font-medium text-ink">
          Featured on The Spotlight Network
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/70">
          Bansi Pattni and Pooja and Phil were featured by The Spotlight
          Network. Watch the segment below.
        </p>
        <div className="mt-6">
          <YouTubeEmbed
            videoId="Fxw8vj4kWMA"
            title="The Spotlight Network on Pooja and Phil by Bansi Pattni"
          />
        </div>
        <p className="mt-3 text-sm text-ink/50">
          &ldquo;The Spotlight Network on Pooja and Phil by Bansi Pattni&rdquo; &middot;{" "}
          <a
            href="https://www.youtube.com/@TheSpotlightNetwork"
            target="_blank"
            rel="noreferrer noopener"
            className="text-orange underline underline-offset-4 hover:text-rust"
          >
            The Spotlight Network
          </a>{" "}
          on YouTube.
        </p>
      </Container>
    </section>
  );
}
