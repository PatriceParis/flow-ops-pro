import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { pathForLocaleAtSlug, useContent, useLocale } from '../i18n';
import { articles, SLUGS } from '../i18n/pages';

const FAQ: React.FC = () => {
  const c = useContent();
  const locale = useLocale();

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{c.faq.title}</h2>
          <p className="text-slate-500 mt-3">{c.faq.subtitle}</p>
        </div>

        {/* Native <details> keeps every answer in the DOM without JavaScript, so
            search and AI crawlers read the full text even while it is collapsed. */}
        <div className="space-y-4">
          {c.faq.items.map((item, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors overflow-hidden"
            >
              <summary className="flex items-start justify-between gap-6 p-6 md:p-8 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug">
                  {item.q}
                </h3>
                <span className="shrink-0 w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-open:rotate-45 transition-transform duration-300">
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <p className="px-6 md:px-8 pb-6 md:pb-8 -mt-1 text-slate-500 leading-relaxed whitespace-pre-line">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* Without these links the articles would be orphan pages — nothing on
            the site would point a crawler or a reader to them. */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">
            {c.faq.readMore}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SLUGS.map((slug) => (
              <a
                key={slug}
                href={pathForLocaleAtSlug(locale, slug)}
                className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-5 transition-all"
              >
                <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {articles[locale][slug].h1}
                </span>
                <span className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {articles[locale][slug].eyebrow}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
