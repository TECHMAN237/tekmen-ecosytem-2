import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Download, Clock, AlertCircle } from 'lucide-react'
import { domains, benefits, futureBadges } from '../data/community'
import { Container, Reveal, SectionHead, icons } from './ui'

export function CommunityDomains() {
  return (
    <section className="bg-mist py-24"><Container>
      <SectionHead eyebrow="Domains" title="Find Your Technology Domain" text="Pick the field you want to grow in. New domains can be added in src/data/community.ts." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((d, i) => { const Icon = icons[d.icon]; return (
          <Reveal key={d.id} delay={(i % 4) * 90} from="zoom"><div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-royal/35 hover:shadow-lg">
            <div className="grid h-11 w-11 place-items-center rounded-xl grad-btn text-white transition duration-200 group-hover:scale-105"><Icon size={20} /></div>
            <h3 className="mt-4 font-bold text-navy">{d.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{d.text}</p>
            {d.link && <a href={d.link} className="mt-3 inline-block text-sm font-semibold text-royal">Open group →</a>}
          </div></Reveal>) })}
      </div>
    </Container></section>
  )
}
export function CommunityBenefits() {
  return (
    <section className="bg-white py-24"><Container>
      <SectionHead eyebrow="Why join" title="Why Join TEKMEN Community?" text="What works today is marked Available. Everything else is a planned initiative, not an existing activity." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(b => (
          <div key={b.title} className={`rounded-2xl border p-6 ${b.status === 'available' ? 'border-royal/30 bg-royal/[0.03]' : 'border-slate-200/90'}`}>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase ${b.status === 'available' ? 'text-royal' : 'text-slate-400'}`}>
              {b.status === 'available' ? <CheckCircle2 size={14} /> : <Clock size={14} />}{b.status === 'available' ? 'Available' : 'Planned'}</span>
            <h3 className="mt-2.5 font-bold text-navy">{b.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.text}</p>
          </div>))}
      </div>
    </Container></section>
  )
}

/* ---------- Registration + badge (static: stored in this browser only) ---------- */
type Reg = { id: string; name: string; email: string; whatsapp: string; domain: string; level: string; interests: string[]; motivation: string; createdAt: string }
const KEY = 'tekmen.community.registrations'
const levels = ['Beginner', 'Intermediate', 'Advanced', 'Professional']
const genId = () => { const a = new Uint8Array(5); crypto.getRandomValues(a); return 'TKM-' + Array.from(a, n => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n % 32]).join('') }

export function MembershipBadge({ reg }: { reg: Reg }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return; const g = c.getContext('2d'); if (!g) return
    const W = 1080, H = 1350; c.width = W; c.height = H
    const bg = g.createLinearGradient(0, 0, W, H); bg.addColorStop(0, '#0B1533'); bg.addColorStop(1, '#25308f')
    g.fillStyle = bg; g.fillRect(0, 0, W, H)
    const glow = g.createRadialGradient(W * .85, H * .1, 10, W * .85, H * .1, 600); glow.addColorStop(0, 'rgba(118,84,232,.55)'); glow.addColorStop(1, 'rgba(118,84,232,0)')
    g.fillStyle = glow; g.fillRect(0, 0, W, H)
    g.fillStyle = '#fff'; g.beginPath(); g.roundRect(70, 70, W - 140, H - 140, 48); g.globalAlpha = .06; g.fill(); g.globalAlpha = 1
    g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 3; g.stroke()
    const draw = (img?: HTMLImageElement) => {
      if (img) { g.save(); g.beginPath(); g.arc(W / 2, 330, 120, 0, Math.PI * 2); g.clip(); g.drawImage(img, W / 2 - 120, 210, 240, 240); g.restore() }
      g.textAlign = 'center'; g.fillStyle = '#fff'; g.font = '800 54px Manrope, Arial'; g.fillText('TEKMEN REVOLUTION', W / 2, 560)
      g.fillStyle = '#5CD6F2'; g.font = '700 30px Manrope, Arial'; g.fillText('COMMUNITY MEMBER', W / 2, 620)
      g.fillStyle = '#fff'; let size = 84; g.font = `800 ${size}px Manrope, Arial`
      while (g.measureText(reg.name).width > W - 240 && size > 36) { size -= 4; g.font = `800 ${size}px Manrope, Arial` }
      g.fillText(reg.name, W / 2, 800)
      g.fillStyle = 'rgba(255,255,255,.75)'; g.font = '600 34px Manrope, Arial'; g.fillText(reg.domain, W / 2, 870)
      g.fillStyle = 'rgba(255,255,255,.12)'; g.beginPath(); g.roundRect(W / 2 - 230, 960, 460, 90, 45); g.fill()
      g.fillStyle = '#fff'; g.font = '800 40px ui-monospace, monospace'; g.fillText(reg.id, W / 2, 1020)
      g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '500 26px Manrope, Arial'; g.fillText('Joined ' + new Date(reg.createdAt).toLocaleDateString('en-GB'), W / 2, 1140)
      g.fillText('One Techman became several.', W / 2, 1190)
    }
    const img = new Image(); img.onload = () => draw(img); img.onerror = () => draw(); img.src = '/img/logo.png'
  }, [reg])
  const download = () => { const a = document.createElement('a'); a.download = `tekmen-badge-${reg.id}.png`; a.href = ref.current!.toDataURL('image/png'); a.click() }
  return (
    <div className="badge-in mx-auto w-full max-w-xs">
      <canvas ref={ref} className="h-auto w-full rounded-3xl shadow-2xl" aria-label={`TEKMEN Community badge for ${reg.name}`} />
      <button onClick={download} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full grad-btn px-6 py-3 text-sm font-semibold text-white"><Download size={16} />Get My Badge</button>
    </div>
  )
}

export function CommunityRegistration() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', domain: '', level: '', motivation: '' })
  const [interests, setInterests] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [reg, setReg] = useState<Reg | null>(null)
  const [storageError, setStorageError] = useState('')
  const set = (k: string) => (e: { target: { value: string } }) => setForm(f => ({ ...f, [k]: e.target.value }))
  const validate = () => {
    const e: Record<string, string> = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your full name (at least 2 characters).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Please enter a valid email address.'
    if (form.whatsapp && !/^\+?[0-9\s-]{8,16}$/.test(form.whatsapp.trim())) e.whatsapp = 'Use digits only, e.g. +237 6XX XXX XXX.'
    if (!form.domain) e.domain = 'Choose your main technology domain.'
    if (!form.level) e.level = 'Choose your experience level.'
    return e
  }
  const submit = async (ev: FormEvent) => {
    ev.preventDefault(); const e = validate(); setErrors(e); setStorageError(''); if (Object.keys(e).length) return
    setSaving(true); await new Promise(r => setTimeout(r, 250))
    const r: Reg = { id: genId(), name: form.name.trim(), email: form.email.trim(), whatsapp: form.whatsapp.trim(), domain: form.domain, level: form.level, interests, motivation: form.motivation.trim(), createdAt: new Date().toISOString() }
    try {
      const all: Reg[] = JSON.parse(localStorage.getItem(KEY) || '[]'); all.push(r); localStorage.setItem(KEY, JSON.stringify(all)); setReg(r)
    } catch { setStorageError('Your browser blocked local storage, so nothing could be saved and no badge was created. Try a normal (non-private) window.') }
    setSaving(false)
  }
  const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20'
  const Err = ({ k }: { k: string }) => errors[k] ? <p role="alert" className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600"><AlertCircle size={12} />{errors[k]}</p> : null
  return (
    <section id="join" className="scroll-mt-20 bg-white py-20"><Container>
      <SectionHead eyebrow="Join" title="Become a Member" text="Register below to get your digital TEKMEN Community badge." />
      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Static version:</strong> your registration is saved only in this browser on this device. It is <u>not</u> sent to TEKMEN yet — a backend will be connected later to make membership official.
      </div>
      {reg ? (
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-mist p-8 md:grid-cols-2">
          <div className="confetti pointer-events-none absolute inset-0" aria-hidden>{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ left: `${(i * 37) % 100}%`, background: ['#315FEA', '#7654E8', '#5CD6F2', '#f5b942'][i % 4], animationDelay: `${(i % 7) * 0.12}s`, animationDuration: `${1.8 + (i % 5) * 0.25}s` }} />)}</div>
          <div>
            <p className="flex items-center gap-2 font-bold text-emerald-700"><CheckCircle2 />Saved on this device</p>
            <h3 className="mt-3 text-2xl font-extrabold text-navy">Welcome, {reg.name.split(' ')[0]}.</h3>
            <p className="mt-2 text-slate-600">Your badge was generated from the details you entered. Member ID <strong className="font-mono">{reg.id}</strong>. Share it on LinkedIn or WhatsApp.</p>
            <button onClick={() => { setReg(null); setForm({ name: '', email: '', whatsapp: '', domain: '', level: '', motivation: '' }); setInterests([]) }} className="mt-6 text-sm font-semibold text-royal hover:underline">Register another member</button>
          </div>
          <MembershipBadge reg={reg} />
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <label className="text-sm font-semibold text-navy">Full name *<input className={field} value={form.name} onChange={set('name')} autoComplete="name" /><Err k="name" /></label>
          <label className="text-sm font-semibold text-navy">Email address *<input type="email" className={field} value={form.email} onChange={set('email')} autoComplete="email" /><Err k="email" /></label>
          <label className="text-sm font-semibold text-navy">WhatsApp number <span className="font-normal text-slate-400">(optional)</span><input className={field} value={form.whatsapp} onChange={set('whatsapp')} inputMode="tel" /><Err k="whatsapp" /></label>
          <label className="text-sm font-semibold text-navy">Main technology domain *<select className={field} value={form.domain} onChange={set('domain')}><option value="">Select…</option>{domains.map(d => <option key={d.id}>{d.title}</option>)}</select><Err k="domain" /></label>
          <label className="text-sm font-semibold text-navy">Experience level *<select className={field} value={form.level} onChange={set('level')}><option value="">Select…</option>{levels.map(l => <option key={l}>{l}</option>)}</select><Err k="level" /></label>
          <fieldset className="sm:col-span-2"><legend className="text-sm font-semibold text-navy">Areas of interest</legend>
            <div className="mt-2 flex flex-wrap gap-2">{domains.map(d => { const on = interests.includes(d.title); return (
              <button type="button" key={d.id} aria-pressed={on} onClick={() => setInterests(i => on ? i.filter(x => x !== d.title) : [...i, d.title])} className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${on ? 'border-royal bg-royal text-white' : 'border-slate-300 text-slate-600 hover:border-royal'}`}>{d.title}</button>) })}</div></fieldset>
          <label className="text-sm font-semibold text-navy sm:col-span-2">Short motivation <span className="font-normal text-slate-400">(optional)</span><textarea rows={3} maxLength={400} className={field} value={form.motivation} onChange={set('motivation')} /></label>
          {storageError && <p role="alert" className="text-sm font-medium text-red-600 sm:col-span-2">{storageError}</p>}
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">Privacy: details stay in your browser. They are not transmitted or shown publicly.</p>
            <button disabled={saving} className="rounded-full grad-btn px-8 py-3 text-sm font-semibold text-white disabled:opacity-60">{saving ? 'Saving…' : 'Join Our Community'}</button>
          </div>
        </form>
      )}
      <div className="mt-10 rounded-2xl bg-mist p-6"><h3 className="font-bold text-navy">Coming later: badge categories</h3><p className="mt-1 text-sm text-slate-600">Not issued yet — they need a real verification process first.</p>
        <div className="mt-3 flex flex-wrap gap-2">{futureBadges.map(b => <span key={b} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-500">{b}</span>)}</div></div>
    </Container></section>
  )
}
