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

The GTM Assistant chatbot (`components/GTMAssistant.tsx`) requires a Gemini API key:

```
API_KEY=your_gemini_api_key   # in .env.local
```

It uses `process.env.API_KEY` (exposed by Vite via `define` or directly via `import.meta.env`). Without this key the assistant panel will throw at runtime.

## Architecture

This is a single-page marketing site for the Flow Ops freelance service (ABX & GTM Engineering). There is no routing — the page is a vertical stack of section components rendered in `App.tsx`.

**Component model**

- `App.tsx` owns all modal state (`isZcalOpen`, `isEnrollmentOpen`, `isPrivacyOpen`) and passes open/close callbacks as props.
- Section components (`Hero`, `Method`, `ABXPillars`, `Offers`, `Stack`, `Timeline`, `Training`, `FAQ`) are purely presentational with no local state beyond UI interactions.
- Three modals — `ZcalModal` (booking), `EnrollmentModal` (lead form), `PrivacyModal` (legal) — are lifted to `App.tsx` so any section can trigger them via props.
- `GTMAssistant` is a self-contained floating chatbot that manages its own open/close state and a persistent Gemini chat session (`useMemo`-initialized). It is NOT wired through `App.tsx`.

**Styling**

Tailwind CSS is loaded via CDN in `index.html` (not as a PostCSS plugin). Custom utilities (`gradient-text`, `btn-glow`, `card-hover`, `animate-flow`, `animate-modal`, `footer-pattern`, `bg-grid-pattern`) are defined in a `<style>` block in `index.html`. Do not move Tailwind to a PostCSS/Vite plugin without also migrating these custom classes.

**Gemini integration**

`GTMAssistant` uses `@google/genai` with `gemini-3-flash-preview`. The chat is initialized once with `useMemo` to preserve conversation context across messages. The system prompt defines Flow Ops's three service tiers and instructs the model to respond in French.
