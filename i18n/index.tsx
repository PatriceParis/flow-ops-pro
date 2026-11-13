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

/** The article slug for the current URL, or null on the home page. */
export function slugFromPath(pathname: string = window.location.pathname): string | null {
  const rest = pathname.replace(/^\/en(?=\/|$)/, '').replace(/^\/|\/$/g, '');
  return rest === '' || rest === 'index.html' ? null : rest;
}

/** Same article in the other language, so the switcher never drops the reader home. */
export function pathForLocaleAtSlug(locale: Locale, slug: string | null): string {
  const base = pathForLocale(locale);
  return slug ? `${base === '/' ? '/' : base}${slug}/` : base;
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
  if (localeFromPath() !== 'fr') return false;
  if (storedPreference()) return false;
  if (!prefersEnglish()) return false;
  const target = pathForLocaleAtSlug('en', slugFromPath());
  window.location.replace(target + window.location.search + window.location.hash);
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
