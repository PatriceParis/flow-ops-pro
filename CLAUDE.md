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

No environment variables or secrets are required. `EnrollmentModal` posts to a hardcoded Zapier catch hook (`NOTIFICATION_WEBHOOK_URL`), which relays the submission by email.

PostHog analytics targets the EU region (`https://eu.i.posthog.com`). The project token in `consent.ts` is a public write-only key, intended to ship in the client bundle — it is not a secret.

**Consent gating** — `consent.ts` is the single source of truth. PostHog is never initialized and the LinkedIn testimonial iframes in `Hero` never render until consent is granted; `CookieBanner` collects the choice and the footer's "Gérer les traceurs" withdraws it. Withdrawal reloads the page on purpose: a live PostHog instance re-persists its device id asynchronously, so the storage purge only sticks on the next load, when `applyStoredConsent` runs with no instance alive. Do not "optimize" that reload away.

## Architecture

This is a single-page marketing site for the Flow Ops freelance service (ABX & GTM Engineering). There is no routing — the page is a vertical stack of section components rendered in `App.tsx`.

**Component model**

- `App.tsx` owns all modal state (`isZcalOpen`, `isPrivacyOpen`) and passes open/close callbacks as props.
- Section components (`Hero`, `Method`, `ABXPillars`, `Offers`, `Stack`, `Timeline`, `FAQ`) are purely presentational with no local state beyond UI interactions. The `Formation` block lives in `archive/` — see `archive/README.md`.
- Two modals — `ZcalModal` (booking) and `PrivacyModal` (legal) — are lifted to `App.tsx` so any section can trigger them via props.
- `Hero` embeds three LinkedIn testimonial posts as iframes, driven by the `TESTIMONIAL_URNS` array at the top of the file and gated behind cookie consent.

**Styling**

Tailwind CSS is loaded via CDN in both HTML entry points (not as a PostCSS plugin). Custom utilities (`gradient-text`, `btn-glow`, `card-hover`, `animate-flow`, `animate-modal`, `footer-pattern`, `bg-grid-pattern`) live in `styles.css`, imported from `index.tsx`. Do not move Tailwind to a PostCSS/Vite plugin without also migrating these custom classes.

## Internationalisation & SEO

Six static pages, French by default: the home page plus one article per entry in `SLUGS` (`abx-vs-abm`, `gtm-engineering`), each in both languages. Client-side language switching alone would leave the English version invisible to crawlers and social scrapers.

**Every HTML file on disk is an identical empty shell.** All head content — `lang`, title, description, canonical, the hreflang triplet, Open Graph, Twitter and JSON-LD — is emitted by the `seoHead` Vite plugin in `vite.config.ts`, which derives the route from the file path and reads the same dictionaries the UI renders. Never hand-edit meta into an HTML file: it would be the only copy not covered by that guarantee.

To add a page: add its slug to `SLUGS`, its content to both `i18n/pages.ts` and `i18n/pages.en.ts`, create `<slug>/index.html` and `en/<slug>/index.html` as copies of any existing shell, and add the URLs to `public/sitemap.xml`.

- **Copy** lives in `i18n/content.ts` (one `Content` object per locale, no markup). Components read it with `useContent()`. Sentences with an inline highlight are split into `…Before` / `…Highlight` / `…After` parts so the dictionary stays plain data.
- **Routing** is path-derived, never state: `localeFromPath` gives the language and `slugFromPath` the article (null on the home page). `App.tsx` picks `ArticlePage` or the home sections from that.
- **Locale** comes from the URL path, never from state. `LocaleSwitcher` performs a real navigation and records the choice in `localStorage`.
- **Auto-detection**: `redirectToPreferredLocale()` runs in `index.tsx` *before* React mounts and sends a first-time English-speaking visitor to the English copy of whatever page they landed on, slug included. It fires only from a French URL and only when the visitor has never chosen a language, so an explicit choice is never overridden.
- **Structured data** is emitted into the static HTML, not injected at runtime, because AI crawlers generally do not execute JS. The home pages carry `ProfessionalService` + `WebSite` + `FAQPage` (all ten Q&As); article pages carry `ProfessionalService` + `Article` + a single-question `FAQPage` built from `keyAnswer`. Adding a FAQ entry to `content.ts` updates the schema automatically — do not hand-maintain the JSON-LD.
- **OG images** are rendered by `node scripts/og-image.mjs` (headless Chromium) into `public/og-image.png` and `public/og-image-en.png`. Re-run it after changing the headline or the brand.
- The privacy policy in `PrivacyModal` stays in French in both locales — it is the authoritative text for a French-registered business. The English build shows a notice to that effect via `content.en.privacyNotice`; do not machine-translate the legal body.
