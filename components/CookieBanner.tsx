import React from 'react';
import { Cookie } from 'lucide-react';
import { setConsent, useConsent } from '../consent';
import { useContent } from '../i18n';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const consent = useConsent();
  const c = useContent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label={c.cookies.title}
      className="fixed inset-x-0 bottom-0 z-[130] p-4 sm:p-6 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8">
        <div className="flex gap-4">
          <div className="hidden sm:flex w-11 h-11 shrink-0 bg-slate-50 rounded-xl items-center justify-center text-slate-400">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1">
            <h2 className="font-bold text-slate-900 mb-2">{c.cookies.title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              {c.cookies.body}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setConsent('denied')}
                className="flex-1 px-6 py-3 rounded-xl font-bold text-sm bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {c.cookies.refuse}
              </button>
              <button
                onClick={() => setConsent('granted')}
                className="flex-1 px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 transition-colors"
              >
                {c.cookies.accept}
              </button>
            </div>

            <button
              onClick={onOpenPrivacy}
              className="mt-4 text-xs text-slate-400 hover:text-slate-600 underline underline-offset-2 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              {c.cookies.more}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
