import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useLocale, pathForLocale } from '../i18n';
import { articles, type Slug } from '../i18n/pages';
import Navbar from './Navbar';
import Footer from './Footer';

interface ArticlePageProps {
  slug: Slug;
  onOpenZcal: (e?: React.MouseEvent) => void;
  onOpenPrivacy: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ slug, onOpenZcal, onOpenPrivacy }) => {
  const locale = useLocale();
  const a = articles[locale][slug];
  const home = pathForLocale(locale);

  return (
    <div className="min-h-screen">
      <Navbar onOpenZcal={onOpenZcal} />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={home}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-700 uppercase tracking-wider transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Flow Ops
          </a>

          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-4">
            {a.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            {a.h1}
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">{a.standfirst}</p>

          {/* The quotable short answer, kept near the top for readers and crawlers alike. */}
          <div className="mt-10 bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex gap-5">
            <Quote className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
            <p className="text-slate-700 leading-relaxed font-medium">{a.keyAnswer}</p>
          </div>

          {a.sections.map((section, idx) => (
            <section key={idx} className="mt-14">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-snug">
                {section.h2}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-500 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* The comparison table belongs to the section that introduces it. */}
              {a.table && section.paragraphs.length === 0 && (
                <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                  <table className="w-full text-sm border-collapse min-w-[520px]">
                    <thead>
                      <tr className="border-b-2 border-slate-200">
                        {a.table.head.map((h, i) => (
                          <th
                            key={i}
                            className={`py-3 text-left font-bold ${
                              i === 0 ? 'text-slate-400' : 'text-slate-900'
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {a.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className={`py-3 pr-4 align-top ${
                                j === 0
                                  ? 'font-bold text-slate-700 whitespace-nowrap'
                                  : 'text-slate-500'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <aside className="mt-16 bg-slate-900 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{a.ctaTitle}</h2>
              <p className="text-slate-400 leading-relaxed mb-8">{a.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenZcal}
                  className="btn-glow px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                >
                  {a.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={home}
                  className="px-6 py-3.5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  {a.backHome}
                </a>
              </div>
            </div>
          </aside>

          <nav className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3">
            {(Object.keys(articles[locale]) as Slug[])
              .filter((s) => s !== slug)
              .map((s) => (
                <a
                  key={s}
                  href={`${home === '/' ? '' : home.replace(/\/$/, '')}/${s}/`}
                  className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  {articles[locale][s].h1}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ))}
          </nav>

          <p className="mt-10 text-xs text-slate-400">
            {locale === 'en' ? 'Last updated' : 'Dernière mise à jour'} : {a.updated}
          </p>
        </article>
      </main>

      <Footer onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
};

export default ArticlePage;
