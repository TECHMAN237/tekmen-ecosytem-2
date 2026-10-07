import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Search, Linkedin, ArrowLeft, MessageCircle, Mail } from 'lucide-react'
import { PageHero, Container, Cta, SectionHead, Reveal, DarkBackdrop } from '../components/ui'
import Ecosystem, { BranchCard } from '../components/Ecosystem'
import Story from '../components/Story'
import { TeamPreview, TeamMemberCard, Avatar } from '../components/People'
import { TeamExperiences, ProjectGallery } from '../components/Impact'
import { CommunityDomains, CommunityBenefits, CommunityRegistration } from '../components/CommunityParts'
import { CommunityBand, FinalCta } from './Home'
import { JoinTeamBand, JoinTeamForm } from '../components/JoinTeam'
import { branches, contact } from '../data/site'
import { members } from '../data/team'
import { VISUALS, PILLAR_VISUALS } from '../data/visuals'

export function EcosystemPage() {
  return <>
    <PageHero
      eyebrow="Ecosystem"
      title="Four pillars. One connected ecosystem."
      text="Creative services, product innovation, competitive talent and community collaboration — each independent, all connected."
      bgImage={VISUALS.innovation}
      visuals={[PILLAR_VISUALS.agency, PILLAR_VISUALS.innovation, PILLAR_VISUALS.team]}
    />
    <Ecosystem />
    <section className="bg-mist py-20">
      <Container>
        <SectionHead
          eyebrow="All Branches"
          title="Direct Access to Each Pillar"
          text="Explore the dedicated platforms, portfolios, and hubs for each of TEKMEN Revolution's four branches."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b, i) => <Reveal key={b.id} delay={i * 80}><BranchCard b={b} /></Reveal>)}
        </div>
      </Container>
    </section>
    <ProjectGallery />
    <FinalCta />
  </>
}

export function AboutPage() {
  const ideas = [
    ['01. Technology', 'TEKMEN builds and uses technology to solve real-world problems across web, mobile, AI and IoT.'],
    ['02. People', 'TEKMEN brings together diverse engineering and creative talents and creates growth opportunities.'],
    ['03. Impact', 'TEKMEN transforms ambitious ideas into measurable results for organizations and communities.'],
  ]
  return <>
    <PageHero
      eyebrow="Our story"
      title="Every revolution starts with a spark."
      text="One Techman became several. Together, we build what comes next."
      bgImage={VISUALS.storyEvolution}
      visuals={['/img/techman.jpg', '/img/tato-einstein.jpg', '/img/yonta-beriot.jpg']}
    />
    <Story full />
    <section className="bg-mist py-20">
      <Container className="grid gap-6 md:grid-cols-3">
        {ideas.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-extrabold text-navy">{t}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{d}</p>
          </div>
        ))}
      </Container>
    </section>
    <FinalCta />
  </>
}

export function TeamPage() {
  return <>
    <PageHero
      eyebrow="TEKMEN Team"
      title="Driven by Talent. United by Innovation."
      text="Meet the people representing TEKMEN Revolution in the technology ecosystem."
      bgImage={VISUALS.team}
      visuals={[PILLAR_VISUALS.team, '/img/techman.jpg', '/img/yonta-beriot.jpg']}
    >
      <Cta to="/team/join">Join the Team</Cta>
      <Cta to="/team/members" variant="ghost" arrow={false}>View All Members</Cta>
    </PageHero>
    <TeamPreview limit={6} />
    <JoinTeamBand />
    <TeamExperiences />
    <CommunityBand />
  </>
}

export function MembersPage() {
  const [q, setQ] = useState(''); const [role, setRole] = useState('All')
  const roles = ['All', ...Array.from(new Set(members.map(m => m.role)))]
  const list = useMemo(() => members.filter(m => (role === 'All' || m.role === role) && (m.name + m.expertise).toLowerCase().includes(q.toLowerCase())), [q, role])
  return <>
    <PageHero
      eyebrow="TEKMEN Team"
      title="All Members"
      text="Search by name or filter by role. New members added in src/data/team.ts appear here automatically."
      bgImage={VISUALS.team}
    />
    <section className="bg-mist py-16"><Container>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1"><span className="sr-only">Search by name</span><Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name…" className="w-full rounded-full border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-royal" /></label>
        <label><span className="sr-only">Filter by role</span><select value={role} onChange={e => setRole(e.target.value)} className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm outline-none focus:border-royal sm:w-56">{roles.map(r => <option key={r}>{r}</option>)}</select></label>
      </div>
      {list.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(m => <TeamMemberCard key={m.id} m={m} />)}</div> : <p className="py-10 text-center text-slate-500">No members match your search.</p>}
    </Container></section>
    <JoinTeamBand />
  </>
}

