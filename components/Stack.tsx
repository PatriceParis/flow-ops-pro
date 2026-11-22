import React from 'react';
import {
  Archive,
  Briefcase,
  Building2,
  CalendarDays,
  Layers,
  MapPin,
  MousePointerClick,
  RefreshCw,
  SlidersHorizontal,
  ThumbsUp,
  UserPlus,
} from 'lucide-react';
import { useContent } from '../i18n';

// Same order as `stack.signals` and `stack.techPoints` in the dictionary.
const SIGNAL_ICONS = [
  MousePointerClick,
  UserPlus,
  Briefcase,
  Archive,
  MapPin,
  CalendarDays,
  ThumbsUp,
  Building2,
];
const TECH_ICONS = [Layers, SlidersHorizontal, RefreshCw];

const Stack: React.FC = () => {
  const c = useContent();

  return (
    <section id="stack" className="py-24 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-xs mb-3 block">
            {c.stack.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{c.stack.title}</h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">{c.stack.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.stack.signals.map((signal, idx) => {
            const Icon = SIGNAL_ICONS[idx];
            return (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{signal.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{signal.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-10">{c.stack.techTitle}</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {c.stack.techPoints.map((point, idx) => {
                const Icon = TECH_ICONS[idx];
                return (
                  <div key={idx}>
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{point.name}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{point.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
