import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { dictionaries, type Locale } from './i18n/content';

const SITE = 'https://flow-ops.pro';

function structuredData(locale: Locale) {
  const c = dictionaries[locale];
  const url = locale === 'en' ? `${SITE}/en/` : `${SITE}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#business`,
        name: 'Flow Ops',
        description: c.meta.description,
        url,
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
          jobTitle: locale === 'en' ? 'GTM Engineer' : 'GTM Engineer',
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
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: 'Flow Ops',
        description: c.meta.description,
        inLanguage: locale === 'en' ? 'en-GB' : 'fr-FR',
        publisher: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: locale === 'en' ? 'en-GB' : 'fr-FR',
        mainEntity: c.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

/**
 * Emits the JSON-LD from the same dictionary the UI renders, so the structured
 * data can never drift from the visible FAQ. It lands in the static HTML rather
 * than being injected at runtime, because AI crawlers generally do not run JS.
 */
function seoJsonLd(): Plugin {
  return {
    name: 'flowops-seo-jsonld',
    transformIndexHtml(html, ctx) {
      const locale: Locale = ctx.path.includes('/en/') ? 'en' : 'fr';
      const json = JSON.stringify(structuredData(locale)).replace(/</g, '\\u003c');
      return html.replace(
        '</head>',
        `    <script type="application/ld+json">${json}</script>\n</head>`
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), seoJsonLd()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
