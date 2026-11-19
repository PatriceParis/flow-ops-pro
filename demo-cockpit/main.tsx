import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
import Cockpit from './Cockpit';

// A standalone demo: no tracker, no consent banner, no prerender. It is not
// part of the site's routes and is excluded from indexing.
ReactDOM.createRoot(document.getElementById('cockpit')!).render(
  <React.StrictMode>
    <Cockpit />
  </React.StrictMode>
);
