import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mailtoHref, useContent } from '../i18n';

const References: React.FC = () => {
  const r = useContent().references;
  return (
    <section id="references" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">{r.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">{r.title}</h2>
          <p className="text-slate-500 text-lg leading-relaxed">{r.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {r.cases.map((c) => (
            <article key={c.sector + c.context} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">{c.sector}</span>
              <p className="mt-1 text-sm text-slate-500">{c.context}</p>
              <div className="mt-6 mb-6">
                {c.figure ? (
                  <>
                    <p className="text-5xl font-bold tracking-tight text-slate-900 tabular-nums">{c.figure}</p>
                    <p className="mt-1 text-slate-700 font-medium">{c.figureLabel}</p>
                  </>
                ) : (
                  <p className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">{c.figureLabel}</p>
                )}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{r.labelDone}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{c.done}</p>
              {c.note && <p className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-500">{c.note}</p>}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-sm text-slate-400 max-w-2xl">{r.footnote}</p>
          <a
            href={mailtoHref(r.cta)}
            className="shrink-0 inline-flex items-center gap-2 font-bold text-slate-900 underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            {r.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default References;
