import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { applyStoredConsent } from './consent';
import { LocaleProvider, localeFromPath, redirectToPreferredLocale } from './i18n';

// A first-time English-speaking visitor is sent to /en/ before anything mounts,
// so the page is never rendered twice.
if (!redirectToPreferredLocale()) {
  applyStoredConsent();

  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Could not find root element to mount to');
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LocaleProvider locale={localeFromPath()}>
        <App />
      </LocaleProvider>
    </React.StrictMode>
  );
}
