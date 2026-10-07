import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Container, Reveal, SectionHead, Cta } from './ui'
import { VISUALS } from '../data/visuals'

export const steps = [
  { t: '01. A Spark', d: 'One person, passionate about technology, wanted to build something meaningful.' },
  { t: '02. Others Joined', d: 'People with the same ambition joined the journey — one Techman became several.' },
  { t: '03. Different Talents', d: 'Developers, designers and creators, each bringing distinct engineering and creative skills.' },
  { t: '04. One Shared Vision', d: 'Technology is not just code. It is solving problems and creating real opportunities.' },
]

export default function Story({ full = false }: { full?: boolean }) {
  const ol = useRef<HTMLOListElement>(null); const [fill, setFill] = useState(0)
  useEffect(() => {
    const f = () => { const el = ol.current; if (!el) return; const r = el.getBoundingClientRect(); setFill(Math.max(0, Math.min(1, (window.innerHeight * 0.7 - r.top) / r.height))) }
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <section className="bg-white py-24">
      <Container className="grid items-start gap-14 lg:grid-cols-2">
        <Reveal from="left">
          <SectionHead eyebrow="Our story" title="One Techman Became Several." />
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>Every revolution begins with an idea.</p>
            <p>TEKMEN started with one person passionate about technology and the desire to build something meaningful. As others with the same ambition joined the journey, one Techman became several.</p>
            <p className="font-semibold text-navy">Different talents. One shared vision.</p>
            <p>Today, TEKMEN Revolution brings together people who believe that technology is not just about writing code. It is about solving problems, creating opportunities, and building a better future.</p>
          </div>
          {!full && <div className="mt-8"><Cta to="/about">Discover Our Story</Cta></div>}
        </Reveal>

        <div className="space-y-8">
          <Reveal from="right">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-navy shadow-lg">
              <img
                src={VISUALS.storyEvolution}
                alt="TEKMEN collaborative engineering and innovation"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="aspect-[16/9] w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/90 via-[#070C1D]/25 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs font-semibold tracking-wider text-cyan-hi uppercase">Evolution</p>
                <p className="mt-0.5 text-sm font-medium text-white/85">From an individual vision to a four-pillar technology ecosystem.</p>
              </div>
            </div>
          </Reveal>

          <ol ref={ol} className="relative space-y-6 border-l-2 border-royal/15 pl-8">
            <span className="absolute -left-[2px] top-0 w-[2px] origin-top grad-btn" style={{ height: '100%', transform: `scaleY(${fill})` }} aria-hidden />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 90} from="right">
                <li className="relative">
                  <span className="absolute -left-[2.6rem] top-1 grid h-6 w-6 place-items-center rounded-full grad-btn text-[11px] font-bold text-white tabular-nums">{i + 1}</span>
                  <h3 className="font-bold text-navy">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                </li>
              </Reveal>
            ))}
            <li className="text-xs text-slate-400">
              Timeline is narrative only — add dated milestones once verified. <Link to="/about" className="underline hover:text-royal">Our story</Link>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  )
}
