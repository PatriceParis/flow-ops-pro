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

## Architecture

This is a single-page marketing site for the Flow Ops freelance service (ABX & GTM Engineering). There is no routing — the page is a vertical stack of section components rendered in `App.tsx`.

**Component model**

- `App.tsx` owns all modal state (`isZcalOpen`, `isEnrollmentOpen`, `isPrivacyOpen`) and passes open/close callbacks as props.
- Section components (`Hero`, `Method`, `ABXPillars`, `Offers`, `Stack`, `Timeline`, `Training`, `FAQ`) are purely presentational with no local state beyond UI interactions.
- Three modals — `ZcalModal` (booking), `EnrollmentModal` (lead form), `PrivacyModal` (legal) — are lifted to `App.tsx` so any section can trigger them via props.
- `Hero` embeds three LinkedIn testimonial posts as iframes, driven by the `TESTIMONIALS` array of post URNs at the top of the file.

**Styling**

Tailwind CSS is loaded via CDN in `index.html` (not as a PostCSS plugin). Custom utilities (`gradient-text`, `btn-glow`, `card-hover`, `animate-flow`, `animate-modal`, `footer-pattern`, `bg-grid-pattern`) are defined in a `<style>` block in `index.html`. Do not move Tailwind to a PostCSS/Vite plugin without also migrating these custom classes.
