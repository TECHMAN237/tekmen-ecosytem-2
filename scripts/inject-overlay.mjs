// Adds the overlay <script> to the built copies of the sister sites (idempotent).
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
const tag = '<script defer src="/overlay/tekmen-overlay.js"></script>'
for (const site of ['agency', 'innovation']) {
  const f = `public/sites/${site}/index.html`
  if (!existsSync(f)) { console.log('missing', f); continue }
  let h = readFileSync(f, 'utf8')
  if (h.includes('tekmen-overlay.js')) { console.log(site, 'already injected'); continue }
  h = h.replace('</body>', `${tag}</body>`); writeFileSync(f, h); console.log(site, 'injected')
}
