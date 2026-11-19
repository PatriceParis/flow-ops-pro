import React from 'react';
import { Mail } from 'lucide-react';
import { useContent } from '../i18n';

const ListSample: React.FC = () => {
  const c = useContent();
  const s = c.sample;

  return (
    <section id="exemple" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">
            {s.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{s.title}</h2>
          <p className="text-slate-500">{s.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50/60">
            <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{s.context}</p>
          </div>

          <ol className="divide-y divide-slate-100">
            {s.rows.map((row, i) => (
              <li key={i} className="p-6 md:p-8 grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-5 md:gap-10">
                <div>
                  <span className="text-xs font-bold text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-slate-900 leading-snug mt-1">{row.company}</h3>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                      {s.labelSignal}
                    </dt>
                    <dd className="text-slate-900 font-semibold">{row.signal}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {s.labelReason}
                    </dt>
                    <dd className="text-slate-600 leading-relaxed">{row.reason}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {s.labelOpener}
                    </dt>
                    <dd className="text-slate-600 leading-relaxed italic">{row.opener}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-sm text-slate-400 text-center">{s.footnote}</p>
      </div>
    </section>
  );
};

export default ListSample;