export function MemberDetail() {
  const { id } = useParams(); const m = members.find(x => x.id === id)
  if (!m) return <><PageHero eyebrow="Team" title="Member not found" text="This profile doesn't exist." bgImage={VISUALS.team} /><Container className="py-12"><Cta to="/team/members">Back to all members</Cta></Container></>
  return <>
    <section className="relative overflow-hidden bg-[#070C1D] pt-28 pb-6 text-white">
      <DarkBackdrop src={VISUALS.team} focus="left" intensity="subtle" />
      <Container className="relative z-10">
        <Link to="/team/members" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"><ArrowLeft size={16} />All members</Link>
      </Container>
    </section>
    <section className="bg-white py-16"><Container className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr]">
      <Avatar m={m} className="aspect-[4/4.3] w-full rounded-3xl shadow-xl" />
      <div>
        <p className="text-xs font-semibold tracking-wider text-royal uppercase">{m.role}</p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy">{m.name}</h1>
        <p className="mt-2 font-semibold text-slate-600">{m.expertise}</p>
        <p className="mt-5 leading-relaxed text-slate-600">{m.bio}</p>
        {m.linkedin && <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal hover:underline"><Linkedin size={16} />LinkedIn</a>}
      </div>
    </Container></section>
  </>
}

export function CommunityPage() {
  return <>
    <PageHero
      eyebrow="TEKMEN Community"
      title="Learn Together. Build Together. Grow Together."
      text="Join a growing network of technology enthusiasts, developers, innovators, and creators who share knowledge, build projects, and create opportunities."
      bgImage={VISUALS.community}
      visuals={[PILLAR_VISUALS.community, '/img/real/jeunesse.jpg', '/img/real/foumban.jpg']}
    >
      <Cta to="#join">Join Our Community</Cta>
    </PageHero>
    <CommunityDomains />
    <CommunityBenefits />
    <section className="bg-mist py-16"><Container><SectionHead eyebrow="Activities" title="Community activities" text="Workshops, online discussions, learning sessions, project collaborations, technical challenges and meetups are planned. None are presented as past events until they happen." /></Container></section>
    <CommunityRegistration />
  </>
}

export function ContactPage() {
  const [name, setName] = useState(''); const [msg, setMsg] = useState(''); const [err, setErr] = useState('')
  const send = (e: React.FormEvent) => {
    e.preventDefault(); if (name.trim().length < 2 || msg.trim().length < 10) { setErr('Please add your name and a message of at least 10 characters.'); return }
    setErr(''); window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hello TEKMEN, I'm ${name.trim()}.\n\n${msg.trim()}`)}`, '_blank', 'noopener')
  }
  const field = 'mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20'
  return <>
    <PageHero
      eyebrow="Contact"
      title="Let's build something together."
      text="Tell us about your idea, project or how you'd like to collaborate."
      bgImage={VISUALS.heroEcosystem}
    />
    <section className="bg-mist py-20"><Container className="grid gap-8 md:grid-cols-2">
      <form onSubmit={send} noValidate className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm">
        <label className="block text-sm font-semibold text-navy">Your name<input className={field} value={name} onChange={e => setName(e.target.value)} /></label>
        <label className="mt-4 block text-sm font-semibold text-navy">Message<textarea rows={5} className={field} value={msg} onChange={e => setMsg(e.target.value)} /></label>
        {err && <p role="alert" className="mt-2 text-xs font-medium text-red-600">{err}</p>}
        <button className="mt-5 inline-flex items-center gap-2 rounded-full grad-btn px-7 py-3 text-sm font-semibold text-white"><MessageCircle size={16} />Send via WhatsApp</button>
        <p className="mt-3 text-xs text-slate-500">This opens WhatsApp with your message prefilled. Nothing is sent until you press send there.</p>
      </form>
      <div className="space-y-4">
        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-lg"><Mail className="text-royal" /><div><p className="font-bold text-navy">Email</p><p className="text-sm text-slate-600">{contact.email}</p></div></a>
        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-lg"><MessageCircle className="text-royal" /><div><p className="font-bold text-navy">WhatsApp</p><p className="text-sm text-slate-600">{contact.whatsappDisplay}</p></div></a>
        <p className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm text-slate-600 shadow-sm"><strong className="text-navy">Based in</strong><br />{contact.location}</p>
      </div>
    </Container></section>
  </>
}

export function NotFound() {
  return <><PageHero eyebrow="404" title="Page not found" text="That page doesn't exist." bgImage={VISUALS.networkConstellation} /><Container className="py-12"><Cta to="/">Back home</Cta></Container></>
}

export function JoinTeamPage() {
  return <>
    <PageHero
      eyebrow="TEKMEN Team"
      title="Join the Team."
      text="Competitions, products and real clients — tell us what you can bring and we'll get back to you."
      bgImage={VISUALS.team}
      visuals={[PILLAR_VISUALS.team, '/img/real/raydar13.jpg', '/img/real/recruit.jpg']}
    />
    <section className="bg-mist py-20"><Container><Reveal><JoinTeamForm /></Reveal></Container></section>
  </>
}
