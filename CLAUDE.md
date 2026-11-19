# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Dev server on http://localhost:3000
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

No linter or test runner is configured.

## Environment

No environment variables or secrets are required. The site has no form: every call to action is either the zCal booking modal (the scoping call, primary everywhere) or a prefilled `mailto:` (`mailtoHref` in `i18n/index.tsx`, for quotes), which is what lets the privacy policy say no form data is collected.

PostHog analytics targets the EU region (`https://eu.i.posthog.com`). The project token in `consent.ts` is a public write-only key, intended to ship in the client bundle — it is not a secret.

**Consent gating** — `consent.ts` is the single source of truth. PostHog is never initialized and the LinkedIn testimonial iframes in `Hero` never render until consent is granted; `CookieBanner` collects the choice and the footer's "Gérer les traceurs" withdraws it. Withdrawal reloads the page on purpose: a live PostHog instance re-persists its device id asynchronously, so the storage purge only sticks on the next load, when `applyStoredConsent` runs with no instance alive. Do not "optimize" that reload away.

## Architecture

This is the marketing site of Flow Ops, the B2B prospecting consultancy of Patrice Tord. The home page is a vertical stack of section components rendered in `App.tsx`; two article pages share the same shell.

## Positioning and voice

Flow Ops is a **service sold by a named consultant**, and the copy must never let a reader, human or machine, take it for software. An AI sales tool once classified the site as an n8n competitor because the copy led with "infrastructure automatisée", "système autonome", "stack" and "orchestration"; the positioning was rewritten in November 2026 around the validated offer.

