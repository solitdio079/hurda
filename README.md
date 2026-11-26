# Customer Order — Kastamonu Hurdacı

Turkish scrap metal dealer website, built with React 19 and React Router 8.5.3 framework mode. Nine pages are pre-rendered into crawlable HTML. This is a static Netlify deployment; no application server or database is required.

## Run

Use Node 24, then `npm ci`, `npm run dev`. Validate with `npm run typecheck` and `npm run build`.

## Deploy to Netlify

Import this directory as a Git repository in Netlify. The checked-in `netlify.toml` selects `npm run build` and `build/client`. Alternatively, upload the contents of `build/client` using Netlify's manual deploy flow. The static HTML files handle direct links; missing URLs return the real 404 page. No catch-all 200 rewrite is needed.

Add `kastamonuhurdacı.com` in Netlify Domain management and follow the DNS records Netlify provides at your domain registrar. Use the Unicode spelling or its equivalent ASCII/Punycode hostname reported by Netlify. Choose the root domain as primary and redirect the www alternative. Wait for DNS verification and HTTPS issuance. No DNS records have been modified by this project.

## Business content

Phone and WhatsApp: **0542 558 06 51**, supplied by the owner. Shared configuration is in `app/data.ts`. No street address, opening hours, reviews, years of experience or certifications have been invented. The visible brand is Kastamonu Hurdacı, and the project name is Customer Order. Update business name, address and service claims with verified details before launch. The WhatsApp form prepares a message locally; the visitor reviews it and sends it in WhatsApp. It does not store submissions.

## SEO launch work

The site includes Turkish titles/descriptions, self-canonical URLs, social metadata, descriptive headings, internal links, Organization JSON-LD, a sitemap, robots.txt and pre-rendered service pages. After the domain is live:

- Verify the domain in Google Search Console and submit `/sitemap.xml`.
- Create or verify a Google Business Profile with the real business name, correct phone and actual service area. Hide a private address if customers are not served there.
- Add verified address/business details to the site and then expand structured data to LocalBusiness if appropriate.
- Add genuine business photos and obtain real customer reviews; keep local business listings consistent.
- Monitor indexing, local search queries, calls and Core Web Vitals. Update content with genuinely useful business information.

No ranking is guaranteed. Buying an exact-match domain does not guarantee first place. Search visibility also depends on competition, business prominence, links, relevance and local search proximity.

Reference design: https://demo.templatemonster.com/demo/357429.html — layout inspiration only, implemented from scratch. Content topics: https://hurdacikastamonu.com/ — original Turkish copy, not a reproduction. Logo is original vector artwork in `public/logo.svg` and `public/favicon.svg`. UI mark uses the Lucide recycling icon (ISC license, installed package).

## Stock photography

Images are representative stock photographs, not photographs of this business. Pexels license: https://www.pexels.com/license/ . Downloaded and resized for this build:

- Hero: Franziska Leimkühler, https://www.pexels.com/photo/metal-junkyard-under-the-sky-10628555/
- Copper: Alex Tepetidis, https://www.pexels.com/photo/close-up-photo-of-copper-wires-5279317/
- Cable: Nic Wood, https://www.pexels.com/photo/copper-wire-28286039/
- Iron: Alex Tepetidis, https://www.pexels.com/photo/monochrome-photo-of-metal-scraps-5279328/
- Mixed metal: Artur Stec, https://www.pexels.com/photo/close-up-of-metal-objects-20423571/
- Copper material detail: Patrycja Grobelny, https://www.pexels.com/photo/brown-and-white-rope-on-brown-wooden-surface-11133641/
- Scrap yard: Tom Fisk, https://www.pexels.com/photo/a-close-up-shot-of-a-pile-of-scrap-9742093/

Typography: Manrope and Barlow Condensed via Google Fonts (OFL). No analytics or advertising trackers are installed.
