# CLAUDE.md - Sky Lavelle Website

Project root: `/Users/skylavelle/Claude/Code/Sky Lavelle`
Live URL: https://skylavelle.com.au
Vercel project: `lavelle-com-au` under `sky-lavelles-projects`

## Tech stack

- **Astro 5** (static output, Content Layer API for articles)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode via `astro/tsconfigs/strict`
- **MDX** - articles in `src/content/articles/` with Zod schema in `src/content/config.ts`
- **Pagefind** - search index built post-build (`npm run pagefind`); only indexes pages with `data-pagefind-body`
- **Lemon Squeezy** - checkout overlay via `lemon.js`; loaded only on pages with buy buttons via `<script slot="head">`
- **Web3Forms** - contact form handler (key: `dc7b04fa-6e86-415e-8d01-1fe332b4bf21`)
- **Google Analytics** - GA4, injected in Layout when `PUBLIC_GA_ID` is set
- **@fontsource-variable/inter** - self-hosted Inter Variable font, imported in `global.css`

## Key commands

```bash
npm run dev          # local dev server at localhost:4321
npm run build        # astro build + pagefind index
npm run pagefind     # run pagefind alone (needs dist/ to exist)
npm run lint         # eslint
npm run format       # prettier
vercel --prod --yes  # deploy to production (run from project root)
```

## Directory structure

```
src/
  assets/images/      # hero images (optimised by Astro at build)
  components/         # Astro components (see list below)
  config/site.ts      # ALL env var reads + site config - import from here, not import.meta.env
  content/
    articles/         # MDX articles
    config.ts         # Zod content collection schema
  layouts/
    Layout.astro      # base layout: head, header, main, footer, GA, analytics delegation
  pages/              # file-based routing
  styles/
    global.css        # Tailwind v4 theme + Inter Variable import
  utils/
    analytics.ts      # typed GA4 event utility
public/
  favicon.svg
  og-default.png      # OG fallback image
  robots.txt
docs/
  commercial-funnel.md
  content-strategy.md
```

## Active components

| Component | Used by |
|---|---|
| `ArticleCard.astro` | articles/index, index |
| `BuyButton.astro` | template product pages, templates/index |
| `DocumentMockup.astro` | index, templates/*, about |
| `Footer.astro` | Layout |
| `Header.astro` | Layout |
| `Hero.astro` | service detail pages, contact, newsletter, free-tools |
| `SearchBox.astro` | articles/index |
| `SEO.astro` | Layout |

## Config and environment

**Always read env vars from `src/config/site.ts`**, never directly from `import.meta.env` in pages. This keeps all config in one place.

```typescript
import { site, products, newsletterUrl, lsEnabled } from '../config/site';
```

**Current env vars** (set in `.env` and Vercel project settings):

| Variable | Status | Notes |
|---|---|---|
| `PUBLIC_GA_ID` | Set | `G-RLSZQESRGS` |
| `PUBLIC_SITE_URL` | Set | `https://skylavelle.com.au` |
| `PUBLIC_BEEHIIV_PUBLICATION_ID` | Empty | Not yet configured |
| `PUBLIC_BEEHIIV_SIGNUP_URL` | Empty | Set this when Beehiiv goes live |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK` | Set | `https://skylavelle.lemonsqueezy.com/buy/1023963` |
| `PUBLIC_LS_BUSINESS_CASE_PACK` | Set | `https://skylavelle.lemonsqueezy.com/buy/1023994` |
| `PUBLIC_LS_PROCUREMENT_PACK` | Set | `https://skylavelle.lemonsqueezy.com/buy/1024000` |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Set | `https://skylavelle.lemonsqueezy.com/buy/1024002` |

## Adding content

### New article
1. Create `src/content/articles/slug.mdx`
2. Add required frontmatter (see `src/content/config.ts` for schema)
3. Run `npm run build` - the article auto-appears in listing and RSS

### New product/template page
1. Create `src/pages/templates/product-name.astro`
2. Import `BuyButton` and add `<script slot="head" src="https://assets.lemonsqueezy.com/lemon.js" defer></script>`
3. Add checkout URL env var and update `src/config/site.ts`

### Activating Beehiiv
Set `PUBLIC_BEEHIIV_SIGNUP_URL` in `.env` and Vercel. All newsletter CTAs auto-update.

### Activating a new Lemon Squeezy product
1. Add env var to `.env` and Vercel
2. Add to `products` object in `src/config/site.ts`
3. Update relevant product page to read the new var

## Analytics events

GA4 events fire via data attributes - no JS changes needed for most tracking:

```html
<a href="..." data-ga-event="product_buy_click" data-ga-label="Recovery Pack">
```

| Event | Where fired |
|---|---|
| `newsletter_signup_click` | Newsletter CTAs |
| `resource_download_click` | Free Tools CTAs |
| `product_view` | Product page load (inline script) |
| `product_buy_click` | Buy Now buttons |
| `contact_form_submit` | Contact form success |
| `advisory_offer_click` | Advisory review cards |
| `start_here_card_click` | Start Here page cards |

## Lemon Squeezy checkout

The `lemon.js` overlay script is loaded **only** on pages that use buy buttons (via `<script slot="head">`):
- `src/pages/index.astro`
- `src/pages/templates/index.astro`
- `src/pages/templates/project-recovery-pack.astro`
- `src/pages/templates/enterprise-technology-business-case-pack.astro`
- `src/pages/templates/procurement-evaluation-pack.astro`
- `src/pages/templates/steering-committee-reporting-pack.astro`

All buy links need `class="lemonsqueezy-button"` for the overlay to trigger.

## Deployment

```bash
vercel --prod --yes
```

Vercel reads `vercel.json` for cache headers. After any Lemon Squeezy or Beehiiv config change, also update Vercel env vars:

```bash
echo "value" | vercel env add VAR_NAME production
```

## Thank-you pages

Configure redirect URLs in each service after deployment:
- Lemon Squeezy: set redirect to `https://skylavelle.com.au/thank-you/product/`
- Beehiiv: set redirect to `https://skylavelle.com.au/thank-you/newsletter/`
- Web3Forms contact: already redirects to `/thank-you/contact/`

## Writing rules

- Australian English
- No em dashes (use spaced hyphens where a dash is needed)
- No "coming soon" text - use actionable fallbacks
- No fake testimonials
- Direct, professional, senior tone - no startup language or corporate filler
