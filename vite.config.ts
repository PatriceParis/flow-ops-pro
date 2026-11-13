import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { dictionaries, type Locale } from './i18n/content';
import { articles, SLUGS, type Slug } from './i18n/pages';

const SITE = 'https://flow-ops.pro';
const LOCALES: Locale[] = ['fr', 'en'];

/** Every page of the site, as (locale, slug) — slug null meaning the home page. */
const ROUTES: { locale: Locale; slug: Slug | null }[] = LOCALES.flatMap((locale) => [
  { locale, slug: null },
  ...SLUGS.map((slug) => ({ locale, slug })),
]);

function urlFor(locale: Locale, slug: Slug | null) {
  const base = locale === 'en' ? `${SITE}/en/` : `${SITE}/`;
  return slug ? `${base}${slug}/` : base;
}

function fileFor(locale: Locale, slug: Slug | null) {
  const dir = [locale === 'en' ? 'en' : '', slug ?? ''].filter(Boolean).join('/');
  return dir ? `${dir}/index.html` : 'index.html';
}

function ogImage(locale: Locale) {
  return `${SITE}/og-image${locale === 'en' ? '-en' : ''}.png`;
}

function metaFor(locale: Locale, slug: Slug | null) {
  if (slug) {
    const a = articles[locale][slug];
    return { title: a.metaTitle, description: a.metaDescription };
  }
  const c = dictionaries[locale].meta;
  return { title: c.title, description: c.description };
}

function headFor(locale: Locale, slug: Slug | null) {
  const { title, description } = metaFor(locale, slug);
  const url = urlFor(locale, slug);
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const lang = locale === 'en' ? 'en_GB' : 'fr_FR';
  const alt = locale === 'en' ? 'fr_FR' : 'en_GB';

  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="alternate" hreflang="fr" href="${urlFor('fr', slug)}">`,
    `<link rel="alternate" hreflang="en" href="${urlFor('en', slug)}">`,
    `<link rel="alternate" hreflang="x-default" href="${urlFor('fr', slug)}">`,
    `<meta property="og:type" content="${slug ? 'article' : 'website'}">`,
    `<meta property="og:site_name" content="Flow Ops">`,
    `<meta property="og:locale" content="${lang}">`,
    `<meta property="og:locale:alternate" content="${alt}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${ogImage(locale)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(title)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${ogImage(locale)}">`,
  ].join('\n    ');
}

function structuredData(locale: Locale, slug: Slug | null) {
  const c = dictionaries[locale];
  const url = urlFor(locale, slug);
  const inLanguage = locale === 'en' ? 'en-GB' : 'fr-FR';

  const business = {
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#business`,
    name: 'Flow Ops',
    description: c.meta.description,
    url: urlFor(locale, null),
    email: 'patrice@flow-ops.pro',
    image: `${SITE}/flow-ops-logo.png`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 rue de Ponthieu, Bureau 326',
      postalCode: '75008',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    founder: {
      '@type': 'Person',
      name: 'Patrice Tord',
      jobTitle: 'GTM Engineer',
      sameAs: 'https://www.linkedin.com/in/patrice-tord/',
    },
    areaServed: { '@type': 'Place', name: locale === 'en' ? 'Worldwide' : 'International' },
    knowsAbout: [
      'Account Based Experience',
      'Account Based Marketing',
      'GTM Engineering',
      'B2B demand generation',
      'Sales automation',
      'Intent data',
    ],
    sameAs: ['https://www.linkedin.com/in/patrice-tord/'],
  };

  if (slug) {
    const a = articles[locale][slug];
    return {
      '@context': 'https://schema.org',
      '@graph': [
        business,
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: a.h1,
          description: a.metaDescription,
          abstract: a.keyAnswer,
          inLanguage,
          url,
          image: ogImage(locale),
          author: { '@type': 'Person', name: 'Patrice Tord' },
          publisher: { '@id': `${SITE}/#business` },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          articleSection: a.eyebrow,
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          inLanguage,
          mainEntity: [
            {
              '@type': 'Question',
              name: a.h1,
              acceptedAnswer: { '@type': 'Answer', text: a.keyAnswer },
            },
          ],
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: 'Flow Ops',
        description: c.meta.description,
        inLanguage,
        publisher: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage,
        mainEntity: c.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

function routeForPath(path: string): { locale: Locale; slug: Slug | null } {
  const clean = path.replace(/^\/+|index\.html$/g, '').replace(/\/$/, '');
  const locale: Locale = /^en(\/|$)/.test(clean) ? 'en' : 'fr';
  const rest = clean.replace(/^en\/?/, '');
  const slug = SLUGS.find((s) => s === rest) ?? null;
  return { locale, slug };
}

/**
 * Every page is built from the same HTML shell; all head content is emitted here
 * from the same dictionaries the UI renders, so meta and structured data can
 * never drift from the copy. It lands in the static HTML rather than being
 * injected at runtime, because AI crawlers generally do not execute JS.
 */
function seoHead(): Plugin {
  return {
    name: 'flowops-seo-head',
    transformIndexHtml(html, ctx) {
      const { locale, slug } = routeForPath(ctx.path);
      const json = JSON.stringify(structuredData(locale, slug)).replace(/</g, '\\u003c');
      return html
        .replace('<html class=', `<html lang="${locale}" class=`)
        .replace(
          '</head>',
          `    ${headFor(locale, slug)}\n    <script type="application/ld+json">${json}</script>\n</head>`
        );
    },
  };
}

export default defineConfig({
  plugins: [react(), seoHead()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        ROUTES.map(({ locale, slug }) => [
          [locale, slug ?? 'home'].join('-'),
          resolve(__dirname, fileFor(locale, slug)),
        ])
      ),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
