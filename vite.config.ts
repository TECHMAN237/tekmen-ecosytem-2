import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

// The two sister sites are static SPAs served from /sites/<name>/. This makes deep links
// (e.g. /sites/agency/services) fall back to that site's own index.html in dev & preview.
// On Vercel the same job is done by vercel.json.
function sisterSites(): Plugin {
  const mw = (root: string) => (req: any, _res: any, next: () => void) => {
    const url = (req.url || '').split('?')[0]
    const m = url.match(/^\/sites\/(agency|innovation)\/(.*)$/)
    if (m) {
      const file = join(root, 'sites', m[1], m[2])
      if (!(existsSync(file) && statSync(file).isFile())) req.url = `/sites/${m[1]}/index.html`
    }
    next()
  }
  return {
    name: 'sister-sites-fallback',
    configureServer: s => { s.middlewares.use(mw(join(s.config.root, 'public'))) },
    configurePreviewServer: s => { s.middlewares.use(mw(join(s.config.root, 'dist'))) },
  }
}
export default defineConfig({ plugins: [react(), tailwindcss(), sisterSites()] })
