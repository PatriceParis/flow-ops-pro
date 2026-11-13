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

Two static entry points, French by default: `index.html` → `/` (fr) and `en/index.html` → `/en/` (en). Each carries its own `lang`, title, meta description, canonical, Open Graph image and hreflang triplet — client-side language switching alone would leave the English version invisible to crawlers and social scrapers.

- **Copy** lives in `i18n/content.ts` (one `Content` object per locale, no markup). Components read it with `useContent()`. Sentences with an inline highlight are split into `…Before` / `…Highlight` / `…After` parts so the dictionary stays plain data.
- **Locale** comes from the URL path (`localeFromPath`), never from state. `LocaleSwitcher` performs a real navigation and records the choice in `localStorage`.
- **Auto-detection**: `redirectToPreferredLocale()` runs in `index.tsx` *before* React mounts and sends a first-time English-speaking visitor from `/` to `/en/`. It fires only from the root and only when the visitor has never chosen a language, so an explicit choice is never overridden.
- **Structured data** (`ProfessionalService`, `WebSite`, `FAQPage`) is generated at build time by the `seoJsonLd` Vite plugin in `vite.config.ts`, which imports the same dictionary the UI renders. It is emitted into the static HTML rather than injected at runtime because AI crawlers generally do not execute JS. Adding a FAQ entry to `content.ts` therefore updates the schema automatically — do not hand-maintain the JSON-LD.
- **OG images** are rendered by `node scripts/og-image.mjs` (headless Chromium) into `public/og-image.png` and `public/og-image-en.png`. Re-run it after changing the headline or the brand.
- The privacy policy in `PrivacyModal` stays in French in both locales — it is the authoritative text for a French-registered business. The English build shows a notice to that effect via `content.en.privacyNotice`; do not machine-translate the legal body.
