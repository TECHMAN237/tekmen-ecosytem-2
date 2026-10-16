import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircle, X, Send } from 'lucide-react'
import { LINKS } from '../data/site'

type Action = { label: string; to: string }
type Rule = { keys: string[]; text: string; actions: Action[] }
const rules: Rule[] = [
  { keys: ['what is', 'tekmen revolution', 'about', 'who'], text: 'TEKMEN Revolution is an interconnected technology ecosystem with four pillars: TEKMEN Innovation Solutions (our primary technological & commercial growth engine), TEKMEN Agency, TEKMEN Team, and TEKMEN Community.', actions: [{ label: 'Explore the ecosystem', to: '/ecosystem' }, { label: 'Technology portfolio', to: '/portfolio' }] },
  { keys: ['portfolio', 'project', 'case study', 'built', 'work', 'rida', 'aplus', 'ub campus'], text: 'Explore what TEKMEN Innovation Solutions has built across web apps, mobile apps, applied AI, and platforms — including RIDA, Aplus, UB Campus Hub, YCD Farmer Guide, and more.', actions: [{ label: 'Explore portfolio', to: '/portfolio' }, { label: 'Build your app', to: '/contact?type=build' }] },
  { keys: ['service', 'offer', 'design', 'video', 'marketing', 'logo', 'brand'], text: 'TEKMEN Agency provides creative identity, video editing, web development, and digital marketing. TEKMEN Innovation Solutions turns real-world problems into custom web, mobile, AI, and IoT products.', actions: [{ label: 'Innovation solutions', to: '/portfolio' }, { label: 'TEKMEN Agency', to: LINKS.agency }] },
  { keys: ['build', 'mobile', 'app', 'application', 'website', 'platform', 'software', 'ai', 'iot', 'mvp'], text: 'For web apps, mobile apps, AI solutions, and IoT platforms, TEKMEN Innovation Solutions is our principal engineering engine. We turn ideas and business problems into scalable digital products.', actions: [{ label: 'Build your app', to: '/contact?type=build' }, { label: 'Browse portfolio', to: '/portfolio' }] },
  { keys: ['join', 'community', 'member', 'badge', 'learn'], text: 'You can register on the Community page and generate your official TEKMEN Community badge to join learning circles across 8 tech domains.', actions: [{ label: 'Join the community', to: '/community#join' }] },
  { keys: ['team', 'hackathon', 'compet', 'challenge'], text: 'TEKMEN Team is our competitive engineering arm: innovators representing TEKMEN in hackathons, innovation challenges, and R&D.', actions: [{ label: 'Meet the team', to: '/team' }] },
  { keys: ['collab', 'partner', 'contact', 'hire', 'work with', 'quote'], text: 'To collaborate or start a software project, reach out via WhatsApp or email from our project inquiry form.', actions: [{ label: 'Initiate a project', to: '/contact?type=build' }] },
]
const fallback: Rule = { keys: [], text: "I'm a guided assistant with pre-written answers. Explore our technology portfolio, learn about our pillars, or initiate a project directly with the team.", actions: [{ label: 'Portfolio', to: '/portfolio' }, { label: 'Build an app', to: '/contact?type=build' }, { label: 'Ecosystem', to: '/ecosystem' }] }
const chips = ['Explore Technology Portfolio', 'Build an App with TEKMEN', 'What is TEKMEN Revolution?', 'What services does Agency offer?', 'How can I join the community?', 'What is TEKMEN Team?']
type Msg = { from: 'bot' | 'me'; text: string; actions?: Action[] }

export function Assistant({ navigate }: { navigate: (to: string) => void }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: 'Hi! I help you find your way around the TEKMEN ecosystem. What would you like to know?' }])
  const [typing, setTyping] = useState(false); const end = useRef<HTMLDivElement>(null)
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [msgs, open, typing])
  const ask = (q: string) => {
    if (!q.trim()) return
    const l = q.toLowerCase(); const r = rules.find(x => x.keys.some(k => l.includes(k))) ?? fallback
    setMsgs(m => [...m, { from: 'me', text: q }]); setInput(''); setTyping(true)
    window.setTimeout(() => { setMsgs(m => [...m, { from: 'bot', text: r.text, actions: r.actions }]); setTyping(false) }, 650)
  }
  const go = (to: string) => { setOpen(false); navigate(to) }
  return (
    <>
      {open && (
        <div role="dialog" aria-label="TEKMEN AI guided assistant" className="pop fixed bottom-24 right-4 z-50 flex max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="grad-btn flex items-center justify-between px-4 py-3 text-white"><div><p className="text-sm font-bold">TEKMEN AI</p><p className="text-[11px] text-white/80">Guided assistant · pre-written answers, not a language model</p></div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button></div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-mist p-4">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'me' ? 'text-right' : ''}>
                <p className={`inline-block max-w-[88%] rounded-2xl px-3.5 py-2 text-left text-sm ${m.from === 'me' ? 'bg-royal text-white' : 'bg-white text-slate-700 shadow-sm'}`}>{m.text}</p>
                {m.actions && <div className="mt-2 flex flex-wrap gap-2">{m.actions.map(a => <button key={a.label} onClick={() => go(a.to)} className="rounded-full border border-royal px-3 py-1 text-xs font-semibold text-royal hover:bg-royal hover:text-white">{a.label}</button>)}</div>}
              </div>))}
            {msgs.length === 1 && <div className="flex flex-wrap gap-2">{chips.map(c => <button key={c} onClick={() => ask(c)} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:text-royal">{c}</button>)}</div>}
            {typing && <p className="inline-flex gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm" aria-label="Assistant is typing">{[0, 1, 2].map(i => <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-400" style={{ animation: `dots 1s ${i * 0.15}s infinite` }} />)}</p>}
            <div ref={end} />
          </div>
          <form onSubmit={e => { e.preventDefault(); ask(input) }} className="flex gap-2 border-t border-slate-200 p-3">
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about TEKMEN…" aria-label="Your question" className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-royal" />
            <button aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full grad-btn text-white"><Send size={16} /></button>
          </form>
        </div>)}
      <div className="fixed bottom-5 right-4 z-50"><span className="pulse-ring pointer-events-none absolute inset-0" aria-hidden />
      <button onClick={() => setOpen(o => !o)} aria-label="Open TEKMEN AI assistant" aria-expanded={open} className="relative flex items-center gap-2 rounded-full grad-btn px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-royal/30 transition hover:scale-105">
        <MessageCircle size={18} /><span className="hidden sm:inline">TEKMEN AI</span></button></div>
    </>
  )
}

export function HubAssistant() {
  const nav = useNavigate()
  return <Assistant navigate={to => (to.startsWith('/sites/') ? (window.location.href = to) : nav(to))} />
}
