import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Container, Reveal, SectionHead, Cta } from './ui'

export const steps = [
  { t: 'A spark', d: 'One person, passionate about technology, wanted to build something meaningful.' },
  { t: 'Others joined', d: 'People with the same ambition joined the journey — one Techman became several.' },
  { t: 'Different talents', d: 'Developers, designers and creators, each bringing different skills and ambitions.' },
  { t: 'One shared vision', d: 'Technology is not just code. It is solving problems and creating opportunities.' },
]
export default function Story({ full = false }: { full?: boolean }) {
  const ol = useRef<HTMLOListElement>(null); const [fill, setFill] = useState(0)
  useEffect(() => {
    const f = () => { const el = ol.current; if (!el) return; const r = el.getBoundingClientRect(); setFill(Math.max(0, Math.min(1, (window.innerHeight * 0.7 - r.top) / r.height))) }
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <section className="bg-white py-20">
      <Container className="grid gap-12 lg:grid-cols-2">
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
        <ol ref={ol} className="relative space-y-6 border-l-2 border-royal/15 pl-8">
          <span className="absolute -left-[2px] top-0 w-[2px] origin-top grad-btn" style={{ height: '100%', transform: `scaleY(${fill})` }} aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100} from="right">
              <li className="relative">
                <span className="absolute -left-[2.6rem] top-1 grid h-6 w-6 place-items-center rounded-full grad-btn text-[11px] font-bold text-white">{i + 1}</span>
                <h3 className="font-bold text-navy">{s.t}</h3><p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </li>
            </Reveal>
          ))}
          <li className="text-xs text-slate-400">Timeline is narrative only — add dated milestones once verified. <Link to="/about" className="underline">Our story</Link></li>
        </ol>
      </Container>
    </section>
  )
}
