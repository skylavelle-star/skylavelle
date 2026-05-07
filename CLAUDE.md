# CLAUDE.md - Sky Lavelle Website

Project root: `/Users/skylavelle/Claude/Portfolio/Sky Lavelle`
Live URL: https://skylavelle.com.au
Vercel project: `skylavelle` under `sky-lavelles-projects`

## Tech stack

- **Astro 5** (static output, Content Layer API for articles)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode via `astro/tsconfigs/strict`
- **MDX** - articles in `src/content/articles/` with Zod schema in `src/content/config.ts`
- **Pagefind** - search index built post-build (`npm run pagefind`); only indexes pages with `data-pagefind-body`
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
  web-strategy.md
```

## Architecture note

Sky Lavelle is the personal brand and content site. All commerce (templates, free tools, paid products) lives on **lavelleptyltd.com.au**. URLs like `/templates/*` and `/free-tools` on this site 301-redirect to Lavelle Pty Ltd at the Vercel edge (see `vercel.json`). Do not add product or template pages here — add them to the Lavelle Pty Ltd project instead.

## Active components

| Component | Used by |
|---|---|
| `ArticleCard.astro` | articles/index, index |
| `Footer.astro` | Layout |
| `Header.astro` | Layout |
| `Hero.astro` | service detail pages, contact |
| `RelatedResourceCTA.astro` | article pages |
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
| `PUBLIC_LS_PROJECT_RECOVERY_PACK` | Legacy | No longer read by source; commerce moved to Lavelle Pty Ltd |
| `PUBLIC_LS_BUSINESS_CASE_PACK` | Legacy | No longer read by source; commerce moved to Lavelle Pty Ltd |
| `PUBLIC_LS_PROCUREMENT_PACK` | Legacy | No longer read by source; commerce moved to Lavelle Pty Ltd |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Legacy | No longer read by source; commerce moved to Lavelle Pty Ltd |

## Adding content

### New article
1. Create `src/content/articles/slug.mdx`
2. Add required frontmatter (see `src/content/config.ts` for schema)
3. Run `npm run build` - the article auto-appears in listing and RSS

### New product or template
Add it to the Lavelle Pty Ltd project, not here. If a marketing entry point is needed on Sky Lavelle, link out with an absolute `https://lavelleptyltd.com.au/...` URL.

### Activating Beehiiv
Set `PUBLIC_BEEHIIV_SIGNUP_URL` in `.env` and Vercel. All newsletter CTAs auto-update.

## Analytics events

GA4 events fire via data attributes - no JS changes needed for most tracking:

```html
<a href="..." data-ga-event="product_buy_click" data-ga-label="Recovery Pack">
```

| Event | Where fired |
|---|---|
| `newsletter_signup_click` | Newsletter CTAs (newsletter, index, article pages) |
| `resource_download_click` | Free-tool CTAs on article pages |
| `product_view` | Article-page product CTA exposure |
| `contact_form_submit` | Contact form success |
| `advisory_offer_click` | Advisory review cards (start-here, contact) |
| `start_here_card_click` | Start Here page cards |

## Deployment

**Pipeline:** Local → GitHub → Vercel → Live

| Step | Value |
|---|---|
| Local directory | `/Users/skylavelle/Claude/Portfolio/Sky Lavelle` |
| GitHub repo | `github.com/skylavelle-star/skylavelle` |
| Vercel project | `skylavelle` |
| Live site | `https://skylavelle.com.au` |

Deploy by committing changes and running `git push origin main`. Vercel builds and publishes automatically (~13s). Never use `vercel --prod --yes` — the GitHub integration handles all deploys.

Vercel reads `vercel.json` for cache headers and the cross-domain 301 redirects to Lavelle Pty Ltd. After any Beehiiv config change, also update Vercel env vars:

```bash
echo "value" | vercel env add VAR_NAME production
```

## Thank-you pages

Configure redirect URLs in each service after deployment:
- Beehiiv: set redirect to `https://skylavelle.com.au/thank-you/newsletter/`
- Web3Forms contact: already redirects to `/thank-you/contact/`

`/thank-you/product` is 301-redirected via `vercel.json` to the Lavelle Pty Ltd thank-you flow. `/thank-you/resource` and `/thank-you/newsletter` render locally and are noindexed.

## Writing rules

- Australian English
- No em dashes (use spaced hyphens where a dash is needed)
- No "coming soon" text - use actionable fallbacks
- No fake testimonials
- Direct, professional, senior tone - no startup language or corporate filler