- The lead offer is **« Qui appeler lundi »**: every Monday, the 10 to 20 highest-scoring companies to call, with the reason for the call and an opening line, plus two nurturing sequences (LinkedIn and email) for the companies not yet ready, 1 400 € HT per month (raised from 1 200 € by Patrice on 19 November 2026), no setup fee, no commitment. The entry point is a free 30-minute scoping call (decision of 19 November 2026: the blind free list sent by email is gone, because a list built without the client's context and CRM export is a risk); the call is followed by a first list of 20 companies with their signals, built from the prospects and customers in the client's CRM. The first month is a measured trial: four lists, three figures reviewed every week (companies called, conversations, meetings). The client's own sales team calls the list by default; a team of SDRs is an option, quoted separately, so the copy no longer compares the price with an outsourced SDR.
- The complementary high-end offer is called **« ABM en masse »** ("ABM at scale" in English). Do not call it ABX on the home page or in the offers: Patrice ruled that word out. The two published articles still discuss ABX as a topic.
- The list is the output of a **score that combines several signals**, never of one dated signal per call. Explain scoring in three plain parts: what the company is, what it is doing now, how recently.
- No trade-show framing ("fichier de salon", "deux salons par an"): many clients do not exhibit.
- Write in the vocabulary of the manager who sells: "qui appeler", "la raison de l'appel", "le score". Keep TAM, stack, infrastructure, orchestration and tool names out of anything addressed to the buyer. The technology is presented as a combination chosen for the client, in the "Exemples de signaux suivis" section, without naming tools.
- Signals are shown as **examples** (site visits on strategic pages, hiring, new decision-maker, dormant CRM leads, announced openings, event participation, LinkedIn engagement, change of leadership), chosen per client. Do not present public registers (BODACC and the like) as the source: it reads as something the buyer could do alone. Put forward instead that Flow Ops combines complementary technologies, picks them according to the signals that suit the client, and audits new ones regularly.
- Every example of a scored company shows at least two signals, and the examples span the three client types: cybersecurity, SaaS, industrial.
- The method keeps its three original blocks: sourcing, enrichment and signal detection; LinkedIn and email conversations (where scoring and nurturing are explained in plain words); sales activation.
- Never claim a guaranteed number of meetings or a projected cost per lead, and never name a client in copy without written consent. Sector-level proof ("éditeurs de logiciels", "fabricants d'équipements") is fine.
- French copy follows Patrice's style rules: no em or en dash as sentence punctuation, sentence-case titles, no emoji, non-breaking space before : ; ! ? and inside « », typographic apostrophes, direct statements over hedged ones.

The source of truth for the offer, the ICP and these rules is the Flow Ops tenant in the sibling workspace: `../gtm-engine/clients/flow-ops/CLAUDE.md`.

**Component model**

- `App.tsx` owns all modal state (`isZcalOpen`, `isPrivacyOpen`) and passes open/close callbacks as props.
- Section components, in page order: `Hero`, `Method`, `ListSample` (a fictional Monday list with scores, then how the score is calculated), `Stack` (examples of signals, the technology behind them, and the "service, not software" statement), `Offers` (the three tiers), `ABXPillars` and `Timeline` (the « ABM en masse » engagement; the component keeps its old file name), `FAQ`. They are presentational, with no local state beyond UI interactions. The `Formation` block lives in `archive/` — see `archive/README.md`.
- Two modals — `ZcalModal` (booking) and `PrivacyModal` (legal) — are lifted to `App.tsx` so any section can trigger them via props.
- `Hero` embeds three LinkedIn testimonial posts as iframes, driven by the `TESTIMONIAL_URNS` array at the top of the file and gated behind cookie consent.

**Styling**

Tailwind CSS v3 is compiled at build time through PostCSS (`tailwind.config.js`). It scans source text, so a class name must appear literally somewhere: never assemble one from fragments (`group-hover:${x}`), it would silently not be generated. Custom utilities (`gradient-text`, `btn-glow`, `card-hover`, `animate-flow`, `animate-modal`, `footer-pattern`, `bg-grid-pattern`) live in `styles.css`, imported from `index.tsx`.

## Internationalisation & SEO

Six static pages, French by default: the home page plus one article per entry in `SLUGS` (`abx-vs-abm`, `gtm-engineering`), each in both languages. Client-side language switching alone would leave the English version invisible to crawlers and social scrapers.

**Every HTML file on disk is an identical empty shell.** All head content — `lang`, title, description, canonical, the hreflang triplet, Open Graph, Twitter and JSON-LD — is emitted by the `seoHead` Vite plugin in `vite.config.ts`, which derives the route from the file path and reads the same dictionaries the UI renders. Never hand-edit meta into an HTML file: it would be the only copy not covered by that guarantee.

**The production build prerenders every page.** The same plugin renders `<App />` to static HTML into `#root`, and `index.tsx` hydrates it. Without this, a crawler that does not run JavaScript, which includes most AI readers, received an empty body and judged the business on the title and JSON-LD alone. Consequences to respect:

- Nothing may read `window`, `document` or `localStorage` while rendering. The route comes from `RouteProvider` (`useLocale()`, `useSlug()`), not from `window.location`. Browser-only state belongs in an effect or behind `useSyncExternalStore` with a server snapshot, as `useConsent` does.
- `CookieBanner` renders only after mount, so it is never baked into the static HTML where it would flash at visitors who already chose.
- The dev server keeps an empty root and `index.tsx` falls back to `createRoot`: the config bundles its own copy of the components once, which would go stale against hot-reloaded code. A hydration bug therefore only shows in `npm run build && npm run preview`. Check the console there after touching anything that renders differently on server and client.
- `public/llms.txt` states in plain text what Flow Ops is and is not. Keep it in step with the offers.
- `demo-cockpit/` is a standalone page (its own HTML, entry and root `#cockpit`): a read-only demo of the client follow-up space on fictional data, with companies described, never named. `seoHead` returns its HTML untouched, so it gets no site meta, no JSON-LD and no prerender; it is `noindex`, loads no tracker and stays out of the sitemap. It is shown during the scoping call only (decision of 19 November 2026): never link it from the site. Call it the client's "espace de suivi", never a platform or software.

To add a page: add its slug to `SLUGS`, its content to both `i18n/pages.ts` and `i18n/pages.en.ts`, create `<slug>/index.html` and `en/<slug>/index.html` as copies of any existing shell, and add the URLs to `public/sitemap.xml`.

- **Copy** lives in `i18n/content.ts` (one `Content` object per locale, no markup). Components read it with `useContent()`. Sentences with an inline highlight are split into `…Before` / `…Highlight` / `…After` parts so the dictionary stays plain data.
- **Routing** is path-derived, never state: `localeFromPath` gives the language and `slugFromPath` the article (null on the home page). `index.tsx` resolves both once and hands them to `RouteProvider`; `App.tsx` picks `ArticlePage` or the home sections from `useSlug()`.
- **Locale** comes from the URL path, never from state. `LocaleSwitcher` performs a real navigation and records the choice in `localStorage`.
- **Auto-detection**: `LOCALE_REDIRECT_SCRIPT` (in `i18n/index.tsx`) is inlined into `<head>` by the plugin, so it runs before the prerendered French page paints. It sends a first-time English-speaking visitor to the English copy of whatever page they landed on, slug included, only from a French URL and only when the visitor has never chosen a language, so an explicit choice is never overridden.
- **Structured data** is emitted into the static HTML, not injected at runtime, because AI crawlers generally do not execute JS. The home pages carry `ProfessionalService` (with `serviceType` and an `OfferCatalog` of the three tiers; numeric prices live in `TIER_PRICES` in `vite.config.ts` and must follow the dictionary) + `WebSite` + `FAQPage` (all ten Q&As); article pages carry `ProfessionalService` + `Article` + a single-question `FAQPage` built from `keyAnswer`. Adding a FAQ entry to `content.ts` updates the schema automatically — do not hand-maintain the JSON-LD.
- **OG images** are rendered by `node scripts/og-image.mjs` (headless Chromium) into `public/og-image.png` and `public/og-image-en.png`. Re-run it after changing the headline or the brand.
- The privacy policy in `PrivacyModal` stays in French in both locales — it is the authoritative text for a French-registered business. The English build shows a notice to that effect via `content.en.privacyNotice`; do not machine-translate the legal body.
