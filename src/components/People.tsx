import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import { members, type Member } from '../data/team'
import { Container, Reveal, SectionHead, Cta, Tilt } from './ui'

export function Avatar({ m, className = '' }: { m: Member; className?: string }) {
  if (m.photo) return <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" className={`object-cover object-top ${className}`} />
  const initials = m.name.split(' ').map(w => w[0]).slice(0, 2).join('')
  return <div className={`grid place-items-center grad-btn text-3xl font-extrabold text-white ${className}`} aria-label={m.name}>{initials}</div>
}
export function TeamMemberCard({ m }: { m: Member }) {
  return (
    <Link to={`/team/members/${m.id}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden"><Avatar m={m} className="aspect-[4/4.3] w-full transition duration-500 group-hover:scale-105" /></div>
      <div className="p-5">
        <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">{m.role}</span>
        <h3 className="mt-3 font-bold text-navy">{m.name}</h3>
        <p className="mt-1 text-xs font-medium text-royal">{m.expertise}</p>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{m.bio}</p>
      </div>
    </Link>
  )
}
export function TeamPreview({ limit = 4, showAll = true }: { limit?: number; showAll?: boolean }) {
  return (
    <section className="bg-mist py-20">
      <Container>
        <SectionHead eyebrow="TEKMEN Team" title="Driven by Talent. United by Innovation." text="Meet the people representing TEKMEN Revolution in the technology ecosystem." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{members.slice(0, limit).map((m, i) => <Reveal key={m.id} delay={i * 110} from="zoom"><Tilt><TeamMemberCard m={m} /></Tilt></Reveal>)}</div>
        {showAll && <div className="mt-10"><Cta to="/team/members">View All Members</Cta></div>}
      </Container>
    </section>
  )
}
export function FounderSection() {
  const founder = members.find(m => m.founder)!
  const others = members.filter(m => !m.founder)
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHead eyebrow="Leadership" title="The People Behind the Revolution." />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal from="left">
            <div className="overflow-hidden rounded-3xl bg-navy text-white shadow-xl">
              <Avatar m={founder} className="aspect-[4/4.2] w-full" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-hi">Founder & CEO</p>
                <h3 className="mt-1 text-2xl font-extrabold">Steeve Zali</h3><p className="text-sm text-white/60">Known as TECHMAN</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{founder.bio}</p>
                {founder.linkedin && <a href={founder.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-cyan-hi"><Linkedin size={16} />LinkedIn</a>}
              </div>
            </div>
          </Reveal>
          <div className="grid content-start gap-5 sm:grid-cols-2">
            {others.map((m, i) => (
              <Reveal key={m.id} delay={i * 90}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Avatar m={m} className="aspect-[4/3.4] w-full" />
                  <div className="p-5"><h3 className="font-bold text-navy">{m.name}</h3><p className="text-xs font-semibold text-royal">{m.role}</p><p className="mt-2 text-sm text-slate-600">{m.bio}</p></div>
                </div>
              </Reveal>
            ))}
            <p className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500 sm:col-span-2">More collaborators can be added in <code>src/data/team.ts</code> — they appear here and on the Team pages automatically.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
