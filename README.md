# bits&bytes Bhubaneswar

A local, teen-led chapter website for the national bits&bytes network, designed for `bhubaneswar.bitsnbytes.org`. Built with Next.js App Router, TypeScript, Tailwind CSS v4, and locally bundled IBM Plex Mono and Noto Sans Oriya fonts.

## Run locally

Use Node.js 22 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The dev server binds to all interfaces so device testing on your local network is possible.

## Validate and build

```sh
npm run typecheck
npm run build
```

The build creates the complete static website in `out/`. It includes `robots.txt`, `sitemap.xml`, and the custom favicon. All images and fonts are local. No database, API keys, forms, or backend services are required. `next start` is not used with static export.

## Deploy and configure the domain

- **Vercel:** import this folder as the project root, use the Next.js preset, run `npm run build`, and use `out` as the output directory for this static export. Add `bhubaneswar.bitsnbytes.org` in the domain settings, then follow Vercel's displayed DNS instructions with the domain administrator.
- **Other static hosting:** publish the contents of `out/`. Serve `index.html` for directory routes and `404.html` for unknown paths. The site uses trailing slashes.
- **Sites preview:** hosting configuration is managed separately by the parent workflow. `out` is the static hosting directory. Preserve the existing `.openai/hosting.json` if present.

The canonical domain, sitemap, and social metadata intentionally use `https://bhubaneswar.bitsnbytes.org`, including on temporary preview domains. Publishing a preview does not configure the final custom domain or DNS.

## Edit content

Edit `src/lib/site-config.ts` for community links, navigation, FAQ, canonical domain, and local gathering date/venue. Editorial copy and activities are in `src/app/page.tsx`; design tokens and responsive layouts are in `src/app/globals.css`.

No local event date or venue has been confirmed. The gathering is clearly marked **In the works**, with the date and venue **To be announced**. Update these only when details are confirmed. The community CTA uses the verified **national** Discord invitation `https://discord.gg/rjqPfwKKTE` and asks visitors to introduce themselves as from Bhubaneswar. Replace it with a chapter invitation only if an official one is supplied. No organizer identities, project results, attendance statistics, or local member counts are fabricated.

The mobile navigation closes on link selection and Escape, with Escape returning focus to its button. FAQs use native keyboard-accessible `details`/`summary`. Motion respects `prefers-reduced-motion`. The page uses semantic sections, a skip link, visible focus styles, and descriptive image text.

## Asset attribution

- `public/assets/konark-wheel.jpg`: **Wheel in konark sun temple**, by **Hemaquen**, photographed September 14, 2021. Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wheel_in_konark_sun_temple.jpg). Licensed [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). Original JPEG is included unchanged; CSS crops and adjusts sepia, saturation, contrast, and brightness for display. Attribution and license links also appear in the visible site footer. Any redistributed adaptation of the photograph remains under CC BY-SA 4.0; this attribution does not imply photographer endorsement.
- `public/assets/bits-and-bytes.svg`: original bits&bytes logo downloaded from [the official site](https://gobitsnbytes.org/logo.svg), shown unchanged on a dark tile to identify the affiliated chapter. Ownership remains with bits&bytes.
- IBM Plex Mono and Noto Sans Oriya are bundled through Fontsource npm packages. Their upstream font licenses are retained within installed packages.
- The favicon and small geometric textile-inspired accents are original schematic graphics. They do not reproduce a historical textile or depict temple architecture.

## Research and design context

- [bits&bytes main site](https://gobitsnbytes.org/)
- [Local forks and Bhubaneswar listing](https://gobitsnbytes.org/fork)
- [National joining and contributor context](https://gobitsnbytes.org/join)
- [Official brand press kit](https://gobitsnbytes.org/press)
- [Odisha Tourism: Konark](https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples-monuments/konark.html)
- [Vercel font resources](https://vercel.com/font) and [Geist typography](https://vercel.com/geist/typography)

The design brings Odisha's architecture and attention to craft into a warm, ruled, monospace field-journal layout. Vermilion, sandstone paper, charcoal, oversized typography, quiet halftone texture, numbered sections, and a small official logo retain a connection to the national site's expressive builder culture.
