# AFI Technologies

Rebuild of [afitechnologies.co.in](https://afitechnologies.co.in) — the website of a
membrane keypad manufacturer in Kondhwa, Pune.

Static site built with Astro. The homepage's scroll choreography is pure CSS
scroll-driven animation; the only scripts on the site are the mobile navigation
toggle and the quote form's validation.

## Running it

```bash
npm install
npm run dev        # local dev server
npm run build      # static output to dist/
npm run preview    # serve the built site
```

## How it is organised

```
src/
  data/            every fact about the company lives here, once
    site.ts        name, address, contacts, ISO certificate, headline figures
    products.ts    the six product lines; slugs reproduce the old WordPress URLs
    specs.ts       technical specifications
    industries.ts  sectors served
    story.ts       the homepage narrative
  components/      header, footer, logo, CTA, and the drawn SVG artwork
  layouts/Base.astro
  pages/           one file per route
public/
  .htaccess        cache + security headers, applied by Hostinger; Vercel ignores it
```

Three rules worth keeping:

1. **Facts are imported, never retyped.** The old site said "over 12 years" in
   seven places and "over 15 years" in five. Anything a visitor reads about the
   company comes from `src/data/site.ts`.
2. **URLs are frozen.** Product slugs match the old WordPress paths exactly, so
   no inbound link or search ranking breaks in the migration. `trailingSlash` is
   set to `always` for the same reason.
3. **Test scripts under the real security headers.** `.htaccess` sends
   `script-src 'self'`, which blocks inline scripts, and `npm run preview` does
   not send it. `astro.config.mjs` keeps every script in its own file for this
   reason: inlined, the mobile menu stopped working on Hostinger and nowhere else.

## Accessibility and performance budget

Checked on every page at 1440px and 390px:

| | |
|---|---|
| Contrast failures | 0 |
| Tap targets under 24px | 0 |
| Horizontal page scroll | none |
| Runtime JavaScript | 2 small files |

All scroll animation sits behind `@supports (animation-timeline: view())` **and**
`prefers-reduced-motion: no-preference`. Without either, the page renders
complete and static — the tall pinned sections collapse rather than becoming
dead scroll space. The pinned sections also need 600px of height, so a phone in
landscape gets the same stacked layout as one held upright.

## Still needs the client to confirm

Values marked `VERIFY` in `src/data/site.ts`:

- **12 or 15 years?** The old site claimed both. Currently 15+.
- **Activation force for non-tactile** was published as `125–250 MGS`
  (milligrams). Corrected to grams in `src/data/specs.ts`; needs an engineer to
  confirm.
- **Team size.** The site says "20+ on the technical team"; the company's
  IndiaMART profile says "Upto 10 People".
- **Email.** `afitechnologies1@gmail.com` — a domain address reads better on a
  quotation.
- **LinkedIn** currently points at a personal profile, not a company page.
- **No logo exists.** Checked the old site, its favicon (the stock WordPress
  "W"), YouTube, IndiaMART, ExportersIndia and the ISO certificate. The header
  and footer render a wordmark until real artwork arrives — see
  `src/components/Logo.astro` for the drop-in point.

## Photography

Three process photographs are frames from AFI's own YouTube videos and are low
resolution. Four process steps have no photograph at all and use technical
drawings instead (`src/components/StepArt.astro`), clearly marked to be replaced.
Product cutouts top out around 700px, so they are displayed at sizes that do not
upscale.

A reshoot — the products on a consistent background, plus the drawing desk, the
die-cutting press and a lamination press closing — is the single biggest visual
upgrade still available.

## Not in this repo

`_audit/` holds the analysis of the previous site: scraped pages, screenshots
and measurements. It is kept out of version control deliberately — working
notes rather than site source, and around 7 MB of it.
