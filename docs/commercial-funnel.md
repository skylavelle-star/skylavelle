# Commercial Funnel Documentation - Sky Lavelle

## Business Positioning

skylavelle.com.au is a specialist advisory and templates site for senior technology delivery professionals. The site publishes long-form articles, free diagnostic checklists and paid template packs covering project recovery, business case development, procurement evaluation and steering committee governance. It connects to an advisory practice offering project recovery reviews, business case reviews and procurement advisory at day-rate pricing.

The site is positioned for experienced practitioners, not beginners. The content assumes the reader has 10 or more years of enterprise delivery experience. Products are priced to reflect professional utility, not volume sales.

---

## Target Audience

**Primary:** Senior project managers, program managers and delivery leads with 10 to 25+ years of enterprise technology delivery experience. These are people who are accountable for significant programs, have been around long enough to know what good governance looks like, and are willing to pay for structured tools that save them time.

**Secondary:** Technology directors and CIOs who are looking for resources to support their teams, assess a troubled program, or prepare an investment proposal.

**Tertiary:** PMO leads who are establishing or resetting governance standards across a portfolio and need templates that can be adapted as an organisational standard.

---

## Product Ladder

| Tier | Product | Price |
|---|---|---|
| Free | Project Recovery Checklist | $0 |
| Free | Business Case Readiness Checklist | $0 |
| Free | Procurement Evaluation Checklist | $0 |
| Free | Steering Committee Health Check | $0 |
| Entry | Project Recovery Checklist Pro | $49 AUD (not yet available) |
| Core | Steering Committee Reporting Pack | $147 AUD |
| Core | Enterprise Technology Business Case Pack | $247 AUD |
| Core | Project Recovery Pack | $297 AUD |
| Core | Procurement Evaluation Pack | $297 AUD |
| Bundle | Enterprise Delivery Governance Bundle | TBC (all four packs) |
| Advisory | Project Recovery Review | from $950 AUD |
| Advisory | Business Case Review | from $950 AUD |
| Advisory | Procurement Review | from $1,500 AUD |

---

## Free Lead Magnets

All free checklists are gated behind newsletter signup. The signup uses `beehiivSignupUrl` as the trigger (configured via `PUBLIC_BEEHIIV_SIGNUP_URL`).

| Checklist | Intended trigger |
|---|---|
| Project Recovery Checklist | Reader lands on project recovery content or browses the recovery pack |
| Business Case Readiness Checklist | Reader lands on business case content or browses the business case pack |
| Procurement Evaluation Checklist | Reader lands on procurement content or browses the procurement pack |
| Steering Committee Health Check | Reader lands on governance content or browses the steering committee pack |

---

## Paid Products

| Product | Price | Lemon Squeezy Variant ID | Store URL |
|---|---|---|---|
| Project Recovery Pack | $297 AUD | 1023963 | `PUBLIC_LS_PROJECT_RECOVERY_PACK` |
| Enterprise Technology Business Case Pack | $247 AUD | 1023994 | `PUBLIC_LS_BUSINESS_CASE_PACK` |
| Procurement Evaluation Pack | $297 AUD | 1024000 | `PUBLIC_LS_PROCUREMENT_PACK` |
| Steering Committee Reporting Pack | $147 AUD | 1024002 | `PUBLIC_LS_STEERING_COMMITTEE_PACK` |

Each product URL should be a direct Lemon Squeezy checkout URL (e.g. `https://skylavelle.lemonsqueezy.com/checkout/buy/<variant-id>`). Set the relevant environment variable and the buy buttons on each product page become active automatically.

---

## Newsletter Strategy

**Newsletter name:** The Project Recovery Brief

**Positioning:** A fortnightly newsletter for senior technology delivery professionals covering project recovery, governance, procurement and business case topics. No beginner content. No generic PM tips. Written from the perspective of someone who has run difficult programs in government and enterprise environments.

**Cadence:** Fortnightly (every two weeks).

**Content pillars:**
1. Project recovery - signs of trouble, diagnostic approaches, recovery planning, stakeholder reset
2. Governance - steering committee effectiveness, reporting, escalation, risk management
3. Procurement - restricted tender management, evaluation, BAFO, probity
4. Business case - investment analysis, options, financial modelling, approval strategy
5. Product and tool spotlights - when new templates are released or updated

**Growth mechanism:** Newsletter signup is gated to free checklist delivery. Each free tool drives subscribers into the same list. Paid product purchase also prompts newsletter signup at checkout (configured in Lemon Squeezy post-purchase flow).

---

## Advisory Services and Upsell

| Service | Starting price | When to upsell |
|---|---|---|
| Project Recovery Review | from $950 AUD | When a buyer of the recovery pack signals the situation is complex, contacts via the advisory inquiry form, or when a recovery diagnostic reveals embedded advisory is needed |
| Business Case Review | from $950 AUD | When a buyer of the business case pack needs a senior review before submission, or when a delegate approval is at risk |
| Procurement Review | from $1,500 AUD | When a restricted tender process needs probity oversight or an evaluation panel needs support from an experienced reviewer |

