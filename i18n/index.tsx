import React, { createContext, useContext } from 'react';
import { dictionaries, type Content, type Locale } from './content';

export type { Content, Locale };

const PREF_KEY = 'flowops_locale';

/** `/en` and `/en/...` are the English document; everything else is French. */
export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'fr';
}

export function pathForLocale(locale: Locale): string {
  return locale === 'en' ? '/en/' : '/';
}

/** The article slug for a URL, or null on the home page. */
export function slugFromPath(pathname: string): string | null {
  const rest = pathname.replace(/^\/en(?=\/|$)/, '').replace(/^\/|\/$/g, '');
  return rest === '' || rest === 'index.html' ? null : rest;
}

/** Same article in the other language, so the switcher never drops the reader home. */
export function pathForLocaleAtSlug(locale: Locale, slug: string | null): string {
  const base = pathForLocale(locale);
  return slug ? `${base}${slug}/` : base;
}

export function rememberPreference(locale: Locale) {
  try {
    localStorage.setItem(PREF_KEY, locale);
  } catch {
    // ignore
  }
}

/**
 * Sends a first-time visitor whose browser prefers English from a French URL to
 * its English copy. Emitted as an inline <head> script by the Vite plugin so it
 * runs before the prerendered French page paints. It only fires when the visitor
 * has never chosen a language, so an explicit switch is never overridden.
 */
export const LOCALE_REDIRECT_SCRIPT = `(function(){try{var p=location.pathname;if(/^\\/en(\\/|$)/.test(p))return;if(localStorage.getItem('${PREF_KEY}'))return;var l=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language]).filter(function(x){return /^(fr|en)/i.test(x)})[0];if(l&&/^en/i.test(l))location.replace('/en'+(p==='/index.html'?'/':p)+location.search+location.hash)}catch(e){}})();`;

interface Route {
  locale: Locale;
  slug: string | null;
}

const RouteContext = createContext<Route>({ locale: 'fr', slug: null });

/**
 * The route is passed in rather than read from `window` inside components, so
 * the same tree renders at build time (prerender) and in the browser.
 */
export const RouteProvider: React.FC<Route & { children: React.ReactNode }> = ({
  locale,
  slug,
  children,
}) => <RouteContext.Provider value={{ locale, slug }}>{children}</RouteContext.Provider>;

export function useLocale(): Locale {
  return useContext(RouteContext).locale;
}

export function useSlug(): string | null {
  return useContext(RouteContext).slug;
}

export function useContent(): Content {
  return dictionaries[useContext(RouteContext).locale];
}

const CONTACT_EMAIL = 'patrice@flow-ops.pro';

export function mailtoHref(subject: string, body?: string): string {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (body) query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${query.join('&')}`;
}
