import React from 'react';
import { Plus } from 'lucide-react';
import { useContent } from '../i18n';

const FAQ: React.FC = () => {
  const c = useContent();

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
      </div>
    </section>
  );
};

export default FAQ;
