import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import { members, type Member } from '../data/team'
import { Container, Reveal, SectionHead, Cta, Tilt } from './ui'
import { VISUALS } from '../data/visuals'

export function Avatar({ m, className = '' }: { m: Member; className?: string }) {
  if (m.photo) return <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" referrerPolicy="no-referrer" className={`object-cover object-top ${className}`} />
  const initials = m.name.split(' ').map(w => w[0]).slice(0, 2).join('')
  return <div className={`grid place-items-center grad-btn text-3xl font-extrabold text-white ${className}`} aria-label={m.name}>{initials}</div>
}

export function TeamMemberCard({ m }: { m: Member }) {
  return (
    <Link to={`/team/members/${m.id}`} className="group block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-royal/30 hover:shadow-xl">
      <div className="overflow-hidden"><Avatar m={m} className="aspect-[4/4.3] w-full transition duration-500 group-hover:scale-105" /></div>
      <div className="p-6">
        <p className="text-xs font-semibold tracking-wider text-royal uppercase">{m.role}</p>
        <h3 className="mt-2 text-lg font-bold text-navy">{m.name}</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">{m.expertise}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
      </div>
    </Link>
  )
}

export function TeamPreview({ limit = 4, showAll = true }: { limit?: number; showAll?: boolean }) {
  return (
    <section className="bg-mist py-24">
      <Container>
        <SectionHead eyebrow="TEKMEN Team" title="Driven by Talent. United by Innovation." text="Meet the people representing TEKMEN Revolution in the technology ecosystem." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {members.slice(0, limit).map((m, i) => <Reveal key={m.id} delay={i * 110} from="zoom"><Tilt><TeamMemberCard m={m} /></Tilt></Reveal>)}
        </div>
        {showAll && <div className="mt-10"><Cta to="/team/members">View All Members</Cta></div>}
      </Container>
    </section>
  )
}

export function FounderSection() {
  const founder = members.find(m => m.founder)!
  const others = members.filter(m => !m.founder)
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHead eyebrow="Leadership" title="The People Behind the Revolution." />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal from="left">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#070C1D] text-white shadow-xl">
              <Avatar m={founder} className="aspect-[4/4.1] w-full" />
              <div className="relative overflow-hidden p-7">
                <img
                  src={VISUALS.networkConstellation}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                  aria-hidden
                />
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-hi">Founder & CEO</p>
                  <h3 className="mt-1.5 text-2xl font-extrabold">Steeve Zali</h3>
                  <p className="text-sm text-white/60">Known as TECHMAN</p>
                  <p className="mt-3.5 text-sm leading-relaxed text-white/78">{founder.bio}</p>
                  {founder.linkedin && (
                    <a href={founder.linkedin} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-hi hover:text-white">
                      <Linkedin size={16} />LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid content-start gap-6 sm:grid-cols-2">
            {others.map((m, i) => (
              <Reveal key={m.id} delay={i * 90}>
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                  <Avatar m={m} className="aspect-[4/3.4] w-full" />
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wider text-royal uppercase">{m.role}</p>
                    <h3 className="mt-1.5 font-bold text-navy">{m.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <p className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500 sm:col-span-2">
              More collaborators can be added in <code>src/data/team.ts</code> — they appear here and on the Team pages automatically.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
