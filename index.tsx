import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { applyStoredConsent } from './consent';
import { RouteProvider, localeFromPath, slugFromPath } from './i18n';

applyStoredConsent();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const { pathname } = window.location;
const app = (
  <React.StrictMode>
    <RouteProvider locale={localeFromPath(pathname)} slug={slugFromPath(pathname)}>
      <App />
    </RouteProvider>
  </React.StrictMode>
);

// The production build ships prerendered markup to hydrate; the dev server
// serves an empty root to render into.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
