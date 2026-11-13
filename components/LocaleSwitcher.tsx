import React from 'react';
import { Languages } from 'lucide-react';
import {
  pathForLocaleAtSlug,
  rememberPreference,
  slugFromPath,
  useContent,
  useLocale,
} from '../i18n';

const LocaleSwitcher: React.FC = () => {
  const locale = useLocale();
  const c = useContent();
  const target = locale === 'fr' ? 'en' : 'fr';
  const href = pathForLocaleAtSlug(target, slugFromPath());

  // A full navigation, not a state flip: each language is its own document with
  // its own meta, canonical and structured data.
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    rememberPreference(target);
    window.location.href = href;
  };

  return (
    <a
      href={href}
      onClick={go}
      hrefLang={target}
      aria-label={c.nav.switchLabel}
      title={c.nav.switchLabel}
      className="flex items-center gap-1.5 px-2.5 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-xs font-bold tracking-wider"
    >
      <Languages className="w-4 h-4" />
      {c.nav.switchTo}
    </a>
  );
};

export default LocaleSwitcher;
