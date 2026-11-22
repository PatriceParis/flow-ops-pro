import React from 'react';
import { useContent } from '../i18n';

// A fictional Monday list, the one moment of colour in the hero. Built in code
// so it reads as the real deliverable, never as a stock illustration.
const HeroPreview: React.FC = () => {
  const p = useContent().hero.preview;
  return (
    <div className="w-full rounded-2xl bg-slate-900 text-left shadow-[0_24px_48px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
        <div>
          <p className="text-sm font-medium text-white">{p.date}</p>
          <p className="font-mono text-xs text-slate-400 mt-0.5">{p.count}</p>
        </div>
        <span className="font-mono text-xs text-slate-500">{p.label}</span>
      </div>
      <ol>
        {p.rows.map((row, i) => (
          <li key={row.company} className={`px-6 py-4 ${i > 0 ? 'border-t border-white/5' : 'bg-white/[0.03]'}`}>
            <div className="flex items-center gap-4">
              <span className="font-mono text-2xl font-medium text-white tabular-nums w-10 shrink-0">{row.score}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white sm:truncate">{row.company}</p>
                <p className="text-xs text-slate-400 sm:truncate mt-0.5">{row.signals}</p>
              </div>
              <span className="hidden sm:block w-20 h-1 rounded-full bg-white/10 overflow-hidden shrink-0">
                <span className="block h-full rounded-full bg-blue-400" style={{ width: `${row.score}%` }} />
              </span>
            </div>
            {row.reason && (
              <p className="mt-3 ml-14 text-xs leading-relaxed text-slate-300">
                <span className="text-blue-300">{p.reasonLabel}</span>
                {' · '}
                {row.reason}
              </p>
            )}
          </li>
        ))}
      </ol>
      <p className="px-6 py-3 border-t border-white/10 text-xs text-slate-500">{p.footer}</p>
    </div>
  );
};

export default HeroPreview;
