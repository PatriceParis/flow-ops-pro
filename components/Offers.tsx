import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { mailtoHref, useContent } from '../i18n';

interface OffersProps {
  onOpenZcal: () => void;
}

const Offers: React.FC<OffersProps> = ({ onOpenZcal }) => {
  const c = useContent();
  const [scoping, monday, abx] = c.offers.tiers;

  const points = (items: string[], dark = false) => (
    <ul className="space-y-3 mb-8">
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex gap-3 text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          <Check className={`w-4 h-4 shrink-0 mt-1 ${dark ? 'text-emerald-400' : 'text-emerald-500'}`} />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section id="offres" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-5">{c.offers.title}</h2>
          <p className="text-slate-500 text-lg leading-relaxed">{c.offers.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900">{scoping.name}</h3>
            <p className="mt-4 text-3xl font-semibold text-slate-900 tracking-tight">{scoping.price}</p>
            <p className="text-sm text-slate-400 mb-6">{scoping.priceNote}</p>
            <p className="text-slate-700 leading-relaxed mb-6">{scoping.body}</p>
            {points(scoping.points)}
            <button
              onClick={onOpenZcal}
              className="mt-auto px-6 py-3.5 bg-white text-slate-900 font-semibold rounded-xl border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              {scoping.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white">{monday.name}</h3>
              <p className="mt-4 text-3xl font-semibold text-white tracking-tight">{monday.price}</p>
              <p className="text-sm text-slate-400 mb-6">{monday.priceNote}</p>
              <p className="text-slate-200 leading-relaxed mb-6">{monday.body}</p>
              {points(monday.points, true)}
              <button
                onClick={onOpenZcal}
                className="mt-auto px-6 py-3.5 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                {monday.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900">{abx.name}</h3>
            <p className="mt-4 text-3xl font-semibold text-slate-900 tracking-tight">{abx.price}</p>
            <p className="text-sm text-slate-400 mb-6">{abx.priceNote}</p>
            <p className="text-slate-700 leading-relaxed mb-6">{abx.body}</p>
            {points(abx.points)}
            <a
              href={mailtoHref(c.offers.quoteMailSubject)}
              className="mt-auto px-6 py-3.5 bg-white text-slate-900 font-semibold rounded-xl border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              {abx.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-600 max-w-3xl">{c.offers.sdrOption}</p>
        <p className="mt-3 text-sm text-slate-500 max-w-3xl">
          {c.offers.oneOff}{' '}
          <a
            href={mailtoHref(c.offers.oneOffMailSubject)}
            className="font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-600 transition-colors"
          >
            {c.offers.oneOffCta}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Offers;
