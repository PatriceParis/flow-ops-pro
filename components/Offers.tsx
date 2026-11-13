
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useContent } from '../i18n';

interface OffersProps {
  onOpenZcal: () => void;
}

const Offers: React.FC<OffersProps> = ({ onOpenZcal }) => {
  const c = useContent();

  return (
    <section id="offres" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{c.offers.title}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Card */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[80px] z-0"></div>
            
            <div className="relative z-10 flex-grow">
              <div className="mb-10">
                <p className="text-slate-700 leading-relaxed text-lg">
                  {c.offers.introBefore}<span className="text-slate-900 font-bold">{c.offers.introHighlight}</span>{c.offers.introAfter}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <ul className="space-y-4">
                  {c.offers.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {c.offers.deliverables.slice(3).map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <button 
                  onClick={onOpenZcal}
                  className="btn-glow w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  {c.offers.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Option */}
          <div className="flex flex-col h-full">
            <div className="bg-slate-100/50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.offers.sideTitle}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {c.offers.sideBody}
                  </p>
                </div>
                
                <a
                  href={`mailto:patrice@flow-ops.pro?subject=${encodeURIComponent(c.offers.sideMailSubject)}`}
                  className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  {c.offers.sideCta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
