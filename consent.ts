import { useSyncExternalStore } from 'react';
import posthog from 'posthog-js';

export type Consent = 'granted' | 'denied';

const STORAGE_KEY = 'flowops_consent';
const POSTHOG_TOKEN = 'phc_kL32svjiaBcDnDPzV97dVULNw7c2g5PppwZqrgdTSCYJ';

const listeners = new Set<() => void>();
let started = false;

function read(): Consent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function startAnalytics() {
  if (started) return;
  started = true;
  posthog.init(POSTHOG_TOKEN, {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2025-05-24',
  });
}

function purgeAnalyticsStorage() {
  try {
    Object.keys(localStorage)
      .filter((k) => k.includes(POSTHOG_TOKEN))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
  const expiry = 'Thu, 01 Jan 1970 00:00:00 GMT';
  const name = `ph_${POSTHOG_TOKEN}_posthog`;
  document.cookie = `${name}=; expires=${expiry}; path=/`;
  [location.hostname, `.${location.hostname}`].forEach((domain) => {
    document.cookie = `${name}=; expires=${expiry}; path=/; domain=${domain}`;
  });
}

// A withdrawn consent must take the stored identifiers with it, not just stop
// collection. A live PostHog instance re-persists its device id asynchronously, so
// erasing the keys underneath it never sticks. Reload instead: on the next load
// consent is no longer granted, PostHog is never initialized, and the purge in
// applyStoredConsent runs with nothing left to fight it.
function stopAnalytics() {
  if (started) window.location.reload();
  else purgeAnalyticsStorage();
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private browsing or blocked storage: consent stays for this page view only.
  }
  if (value === 'granted') startAnalytics();
  else stopAnalytics();
  listeners.forEach((l) => l());
}

export function clearConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  stopAnalytics();
  listeners.forEach((l) => l());
}

export function applyStoredConsent() {
  if (read() === 'granted') startAnalytics();
  else purgeAnalyticsStorage();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, read, () => null);
}
