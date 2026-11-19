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
                  <h3 className="font-bold text-slate-900 leading-snug">{row.company}</h3>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight tabular-nums">
                      {row.score}
                    </span>
                    <div className="flex-1 max-w-[140px]">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        {s.labelScore}
                      </span>
                      <span className="block h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                          style={{ width: `${row.score}%` }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1.5">
                      {s.labelSignals}
                    </dt>
                    <dd>
                      <ul className="space-y-1.5">
                        {row.signals.map((signal, j) => (
                          <li key={j} className="flex gap-2.5 text-slate-900 font-semibold">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </dd>
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

        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-8">
            {s.scoringTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {s.scoringParts.map((part, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                <span className="text-xs font-bold text-blue-600 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-bold text-slate-900 mt-2 mb-2">{part.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{part.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500 text-center max-w-2xl mx-auto leading-relaxed">
            {s.scoringRule}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListSample;
