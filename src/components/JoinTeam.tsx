import { useState } from 'react'
import { MessageCircle, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Reveal } from './ui'
import { contact } from '../data/site'

/** Big centered call-to-action to join the TEKMEN Team. */
export function JoinTeamBand() {
  return (
    <section className="relative overflow-hidden bg-[#0c1124] py-24 text-center text-white">
      <div className="dotgrid absolute inset-0" aria-hidden />
      <div className="blob absolute left-1/4 top-0 h-72 w-72 rounded-full bg-violet/25 blur-3xl" aria-hidden />
      <div className="blob absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-royal/20 blur-3xl" style={{ animationDelay: '-8s' }} aria-hidden />
      <Container className="relative">
        <Reveal from="zoom">
          <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl grad-btn"><Sparkles /></span>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-5xl">Ready to build with us?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">TEKMEN Team is made of builders who compete, ship and learn together. Tell us who you are and what you can bring.</p>
          <div className="relative mt-10 inline-block">
            <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
            <Link to="/team/join" className="shine relative inline-flex items-center gap-3 rounded-full grad-btn px-10 py-5 text-lg font-extrabold text-white shadow-2xl shadow-royal/40 transition hover:scale-105">Join the Team</Link>
          </div>
          <p className="mt-5 text-sm text-white/50">Takes about 2 minutes</p>
        </Reveal>
      </Container>
    </section>
  )
}

const skills = ['Web development', 'Mobile development', 'AI / Data', 'IoT / Hardware', 'UI/UX & Graphic design', 'Video & content', 'Marketing & communication']
export function JoinTeamForm() {
  const [f, setF] = useState({ name: '', contact: '', skill: '', why: '' }); const [err, setErr] = useState<Record<string, string>>({}); const [sent, setSent] = useState(false)
  const set = (k: string) => (e: { target: { value: string } }) => setF(p => ({ ...p, [k]: e.target.value }))
  const message = () => `Hello TEKMEN, I would like to join the TEKMEN Team.\n\nName: ${f.name.trim()}\nContact: ${f.contact.trim()}\nMain skill: ${f.skill}\n\nWhy I want to join:\n${f.why.trim()}`
  const validate = () => {
    const e: Record<string, string> = {}
    if (f.name.trim().length < 2) e.name = 'Please enter your full name.'
    if (f.contact.trim().length < 6) e.contact = 'Add an email or WhatsApp number so we can reply.'
    if (!f.skill) e.skill = 'Choose your main skill.'
    if (f.why.trim().length < 20) e.why = 'Tell us a little more (at least 20 characters).'
    setErr(e); return Object.keys(e).length === 0
  }
  const viaWhatsApp = (ev: React.FormEvent) => { ev.preventDefault(); if (!validate()) return; setSent(true); window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message())}`, '_blank', 'noopener') }
  const viaEmail = () => { if (!validate()) return; setSent(true); window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Join TEKMEN Team')}&body=${encodeURIComponent(message())}` }
  const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20'
  const E = ({ k }: { k: string }) => err[k] ? <p role="alert" className="mt-1 text-xs font-medium text-red-600">{err[k]}</p> : null
  return (
    <form onSubmit={viaWhatsApp} noValidate className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">Full name *<input className={field} value={f.name} onChange={set('name')} autoComplete="name" /><E k="name" /></label>
        <label className="text-sm font-semibold text-navy">Email or WhatsApp *<input className={field} value={f.contact} onChange={set('contact')} /><E k="contact" /></label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Main skill *<select className={field} value={f.skill} onChange={set('skill')}><option value="">Select…</option>{skills.map(s => <option key={s}>{s}</option>)}</select><E k="skill" /></label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Why do you want to join? *<textarea rows={4} maxLength={600} className={field} value={f.why} onChange={set('why')} /><E k="why" /></label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className="shine inline-flex flex-1 items-center justify-center gap-2 rounded-full grad-btn px-6 py-3 text-sm font-semibold text-white"><MessageCircle size={16} />Send via WhatsApp</button>
        <button type="button" onClick={viaEmail} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white"><Mail size={16} />Send via email</button>
      </div>
      <p className="mt-3 text-xs text-slate-500">This opens WhatsApp or your email app with your application prefilled. Nothing is sent until you press send there.{sent && <strong className="text-emerald-700"> Application opened — press send to finish.</strong>}</p>
    </form>
  )
}
