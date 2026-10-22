
import React from 'react';
import ReactDOM from 'react-dom/client';
import posthog from 'posthog-js';
import App from './App';

posthog.init('phc_kL32svjiaBcDnDPzV97dVULNw7c2g5PppwZqrgdTSCYJ', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2025-05-24',
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
