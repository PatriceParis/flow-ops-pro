// Renders the Open Graph images with headless Chromium.
// Run after changing the headline or the brand: `node scripts/og-image.mjs`
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const logo = 'data:image/png;base64,' + readFileSync(resolve(root, 'public/flow-ops-logo.png')).toString('base64');

const variants = [
  {
    file: 'og-image.png',
    headline: 'Chaque lundi, les entreprises à appeler.<br><span class="accent">Et la raison de l’appel.</span>',
    tagline: 'Conseil en prospection B2B, par Patrice Tord',
  },
  {
    file: 'og-image-en.png',
    headline: 'Every Monday, the companies to call.<br><span class="accent">And the reason for the call.</span>',
    tagline: 'B2B prospecting consultancy, by Patrice Tord',
  },
];

const page_html = (v) => `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;font-family:'Inter',sans-serif;background:#020617;
       position:relative;overflow:hidden;display:flex;flex-direction:column;
       justify-content:center;padding:84px 96px}
  .grid{position:absolute;inset:0;
        background-image:linear-gradient(to right,#1e293b 1px,transparent 1px),
                         linear-gradient(to bottom,#1e293b 1px,transparent 1px);
        background-size:48px 48px;opacity:.35}
  .glow1{position:absolute;top:-180px;right:-140px;width:620px;height:620px;
         background:rgba(0,210,255,.16);border-radius:50%;filter:blur(130px)}
  .glow2{position:absolute;bottom:-220px;left:-160px;width:580px;height:580px;
         background:rgba(0,78,146,.3);border-radius:50%;filter:blur(130px)}
  .inner{position:relative;z-index:10}
  .logo{height:52px;margin-bottom:52px;filter:brightness(0) invert(1)}
  h1{font-size:52px;line-height:1.12;font-weight:800;color:#fff;letter-spacing:-.025em;max-width:1008px}
  .accent{background:linear-gradient(135deg,#38bdf8,#00d2ff);-webkit-background-clip:text;
          -webkit-text-fill-color:transparent}
  p{margin-top:30px;font-size:27px;color:#94a3b8;max-width:840px}
  .foot{display:flex;align-items:center;gap:16px;font-size:21px;color:#64748b;
        font-weight:600;margin-top:52px}
  .dot{width:9px;height:9px;border-radius:50%;background:#22d3ee}
</style></head><body>
  <div class="grid"></div><div class="glow1"></div><div class="glow2"></div>
  <div class="inner">
    <img class="logo" src="${logo}">
    <h1>${v.headline}</h1>
    <p>${v.tagline}</p>
    <div class="foot"><span class="dot"></span><span>flow-ops.pro</span></div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const v of variants) {
  await page.setContent(page_html(v), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.screenshot({ path: resolve(root, 'public', v.file) });
  console.log(`wrote public/${v.file}`);
}

await browser.close();
