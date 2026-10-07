import { Container, Reveal, SectionHead, Cta, CountUp, Marquee, Tilt, DarkBackdrop } from './ui'
import { branches } from '../data/site'
import { domains } from '../data/community'
import { members } from '../data/team'
import { projects } from '../data/projects'
import { experiences } from '../data/team'
import { VISUALS } from '../data/visuals'

const activities = [
  { t: 'Technology projects', d: 'Web, mobile, AI and IoT products built for real needs.', img: VISUALS.innovation },
  { t: 'Hackathons & challenges', d: 'The team competes and submits to innovation challenges.', img: VISUALS.team },
  { t: 'Digital products & creative studio', d: 'Platforms, brand identities and apps shipped for clients and students.', img: VISUALS.agency },
]

export function Impact() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHead
          eyebrow="Impact & activities"
          title="What We Do, Together."
          text="Real work across engineering projects, innovation challenges and digital products. Statistics and event galleries are added here as they are verified."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.t} delay={i * 110} from={i === 1 ? 'up' : i === 0 ? 'left' : 'right'}>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm">
                <img
                  src={a.img}
                  alt={a.t}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/90 via-[#070C1D]/35 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold tracking-wider text-cyan-hi uppercase">0{i + 1}. Focus Area</p>
                  <h3 className="mt-1 text-lg font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/78">{a.d}</p>
                </div>
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
    <section className="bg-mist py-24">
      <Container>
        <SectionHead
          eyebrow="Featured projects"
          title="Selected Projects & Experiences"
          text="Real products and platforms engineered by TEKMEN Innovation Solutions."
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100} from="zoom">
              <Tilt>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-200 hover:border-royal/30 hover:shadow-xl">
                  <div className="relative aspect-video w-full overflow-hidden bg-navy">
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold tracking-wider text-royal uppercase">{p.category}</p>
                    <h3 className="mt-2 text-lg font-bold text-navy">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                    <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                      {p.tech.join(' · ')}
                    </p>
                    <a href={p.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
                      View Project →
                    </a>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function TeamExperiences() {
  const [big, ...rest] = experiences
  const card = (e: typeof big, tall = false) => (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-200/20 ${tall ? 'min-h-[24rem] lg:row-span-2' : 'min-h-[11.5rem]'}`}>
      <img
        src={e.image || VISUALS.team}
        alt={e.title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/92 via-[#070C1D]/55 to-[#070C1D]/20" />
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <p className="text-xs font-semibold tracking-wider text-cyan-hi uppercase">
          {e.category} <span aria-hidden="true">·</span> {e.status}{e.placeholder ? ' (replace with verified content)' : ''}
        </p>
        <h3 className="mt-1.5 text-lg font-bold">{e.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{e.text}</p>
      </div>
    </div>
  )
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHead
          eyebrow="Team experiences"
          title="The Team, Through Its Work"
          text="Hackathons, competitions, technology events, innovation challenges, projects and achievements. Only verified entries are shown; placeholders are marked."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal from="left">{card(big, true)}</Reveal>
          <div className="grid gap-6">{rest.map((e, i) => <Reveal key={e.id} delay={(i + 1) * 110} from="right">{card(e)}</Reveal>)}</div>
        </div>
        <div className="mt-9"><Cta to={projects[0].to} variant="dark">See all projects</Cta></div>
      </Container>
    </section>
  )
}

const posters = ['flyer-service', 'website', 'video', 'jeunesse', 'nationale', 'festival', 'pub', 'raydar13', 'foumban', 'xmas', 'raydar16', 'recruit']
export function PosterMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#070C1D] py-22 text-white">
      <DarkBackdrop src={VISUALS.agency} focus="left" intensity="balanced" />
      <div className="relative z-10">
        <Container>
          <SectionHead
            dark
            eyebrow="TEKMEN Agency"
            title="Real creations, made for real clients."
            text="Posters, brand identities, campaign visuals and web interfaces from the Agency's portfolio. Hover to pause."
          />
        </Container>
        <Marquee>
          {posters.map(n => (
            <img
              key={n}
              src={`/img/real/${n}.jpg`}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-64 w-auto rounded-xl border border-white/10 object-cover shadow-xl transition duration-300 hover:-translate-y-1.5 sm:h-72"
            />
          ))}
        </Marquee>
        <Marquee reverse className="mt-4">
          {[...posters].reverse().map(n => (
            <img
              key={n}
              src={`/img/real/${n}.jpg`}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-44 w-auto rounded-xl border border-white/10 object-cover opacity-80 transition duration-300 hover:opacity-100 sm:h-52"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export function StatsBand() {
  const items = [
    [branches.length, 'Pillars in the ecosystem'],
    [projects.length, 'Projects showcased'],
    [domains.length, 'Community domains'],
    [members.length, 'Core team leaders'],
  ] as const
  return (
    <section className="border-y border-slate-200/80 bg-white py-12">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {items.map(([n, l], i) => (
          <Reveal key={l} delay={i * 90} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight text-navy tabular-nums">
              <CountUp to={n} />
            </p>
            <p className="mt-1.5 text-sm font-medium text-slate-500">{l}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  )
}

const techs = Array.from(new Set(projects.flatMap(p => p.tech)))
export function TechMarquee() {
  return (
    <div className="border-b border-slate-200/80 bg-mist py-4">
      <Marquee>
        {techs.map(t => (
          <span key={t} className="whitespace-nowrap px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            {t} <span className="ml-4 text-slate-300" aria-hidden="true">·</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
