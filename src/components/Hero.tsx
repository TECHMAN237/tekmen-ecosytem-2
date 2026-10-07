import { useEffect, useRef, useState } from 'react'
import { Cta, Container, DarkBackdrop } from './ui'
import { PILLAR_VISUALS, VISUALS } from '../data/visuals'
import { branches } from '../data/site'

const nodes = [
  { id: 'agency', x: 240, y: 58, label: 'Agency', sub: 'Creative & Digital', c: '#3B82F6' },
  { id: 'innovation', x: 422, y: 240, label: 'Innovation', sub: 'Web, AI & IoT', c: '#38BDF8' },
  { id: 'team', x: 240, y: 422, label: 'Team', sub: 'Competitions & R&D', c: '#6366F1' },
  { id: 'community', x: 58, y: 240, label: 'Community', sub: 'Learning & Peers', c: '#60A5FA' },
] as const

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
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const move = (e: React.MouseEvent) => {
    const el = box.current; if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`)
    if (fig.current) fig.current.style.transform = `translate(${(x / r.width - 0.5) * -16}px, ${(y / r.height - 0.5) * -14}px)`
  }

  const activeBranch = branches.find(b => b.id === hoveredId)

  return (
    <section
      ref={box}
      onMouseMove={move}
      className="relative overflow-hidden bg-[#070C1D] pt-28 pb-20 text-white lg:pt-36 lg:pb-28"
      style={{ ['--mx' as string]: '70%', ['--my' as string]: '30%' }}
    >
      <DarkBackdrop src={VISUALS.heroEcosystem} focus="left" intensity="balanced" eager />
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: 'radial-gradient(460px circle at var(--mx) var(--my), rgba(37,84,216,.14), transparent 70%)' }}
        aria-hidden
      />
      <div className="blob pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-royal/15 blur-3xl" aria-hidden />
      <div className="blob pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet/12 blur-3xl" style={{ animationDelay: '-9s' }} aria-hidden />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p className="rise eyebrow-line in mb-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-hi">
            Building Technology · Empowering People · Creating Impact
          </p>
          <h1 className="text-[2.25rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem] [text-wrap:balance]">
            <span className="rise block" style={{ animationDelay: '.1s' }}>One Vision. Four Pillars.</span>
            <span className="rise shimmer-text mt-1 block" style={{ animationDelay: '.22s' }}>Infinite Possibilities.</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/75" style={{ animationDelay: '.35s' }}>
            An ecosystem of creators, engineers, and technology enthusiasts building real-world solutions, developing talent, and shaping the digital future from Buea, Cameroon.
          </p>
          <p className="rise mt-4 text-base text-white/65" style={{ animationDelay: '.45s' }}>
            Together, we <Typer />
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3.5" style={{ animationDelay: '.55s' }}>
            <Cta to="#ecosystem-constellation">Explore Our Ecosystem</Cta>
            <Cta to="/community#join" variant="ghost" arrow={false}>Join Our Community</Cta>
          </div>
        </div>

        <div ref={fig} className="mx-auto w-full max-w-[460px] transition-transform duration-300 ease-out">
          <svg viewBox="0 0 480 480" className="h-auto w-full overflow-visible" role="img" aria-label="TEKMEN Revolution four-pillar orbital constellation">
            <defs>
              <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2554D8" stopOpacity=".38" />
                <stop offset="65%" stopColor="#1E3A8A" stopOpacity=".12" />
                <stop offset="100%" stopColor="#070C1D" stopOpacity="0" />
              </radialGradient>
              <clipPath id="lg-core"><circle cx="240" cy="240" r="46" /></clipPath>
              {nodes.map(n => (
                <clipPath key={n.id} id={`hero-node-${n.id}`}>
                  <circle cx={n.x} cy={n.y} r="32" />
                </clipPath>
              ))}
            </defs>

            <circle cx="240" cy="240" r="220" fill="url(#core-glow)" />

            {/* Outer orbital ring */}
            <g style={{ transformOrigin: '240px 240px', animation: 'spin-slow 75s linear infinite' }}>
              <circle cx="240" cy="240" r="182" fill="none" stroke="#fff" strokeOpacity=".12" strokeDasharray="3 9" />
              <circle cx="240" cy="58" r="3" fill="#67D4F0" opacity=".6" />
              <circle cx="422" cy="240" r="3" fill="#93B4FF" opacity=".6" />
            </g>
            {/* Inner orbital ring */}
            <circle cx="240" cy="240" r="118" fill="none" stroke="#fff" strokeOpacity=".07" />

            {/* Connection lines & subtle light pulses */}
            {nodes.map((n, idx) => {
              const isHovered = hoveredId === n.id
              return (
                <g key={n.id}>
                  <line
                    x1="240"
                    y1="240"
                    x2={n.x}
                    y2={n.y}
                    stroke={isHovered ? '#67D4F0' : '#3B82F6'}
                    strokeWidth={isHovered ? '2.2' : '1.2'}
                    strokeOpacity={isHovered ? '0.85' : '0.32'}
                  />
                  <line
                    x1="240"
                    y1="240"
                    x2={n.x}
                    y2={n.y}
                    stroke={isHovered ? '#fff' : n.c}
                    strokeWidth={isHovered ? '2.5' : '1.8'}
                    className="orbit-pulse"
                    style={{ animationDelay: `${idx * -0.9}s` }}
                  />
                </g>
              )
            })}

            {/* Central TEKMEN Revolution Node */}
            <circle cx="240" cy="240" r="58" fill="#081026" stroke={hoveredId ? '#67D4F0' : '#3B82F6'} strokeOpacity={hoveredId ? '.65' : '.35'} strokeWidth="1.5" />
            <circle cx="240" cy="240" r="49" fill="#0B132B" stroke="#fff" strokeOpacity=".15" />
            <image href="/img/logo.png" x="194" y="194" width="92" height="92" clipPath="url(#lg-core)" />

            {/* Four Orbital Pillar Nodes */}
            {nodes.map((n, i) => {
              const isHovered = hoveredId === n.id
              return (
                <g
                  key={n.id}
                  className="float cursor-pointer"
                  style={{ animationDelay: `${i * 0.9}s` }}
                  onMouseEnter={() => setHoveredId(n.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => {
                    const el = document.getElementById('ecosystem-constellation')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isHovered ? '39' : '35'}
                    fill="#09122A"
                    stroke={isHovered ? '#67D4F0' : n.c}
                    strokeWidth={isHovered ? '2.5' : '1.75'}
                    strokeOpacity={isHovered ? '0.95' : '0.65'}
                  />
                  <image
                    href={PILLAR_VISUALS[n.id]}
                    x={n.x - 32}
                    y={n.y - 32}
                    width="64"
                    height="64"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#hero-node-${n.id})`}
                    opacity={isHovered ? '0.95' : '0.72'}
                  />
                  <circle cx={n.x} cy={n.y} r="32" fill="#070C1D" fillOpacity={isHovered ? '0.18' : '0.38'} />
                  <rect
                    x={n.x - 48}
                    y={n.y + 40}
                    width="96"
                    height="24"
                    rx="12"
                    fill="#070C1D"
                    fillOpacity=".85"
                    stroke="#fff"
                    strokeOpacity={isHovered ? '.3' : '.12'}
                  />
                  <text x={n.x} y={n.y + 56} textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700">
                    {n.label}
                  </text>
                </g>
              )
            })}
          </svg>
          <div className="mt-2 min-h-[2.25rem] text-center text-xs text-white/65 transition-opacity">
            {activeBranch ? (
              <span>
                <strong className="text-cyan-hi">{activeBranch.title}:</strong> {activeBranch.tagline}
              </span>
            ) : (
              <span>Hover any orbital pillar or scroll to explore the connected ecosystem</span>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
