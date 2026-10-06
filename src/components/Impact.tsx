import { Container, Reveal, SectionHead, Cta, CountUp, Marquee, Tilt } from './ui'
import { branches } from '../data/site'
import { domains } from '../data/community'
import { members } from '../data/team'
import { projects } from '../data/projects'
import { experiences } from '../data/team'

const activities = [
  { t: 'Technology projects', d: 'Web, mobile, AI and IoT products built for real needs.', img: '/img/real/raydar10.jpg' },
  { t: 'Hackathons & challenges', d: 'The team competes and submits to innovation challenges.', img: '/img/real/asw.jpg' },
  { t: 'Digital products', d: 'Platforms and apps shipped for clients and students.', img: '/img/real/website.jpg' },
]
export function Impact() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHead eyebrow="Impact & activities" title="What We Do, Together." text="Real work across projects, challenges and products. Statistics and event galleries will be added here only once they are verified." />
        <div className="grid gap-5 md:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.t} delay={i * 110} from={i === 1 ? 'up' : i === 0 ? 'left' : 'right'}>
              <div className="group relative h-64 overflow-hidden rounded-2xl">
                <img src={a.img} alt="" loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white"><h3 className="font-bold">{a.t}</h3><p className="mt-1 text-sm text-white/75">{a.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
export function ProjectGallery({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects
  return (
    <section className="bg-mist py-20">
      <Container>
        <SectionHead eyebrow="Featured projects" title="Selected Projects & Experiences" text="Real products from TEKMEN Innovation Solutions." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100} from="zoom">
              <Tilt><article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
                <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="aspect-video w-full object-cover" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">{p.category}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className="rounded-md bg-mist px-2 py-1 text-[11px] font-medium text-slate-600">{t}</span>)}</div>
                  <a href={p.to} className="mt-5 text-sm font-semibold text-royal hover:underline">View Project →</a>
                </div>
              </article>
            </Tilt></Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
export function TeamExperiences() {
  const [big, ...rest] = experiences
  const card = (e: typeof big, tall = false) => (
    <div className={`group relative overflow-hidden rounded-2xl ${tall ? 'min-h-[22rem] lg:row-span-2' : 'min-h-[10.5rem]'}`}>
      {e.image ? <img src={e.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" /> : <div className="absolute inset-0 bg-gradient-to-br from-[#2a3350] to-[#12172b]" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/5" />
      <div className="relative flex h-full flex-col justify-end p-5 text-white">
        <span className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">{e.category}</span>
        <h3 className="font-bold">{e.title}</h3><p className="mt-1 text-xs text-cyan-hi">{e.status}{e.placeholder ? ' — replace with verified content' : ''}</p>
        <p className="mt-2 text-sm text-white/80">{e.text}</p>
      </div>
    </div>
  )
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHead eyebrow="Team experiences" title="The Team, Through Its Work" text="Hackathons, competitions, technology events, innovation challenges, projects and achievements. Only verified entries are shown; placeholders are marked." />
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal from="left">{card(big, true)}</Reveal>
          <div className="grid gap-5">{rest.map((e, i) => <Reveal key={e.id} delay={(i + 1) * 110} from="right">{card(e)}</Reveal>)}</div>
        </div>
        <div className="mt-8"><Cta to={projects[0].to} variant="dark">See all projects</Cta></div>
      </Container>
    </section>
  )
}

const posters = ['flyer-service', 'website', 'video', 'jeunesse', 'nationale', 'festival', 'pub', 'raydar13', 'foumban', 'xmas', 'raydar16', 'recruit']
export function PosterMarquee() {
  return (
    <section className="overflow-hidden bg-[#0c1124] py-16 text-white">
      <Container><SectionHead dark eyebrow="TEKMEN Agency" title="Real creations, made for real clients." text="Posters, flyers and campaign visuals from the Agency's portfolio. Hover to pause." /></Container>
      <Marquee>{posters.map(n => <img key={n} src={`/img/real/${n}.jpg`} alt="" loading="lazy" className="h-64 w-auto rounded-xl object-cover shadow-xl transition hover:-translate-y-2 sm:h-72" />)}</Marquee>
      <Marquee reverse className="mt-4">{[...posters].reverse().map(n => <img key={n} src={`/img/real/${n}.jpg`} alt="" loading="lazy" className="h-44 w-auto rounded-xl object-cover opacity-80 transition hover:opacity-100 sm:h-52" />)}</Marquee>
    </section>
  )
}
export function StatsBand() {
  // Only factual counts of what this site actually lists.
  const items = [[branches.length, 'Pillars in the ecosystem'], [projects.length, 'Projects showcased'], [domains.length, 'Community domains'], [members.length, 'Team members listed']] as const
  return (
    <section className="border-y border-slate-200 bg-white py-10"><Container className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map(([n, l], i) => <Reveal key={l} delay={i * 90} className="text-center"><p className="text-4xl font-extrabold text-navy"><CountUp to={n} /></p><p className="mt-1 text-sm text-slate-500">{l}</p></Reveal>)}
    </Container></section>
  )
}
const techs = Array.from(new Set(projects.flatMap(p => p.tech)))
export function TechMarquee() {
  return <div className="border-y border-slate-200 bg-mist py-5"><Marquee>{techs.map(t => <span key={t} className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-600">{t}</span>)}</Marquee></div>
}