Each product page includes a link to the related advisory service in the sidebar and at the bottom of the page. The advisory service pages explain what embedded advisory looks like and provide a direct inquiry path.

Upsell triggers:
- Post-purchase email sequence (configured in Lemon Squeezy) can reference advisory for complex situations
- Article content links to both free tools and advisory where relevant
- Newsletter content can reference advisory engagements (without identifying clients)

---

## Analytics Events

| Event name | When it fires |
|---|---|
| `page_view` | Standard GA4 page view on every page load (handled automatically by GA4 tag) |
| `product_view` | On page load for each product page, via inline script reading `data-ga-event="product_view"` from a hidden span |
| `product_buy_click` | When a buy button is clicked, via `data-ga-event="product_buy_click"` on BuyButton components |
| `newsletter_signup_click` | When a newsletter signup form is submitted or the signup CTA is clicked |
| `free_tool_download` | When a free checklist is downloaded or accessed (if tracked via redirect) |
| `article_read` | On article page load (if implemented - useful for content performance tracking) |
| `advisory_inquiry_click` | When an advisory inquiry CTA is clicked on a service page |

---

## Environment Variables

| Variable | Description | Where to find it | Status |
|---|---|---|---|
| `PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (format: `G-XXXXXXXXXX`) | Google Analytics > Admin > Data Streams | Not set |
| `PUBLIC_SITE_URL` | Full production URL for canonical links and OG metadata | Set manually to `https://skylavelle.com.au` | Not set |
| `PUBLIC_BEEHIIV_PUBLICATION_ID` | Beehiiv publication ID for the newsletter embed | Beehiiv dashboard > Settings > Embed | Not set |
| `PUBLIC_BEEHIIV_SIGNUP_URL` | Direct signup URL for gated free tool delivery | Beehiiv dashboard > Forms > Signup URL | Not set |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK` | Lemon Squeezy checkout URL for the Project Recovery Pack (variant 1023963) | Lemon Squeezy dashboard > Products > Share link | Not set |
| `PUBLIC_LS_BUSINESS_CASE_PACK` | Lemon Squeezy checkout URL for the Business Case Pack (variant 1023994) | Lemon Squeezy dashboard > Products > Share link | Not set |
| `PUBLIC_LS_PROCUREMENT_PACK` | Lemon Squeezy checkout URL for the Procurement Evaluation Pack (variant 1024000) | Lemon Squeezy dashboard > Products > Share link | Not set |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Lemon Squeezy checkout URL for the Steering Committee Pack (variant 1024002) | Lemon Squeezy dashboard > Products > Share link | Not set |

---

## Launch Sequence

1. Set `PUBLIC_BEEHIIV_SIGNUP_URL` - get the signup URL from the Beehiiv publication settings and add it to `.env` and Vercel environment variables.
2. Set `PUBLIC_BEEHIIV_PUBLICATION_ID` - required for the newsletter embed to render on the newsletter page.
3. Set up Lemon Squeezy products - create each product variant in the Lemon Squeezy dashboard and configure file delivery for the purchased templates.
4. Set all four `PUBLIC_LS_*` environment variables in `.env` and in Vercel to activate the buy buttons.
5. Configure Lemon Squeezy post-purchase redirect to `/thank-you/product/` on the live domain.
6. Configure Beehiiv post-signup redirect to `/thank-you/newsletter/` on the live domain.
7. Test each checkout flow end-to-end in test mode before going live.
8. Set `PUBLIC_GA_ID` and verify events are firing in GA4 DebugView.
9. Set `PUBLIC_SITE_URL` to `https://skylavelle.com.au`.
10. Deploy to production on Vercel and confirm environment variables are set for the Production environment.
11. Submit the sitemap at `/sitemap-index.xml` to Google Search Console.
12. Monitor GA4 for product_view and product_buy_click events in the first 48 hours.

---

## Internal Linking Map

**Articles to templates:**
- Articles about project recovery link to `/templates/project-recovery-pack` at the end of the article and where contextually relevant in the body.
- Articles about business case development link to `/templates/enterprise-technology-business-case-pack`.
- Articles about procurement and RFP management link to `/templates/procurement-evaluation-pack`.
- Articles about steering committee governance and reporting link to `/templates/steering-committee-reporting-pack`.

**Templates to advisory:**
- Each template product page includes a sidebar link and a bottom-of-page link to the related advisory service.
- The advisory service pages explain the difference between using a template independently and engaging embedded advisory support.

**Free tools to paid products:**
- Each free checklist page includes a reference to the paid pack that expands on the same topic.
- Free checklists are positioned as the diagnostic step; paid packs provide the execution tools.
- The `/templates` index page includes a free tools CTA section at the bottom, and the `/free-tools` page links back to paid templates for readers who need the full toolkit.

**Newsletter to products:**
- Newsletter issues reference relevant templates when the topic aligns.
- The newsletter welcome email (configured in Beehiiv) should reference the full product range.
- Post-purchase Lemon Squeezy emails can reference related packs and advisory services.
