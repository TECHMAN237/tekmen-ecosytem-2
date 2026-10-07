import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, MessageCircle, MapPin } from 'lucide-react'
import { LINKS, contact, social, nav } from '../data/site'
import { Container, DarkBackdrop } from './ui'
import { VISUALS } from '../data/visuals'

export default function Footer() {
  const col = 'text-sm text-white/65 transition hover:text-white'
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070C1D] text-white">
      <DarkBackdrop src={VISUALS.networkConstellation} focus="center" intensity="subtle" />
      <Container className="relative z-10 grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src="/img/logo.png" alt="" referrerPolicy="no-referrer" className="h-10 w-10 rounded-lg" />
            <span className="font-extrabold tracking-tight">TEKMEN Revolution</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            One Techman became several. Together, we build what comes next.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/15">
              <Linkedin size={16} />
            </a>
            <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/15">
              <Github size={16} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white/90">Navigate</h3>
          <ul className="space-y-2.5">
            {nav.map(n => <li key={n.to}><Link className={col} to={n.to}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white/90">The four pillars</h3>
          <ul className="space-y-2.5">
            <li><a className={col} href={LINKS.agency}>TEKMEN Agency</a></li>
            <li><a className={col} href={LINKS.innovation}>TEKMEN Innovation Solutions</a></li>
            <li><Link className={col} to="/team">TEKMEN Team</Link></li>
            <li><Link className={col} to="/community">TEKMEN Community</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white/90">Contact</h3>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li className="flex items-center gap-2"><Mail size={14} /><a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex items-center gap-2"><MessageCircle size={14} /><a className="hover:text-white" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">{contact.whatsappDisplay}</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} />{contact.location}</li>
          </ul>
        </div>
      </Container>
      <div className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TEKMEN Revolution. All rights reserved. Building Technology. Empowering People. Creating Impact.
      </div>
    </footer>
  )
}
