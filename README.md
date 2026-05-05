# Sky Lavelle

Production website for [skylavelle.com.au](https://skylavelle.com.au) - enterprise project management advisory, templates and resources.

## Tech stack

- [Astro 5](https://astro.build) - static site framework
- [Tailwind CSS v4](https://tailwindcss.com) - utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - type safety
- [MDX](https://mdxjs.com) - articles and content
- [Pagefind](https://pagefind.app) - static search
- [Zod](https://zod.dev) - content schema validation (via Astro content collections)

## Requirements

- Node.js 20 or higher
- npm 9 or higher

## Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the environment variables file and fill in your values:

```bash
cp .env.example .env
```

Environment variables:

| Variable | Description |
|---|---|
| `PUBLIC_GA_ID` | Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable analytics. |
| `PUBLIC_BEEHIIV_PUBLICATION_ID` | Beehiiv publication ID from your publication settings. Leave blank to show a placeholder form. |
| `PUBLIC_SITE_URL` | Full site URL for canonical links and OG metadata. Defaults to `https://skylavelle.com.au`. |

See the [Environment Variables](#environment-variables) section below for the full list including Lemon Squeezy and Beehiiv signup variables.

## Development

Start the local development server:

```bash
npm run dev
```

The site runs at `http://localhost:4321` by default.

**Note on search:** Pagefind search is not available in development mode. It requires a production build. Run `npm run build` to generate the search index.

## Build

Build the production site and generate the Pagefind search index:

```bash
npm run build
```

This runs `astro build` followed by `pagefind --site dist`, which generates the search index in `dist/pagefind/`.

Preview the production build locally:

```bash
npm run preview
```

## Linting and formatting

Run ESLint:

```bash
npm run lint
```

Format with Prettier:

```bash
npm run format
```

Check formatting without writing:

```bash
npm run format:check
```

## Content

### Articles

Articles are MDX files in `src/content/articles/`. Each article requires the following frontmatter:

```yaml
---
title: "Article title"
description: "Article description for SEO and cards"
publishDate: 2025-06-01
updatedDate: 2025-06-15  # optional
category: "Category name"
tags: ["tag1", "tag2"]
featured: false
draft: false
seoTitle: "Custom SEO title"  # optional, falls back to title
seoDescription: "Custom SEO description"  # optional, falls back to description
---
```

Set `draft: true` to exclude an article from the build.

### Adding a new article

1. Create a new `.mdx` file in `src/content/articles/`
2. Add the required frontmatter
3. Write the article content in MDX
4. Run `npm run dev` to preview

### Updating pages

Static pages are in `src/pages/`. Components are in `src/components/`. The base layout is at `src/layouts/Layout.astro`.

## Deployment on Vercel

### Initial setup

1. Connect the repository to a Vercel project
2. Set the framework preset to **Astro**
3. The build command (`npm run build`) and output directory (`dist`) are detected automatically
4. Add the required environment variables in the Vercel project settings

### Environment variables on Vercel

Add these in the Vercel dashboard under Settings > Environment Variables:

- `PUBLIC_GA_ID` - Google Analytics ID
- `PUBLIC_BEEHIIV_PUBLICATION_ID` - Beehiiv publication ID
- `PUBLIC_SITE_URL` - Set to `https://skylavelle.com.au` for production

### Build command

The build command includes Pagefind indexing:

```
npm run build
```

Which runs: `astro build && pagefind --site dist`

This works on Vercel because `pagefind` is in `devDependencies` and Vercel installs dev dependencies during build.

### Custom domain

Set the custom domain `skylavelle.com.au` in the Vercel project under Settings > Domains. Update DNS records as directed by Vercel.

### Sitemap

The sitemap is generated automatically at build time by `@astrojs/sitemap` and is available at `/sitemap-index.xml`. Submit this URL to Google Search Console after the first deployment.

### Thank-you pages

The site includes two thank-you pages:

- `/thank-you/product/` - shown after a template purchase
- `/thank-you/newsletter/` - shown after a newsletter signup

Configure Lemon Squeezy to redirect to `https://skylavelle.com.au/thank-you/product/` in the post-purchase redirect settings for each product. Configure Beehiiv to redirect to `https://skylavelle.com.au/thank-you/newsletter/` after a successful signup. After each deploy, confirm these redirect URLs still point to the live domain.

### Deploying

After each deploy, verify the following:

1. Lemon Squeezy post-purchase redirect URLs point to `https://skylavelle.com.au/thank-you/product/`
2. Beehiiv post-signup redirect URL points to `https://skylavelle.com.au/thank-you/newsletter/`
3. All `PUBLIC_LS_*` environment variables are set to the correct Lemon Squeezy checkout URLs for the live store
4. `PUBLIC_BEEHIIV_SIGNUP_URL` is set to the active Beehiiv form signup URL

## Project structure

```
src/
  components/     # Reusable Astro components
  content/
    articles/     # MDX article files
    config.ts     # Content collection schema
  layouts/
    Layout.astro  # Base page layout
  pages/          # Route pages
    articles/     # Article listing and detail pages
    services/     # Service pages
    templates/    # Template product pages
  styles/
    global.css    # Global styles and Tailwind v4 theme
public/           # Static assets
docs/             # Documentation
  content-strategy.md
```

## Adding a newsletter

Set `PUBLIC_BEEHIIV_PUBLICATION_ID` in your `.env` file. The `BeehiivEmbed` component uses this to render the embed on the newsletter and resources pages. Find your publication ID in your Beehiiv publication settings under the Embed section.

## Adding analytics

Set `PUBLIC_GA_ID` in your `.env` file. Google Analytics is injected via the `Layout.astro` component only when the variable is set. This prevents analytics from running in local development unless you explicitly set the variable.

## Environment Variables

Full reference for all environment variables used by the site.

| Variable | Description | Where to find it |
|---|---|---|
| `PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable analytics. | Google Analytics > Admin > Data Streams |
| `PUBLIC_SITE_URL` | Full production URL for canonical links and OG metadata (e.g. `https://skylavelle.com.au`). | Set manually |
| `PUBLIC_BEEHIIV_PUBLICATION_ID` | Beehiiv publication ID for the newsletter embed. Leave blank to show a placeholder form. | Beehiiv dashboard > Settings > Embed |
| `PUBLIC_BEEHIIV_SIGNUP_URL` | Direct signup URL used for gated free tool delivery. | Beehiiv dashboard > Forms > Signup URL |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK` | Lemon Squeezy checkout URL for the Project Recovery Pack. Leave blank to hide the buy button. | Lemon Squeezy dashboard > Products > Share link |
| `PUBLIC_LS_BUSINESS_CASE_PACK` | Lemon Squeezy checkout URL for the Enterprise Technology Business Case Pack. Leave blank to hide the buy button. | Lemon Squeezy dashboard > Products > Share link |
| `PUBLIC_LS_PROCUREMENT_PACK` | Lemon Squeezy checkout URL for the Procurement Evaluation Pack. Leave blank to hide the buy button. | Lemon Squeezy dashboard > Products > Share link |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Lemon Squeezy checkout URL for the Steering Committee Reporting Pack. Leave blank to hide the buy button. | Lemon Squeezy dashboard > Products > Share link |

Set all variables in `.env` for local development and in the Vercel dashboard under Settings > Environment Variables for production. After setting Lemon Squeezy variables, test each checkout flow in Lemon Squeezy test mode before going live.

## TODO

- [ ] Connect contact form to a backend handler (Formspree, Resend, or a custom Astro API route)
- [ ] Add payment/purchase flow for template products (Lemon Squeezy or Gumroad)
- [ ] Add default OG image at `public/og-default.png`
- [ ] Submit sitemap to Google Search Console after first deployment
- [ ] Set up Beehiiv publication and add the publication ID
- [ ] Set up Google Analytics and add the measurement ID
