import { createRoot } from 'react-dom/client'
import { ArrowLeft } from 'lucide-react'
import { Assistant } from './components/Assistant'
import css from './overlay.css?inline'

function Overlay() {
  return <>
    <a href="/ecosystem" aria-label="Back to TEKMEN Ecosystem" className="pop fixed bottom-5 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#0c1124]/95 px-5 py-3.5 text-sm font-bold text-white shadow-xl ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-[#101A39]">
      <ArrowLeft size={16} /> <span>Back to Ecosystem</span>
    </a>
    <Assistant navigate={to => { window.location.href = to }} />
  </>
}
function mount() {
  if (document.getElementById('tekmen-overlay-host')) return
  const host = document.createElement('div'); host.id = 'tekmen-overlay-host'
  host.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483000'
  document.body.appendChild(host)
  const root = host.attachShadow({ mode: 'open' })
  const style = document.createElement('style'); style.textContent = css + '\n:host{all:initial} .ov{font-family:"Manrope",ui-sans-serif,system-ui,sans-serif;pointer-events:none} .ov a,.ov button,.ov [role=dialog],.ov input{pointer-events:auto}'
  root.appendChild(style)
  const el = document.createElement('div'); el.className = 'ov'; root.appendChild(el)
  createRoot(el).render(<Overlay />)
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount()
