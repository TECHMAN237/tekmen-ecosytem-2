import { useEffect, useRef, useState } from 'react'
import { Cta, Container } from './ui'

const nodes = [
  { x: 240, y: 62, label: 'Agency', c: '#315FEA' }, { x: 418, y: 240, label: 'Innovation', c: '#5CD6F2' },
  { x: 240, y: 418, label: 'Team', c: '#7654E8' }, { x: 62, y: 240, label: 'Community', c: '#8aa4ff' },
]
const words = ['Build', 'Learn', 'Compete', 'Create']
function Typer() {
  const [i, setI] = useState(0); const [txt, setTxt] = useState(''); const [del, setDel] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTxt(words[0]); return }
    const w = words[i]; let t: number
    if (!del && txt === w) t = window.setTimeout(() => setDel(true), 1400)
    else if (del && txt === '') { setDel(false); setI((i + 1) % words.length) }
    else t = window.setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 55 : 95)
    return () => clearTimeout(t)
  }, [txt, del, i])
  return <span className="font-bold text-cyan-hi">{txt}<span className="caret" /></span>
}
export default function Hero() {
  const box = useRef<HTMLElement>(null); const fig = useRef<HTMLDivElement>(null)
  const move = (e: React.MouseEvent) => {
    const el = box.current; if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`)
    if (fig.current) fig.current.style.transform = `translate(${(x / r.width - 0.5) * -22}px, ${(y / r.height - 0.5) * -18}px)`
  }
  return (
    <section ref={box} onMouseMove={move} className="relative overflow-hidden bg-[#0c1124] pt-28 pb-16 text-white lg:pt-32 lg:pb-24" style={{ ['--mx' as string]: '70%', ['--my' as string]: '30%' }}>
      <div className="dotgrid absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(420px circle at var(--mx) var(--my), rgba(118,84,232,.16), transparent 70%)' }} aria-hidden />
      <div className="blob absolute -left-32 top-10 h-80 w-80 rounded-full bg-royal/20 blur-3xl" aria-hidden />
      <div className="blob absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet/20 blur-3xl" style={{ animationDelay: '-9s' }} aria-hidden />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="rise mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80">Building Technology. Empowering People. Creating Impact.</p>
          <h1 className="text-[2rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.1rem]">
            <span className="rise block" style={{ animationDelay: '.1s' }}>One Vision. Four Pillars.</span>
            <span className="rise shimmer-text block" style={{ animationDelay: '.25s' }}>Infinite Possibilities.</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/75" style={{ animationDelay: '.4s' }}>An ecosystem of creators, innovators, and technology enthusiasts building solutions, empowering people, and shaping the future.</p>
          <p className="rise mt-4 text-base text-white/60" style={{ animationDelay: '.5s' }}>Together, we <Typer /></p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.62s' }}>
            <Cta to="/ecosystem">Explore Our Ecosystem</Cta>
            <Cta to="/community#join" variant="ghost" arrow={false}>Join Our Community</Cta>
          </div>
        </div>
        <div ref={fig} className="mx-auto w-full max-w-md transition-transform duration-300 ease-out" aria-hidden>
          <svg viewBox="0 0 480 480" className="h-auto w-full">
            <defs><radialGradient id="core" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#7654E8" stopOpacity=".4" /><stop offset="100%" stopColor="#7654E8" stopOpacity="0" /></radialGradient></defs>
            <circle cx="240" cy="240" r="215" fill="url(#core)" />
            <g style={{ transformOrigin: '240px 240px', animation: 'spin-slow 60s linear infinite' }}>
              <circle cx="240" cy="240" r="178" fill="none" stroke="#fff" strokeOpacity=".14" strokeDasharray="2 10" />
              <circle cx="240" cy="62" r="4" fill="#5CD6F2" /><circle cx="418" cy="240" r="3" fill="#8aa4ff" /><circle cx="62" cy="240" r="3" fill="#7654E8" />
            </g>
            <circle cx="240" cy="240" r="120" fill="none" stroke="#fff" strokeOpacity=".07" />
            {nodes.map(n => <line key={n.label} x1="240" y1="240" x2={n.x} y2={n.y} stroke={n.c} strokeWidth="1.5" className="dash" opacity=".85" />)}
            <circle cx="240" cy="240" r="64" fill="#0B1533" stroke="#fff" strokeOpacity=".2" />
            <clipPath id="lg"><circle cx="240" cy="240" r="52" /></clipPath>
            <image href="/img/logo.png" x="188" y="188" width="104" height="104" clipPath="url(#lg)" />
            {nodes.map((n, i) => (
              <g key={n.label} className="float" style={{ animationDelay: `${i * 0.8}s` }}>
                <circle cx={n.x} cy={n.y} r="34" fill="#101A39" stroke={n.c} strokeWidth="2" />
                <circle cx={n.x} cy={n.y} r="6" fill={n.c} />
                <text x={n.x} y={n.y + 54} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">{n.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </Container>
    </section>
  )
}
