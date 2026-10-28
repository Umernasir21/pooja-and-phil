# Pooja and Phil — Author Website

The official author website for *Pooja and Phil*, a debut novel by Bansi Pattni. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (theme tokens defined in `src/app/globals.css`)
- **next/font** for self-hosted, subset Google Fonts (Fraunces for display serif headings, Source Sans 3 for body text)
- **next/image**, backed by `sharp`, for responsive AVIF/WebP image delivery

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Production build

```bash
npm run build
npm start
```

`npm run build` runs the TypeScript check as part of the build — a failing type error fails the build. Run `npx tsc --noEmit` on its own for a faster standalone check, and `npm run lint` for ESLint.

## Project structure

```
src/
  app/                 Routes (App Router). Each folder under app/ is a page.
  components/
    layout/             Header, Footer
    sections/           Page-specific composed sections (hero, trailer player, etc.)
    ui/                 Small reusable primitives (Button, Container, SectionHeading, PageHeader)
  content/
    site.ts             All site copy as typed, centralized data — edit copy here, not inside components
public/
  images/               All production imagery, organized by category (backgrounds, characters, author, books, trailer, elements)
```

### Editing copy

Nearly all of the site's text lives in `src/content/site.ts` as typed constants (`synopsis`, `characters`, `authorBio`, `readingGuide`, `media`, etc.). Edit copy there rather than hunting through page components. See `CONTENT_SOURCE_NOTES.md` at the project root for where every factual claim on the site came from, and the spoiler policy that shaped it — read that file before changing any synopsis, character or reading-guide copy.

### Adding or swapping images

Place new images in `public/images/<category>/` and reference them with `next/image` (`src="/images/<category>/filename.png"`). Always set `width`/`height` (or use `fill` inside a sized relative container) so the browser can reserve layout space and avoid shift. See `ASSET_MAP.md` for what every current image is and where it's used.

## Deployment

This is a standard Next.js app and can be deployed anywhere Next.js is supported (a Node host, Vercel, or similar). It is **not** statically exported (`next export`) — it has server-side API routes (contact form, newsletter, admin dashboard) and relies on the Next.js image optimizer at request time, both of which need a real Node runtime.

**Deploying to Namecheap shared hosting:** see `DEPLOY.md` for the full cPanel/Passenger walkthrough — `server.js` and `next.config.mjs` (rather than `.ts`) exist specifically so this runs there without needing TypeScript at runtime.

Before going live, set the real production domain in `src/content/site.ts` (`site.domain`) — it feeds `metadataBase`, Open Graph URLs, `sitemap.xml` and `robots.txt`. Also set a real `ADMIN_PASSWORD` environment variable — see `LAUNCH_CHECKLIST.md`.

## What's outstanding

See `LAUNCH_CHECKLIST.md` for the genuine open items (trailer video file, retailer purchase links, full author bio, contact method) that were left out of this build because they weren't supplied, rather than guessed at.
