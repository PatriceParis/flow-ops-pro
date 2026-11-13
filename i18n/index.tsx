import React, { createContext, useContext } from 'react';
import { dictionaries, type Content, type Locale } from './content';

export type { Content, Locale };

const PREF_KEY = 'flowops_locale';

/** `/en` and `/en/...` are the English document; everything else is French. */
export function localeFromPath(pathname: string = window.location.pathname): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'fr';
}

export function pathForLocale(locale: Locale): string {
  return locale === 'en' ? '/en/' : '/';
}

function storedPreference(): Locale | null {
  try {
    const v = localStorage.getItem(PREF_KEY);
    return v === 'fr' || v === 'en' ? v : null;
  } catch {
    return null;
  }
}

export function rememberPreference(locale: Locale) {
  try {
    localStorage.setItem(PREF_KEY, locale);
  } catch {
    // ignore
  }
}

function prefersEnglish(): boolean {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const first = langs.find((l) => /^(fr|en)/i.test(l));
  return !!first && /^en/i.test(first);
}

/**
 * Sends a first-time visitor to the document matching their browser language.
 * Only fires from the French root, only when they have never chosen a language
 * themselves, so an explicit switch is never overridden and no loop is possible.
 */
export function redirectToPreferredLocale(): boolean {
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return false;
  if (storedPreference()) return false;
  if (!prefersEnglish()) return false;
  window.location.replace('/en/' + window.location.search + window.location.hash);
  return true;
}

const LocaleContext = createContext<Locale>('fr');

export const LocaleProvider: React.FC<{ locale: Locale; children: React.ReactNode }> = ({
  locale,
  children,
}) => <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useContent(): Content {
  return dictionaries[useContext(LocaleContext)];
}
