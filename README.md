# RR Packaging Company — website

Marketing site for **RR Packaging Company**, Hapur (U.P.) — flexible packaging
printing: laminated rolls, pouches, sachets and shrink sleeves.

Built with **Gatsby 5**, **three.js** (via react-three-fiber), **Framer Motion**
and animated SVG. Static output — deploy anywhere, no server needed.

---

## Quick start

```bash
npm install
npm run develop      # http://localhost:8000
```

```bash
npm run build        # static site -> ./public
npm run serve        # preview the production build on :9000
```

---

## Editing the content

**Almost everything the site says lives in one file: [`src/data/site.js`](src/data/site.js).**
Change it there, rebuild, and every page updates.

| What | Where in `site.js` |
|---|---|
| Company name, phones, email, address, hours | `company` |
| Headline numbers on the home page | `stats` |
| Menu items | `nav` |
| The 8 product formats (copy + specs) | `products` |
| The 6 industries | `industries` |
| Portfolio jobs and captions | `work` |
| Scrolling brand names | `brandNames` |
| The 6 production stages | `process` |
| "Why RR" points | `whyUs` |
| FAQ questions and answers | `faqs` |

Lines marked `// ⚠️ CONFIRM` should be checked with Avinash ji before launch.

### Swapping an image

Images live in `src/images/`:

- `src/images/gen/` — studio and plant photography (product mockups, machinery,
  industry stills)
- `src/images/work/` — real photographs of jobs off the shop floor
- `logo.png` — full lock-up · `mark.png` — emblem only (used in the nav and as
  the app icon)

Drop a new file in, keep the **same filename**, and it is picked up on the next
build. To point a product or industry at a different file, change its `image:`
key in `site.js` (the value is the filename without the extension).

---

## How the enquiry form works

There is **no backend and no third-party form service**. The contact form builds
a pre-filled message and hands it to WhatsApp (or the visitor's email client),
so enquiries land directly on the company phone — which is how RR's customers
already get in touch. Nothing is stored on the website.

The number used is `company.whatsapp` in `site.js`.

---

## Deploying

The build output is a plain static folder (`public/`). Any of these work with
zero configuration:

| Host | Setting |
|---|---|
| **Netlify** | build `npm run build`, publish `public` |
| **Vercel** | framework "Gatsby", it detects the rest |
| **Cloudflare Pages** | build `npm run build`, output `public` |

Before the first deploy, set the real domain in **two** places so canonical
URLs, the sitemap and social previews are correct:

1. `siteUrl` in [`gatsby-config.js`](gatsby-config.js)
2. the `Sitemap:` line in [`static/robots.txt`](static/robots.txt)

---

## Notes on the build

- **The 3D hero** (`src/components/three/`) loads only in the browser, only when
  WebGL is available, and is skipped entirely for visitors who ask for reduced
  motion. It pauses itself when scrolled out of view. Everyone else sees a
  photographic fallback, so the hero is never blank.
- **SEO** — every page sets its own title, description, canonical URL, Open
  Graph and Twitter tags, plus `LocalBusiness` structured data with the Hapur
  address and both phone numbers. `sitemap-index.xml` and `robots.txt` are
  generated on build.
- **Accessibility** — skip link, keyboard focus rings, labelled form fields,
  `aria-current` on the active nav item, and every animation honours
  `prefers-reduced-motion`.

---

## Before going live

- [ ] Confirm the proprietor name shown site-wide (`company.proprietor`). The
      flyer says **Avinash Kumar, Founder**; the older visiting card says
      **Ramakant Pandey, Proprietor**. Only Avinash Kumar is shown right now —
      set `company.partner.show` if both should appear.
- [ ] Confirm the full email address — the screenshot was cut off at
      `rrpackagingcompany@g…`, so it is assumed to be `@gmail.com`.
- [ ] Confirm the working hours (currently Mon–Sat, 9:30 am – 7:00 pm).
- [ ] Get written permission from the brand owners before publishing the
      **Our Work** photographs, or replace the brand names with generic
      descriptions. The packs are third-party trademarks; the page carries a
      disclaimer but permission is the safe route.
- [ ] Replace the placeholder capability claims in `products` (structures, spout
      sizes, colour counts) with what the plant actually runs.
