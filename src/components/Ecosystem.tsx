import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { branches, type Branch } from '../data/site'
import { PILLAR_VISUALS, VISUALS } from '../data/visuals'
import { Container, Reveal, SectionHead, Tilt, Cta, DarkBackdrop, icons } from './ui'

export function BranchCard({ b }: { b: Branch }) {
  const Icon = icons[b.icon]
  const visual = PILLAR_VISUALS[b.id] || b.image
  const body = (
    <>
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${b.tone}`}>
        {visual && (
          <img
            src={visual}
            alt={b.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/90 via-[#070C1D]/25 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider text-cyan-hi uppercase">{b.shortTitle}</span>
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-[#070C1D]/70 text-white backdrop-blur-md">
            <Icon size={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy">{b.title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">{b.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
        <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
          {b.capabilities.slice(0, 2).join(' · ')}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
          {b.cta}
          <ArrowUpRight size={16} className="transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </>
  )
  const cls = 'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-royal/30 hover:shadow-xl'
  return b.external ? <a href={b.to} className={cls}>{body}</a> : <Link to={b.to} className={cls}>{body}</Link>
}

const ORBIT_COORDS: Record<Branch['position'], { x: number; y: number; posClass: string }> = {
  top: {
    x: 520,
    y: 92,
    posClass: 'left-1/2 top-2 -translate-x-1/2',
  },
  right: {
    x: 880,
    y: 350,
    posClass: 'right-2 top-1/2 -translate-y-1/2',
  },
  bottom: {
    x: 520,
    y: 608,
    posClass: 'left-1/2 bottom-2 -translate-x-1/2',
  },
  left: {
    x: 160,
    y: 350,
    posClass: 'left-2 top-1/2 -translate-y-1/2',
  },
}

function NodeLink({ b, children, className }: { b: Branch; children: React.ReactNode; className: string }) {
  return b.external ? (
    <a href={b.to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={b.to} className={className}>
      {children}
    </Link>
  )
}

export default function Ecosystem() {
  const [activeId, setActiveId] = useState<Branch['id']>('innovation')
  const activeBranch = branches.find(b => b.id === activeId) || branches[1]

  return (
    <section id="ecosystem-constellation" className="relative overflow-hidden bg-[#070C1D] py-24 text-white lg:py-28">
      {/* Dynamic subtle technology background that responds to the active ecosystem branch */}
      <DarkBackdrop src={VISUALS.networkConstellation} focus="center" intensity="balanced" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
        {branches.map(b => (
          <img
            key={b.id}
            src={PILLAR_VISUALS[b.id]}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              activeId === b.id ? 'opacity-[0.16]' : 'opacity-0'
            } saturate-[0.8]`}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_10%,rgba(7,12,29,0.88)_78%)]" />
      </div>

      <Container className="relative z-10">
        <SectionHead
          dark
          center
          eyebrow="The Ecosystem"
          title="One Central Vision. Four Connected Pillars."
          text="TEKMEN Revolution operates as an interconnected technology constellation — uniting digital creativity, engineering innovation, competitive excellence, and community growth."
        />

        {/* DESKTOP RADIAL / ORBITAL CONSTELLATION (lg and up) */}
        <div className="relative mx-auto hidden h-[700px] w-full max-w-[1040px] lg:block">
          {/* SVG Orbital Rings & Luminous Connection Lines */}
          <svg
            viewBox="0 0 1040 700"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="eco-center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2554D8" stopOpacity="0.32" />
                <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#070C1D" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient center aura */}
            <circle cx="520" cy="350" r="290" fill="url(#eco-center-glow)" />

            {/* Concentric orbital tracks */}
            <circle
              cx="520"
              cy="350"
              r="145"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeDasharray="3 8"
            />
            <circle
              cx="520"
              cy="350"
              r="258"
              fill="none"
              stroke="#67D4F0"
              strokeOpacity="0.12"
            />
            <circle
              cx="520"
              cy="350"
              r="330"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.05"
            />

            {/* Connection lines from Central Core (520, 350) to the 4 Pillars */}
            {branches.map((b, idx) => {
              const target = ORBIT_COORDS[b.position]
              const isActive = activeId === b.id
              return (
                <g key={b.id}>
                  {/* Base structural connection line */}
                  <line
                    x1="520"
                    y1="350"
                    x2={target.x}
                    y2={target.y}
                    stroke={isActive ? '#67D4F0' : '#3B82F6'}
                    strokeWidth={isActive ? '2.2' : '1.2'}
                    strokeOpacity={isActive ? '0.85' : '0.28'}
                    className="transition-all duration-300"
                  />
                  {/* Traveling light pulse along the connection line */}
                  <line
                    x1="520"
                    y1="350"
                    x2={target.x}
                    y2={target.y}
                    stroke={isActive ? '#ffffff' : '#67D4F0'}
                    strokeWidth={isActive ? '2.8' : '1.6'}
                    className="orbit-pulse"
                    style={{ animationDelay: `${idx * -0.85}s` }}
                  />
                  {/* Connection anchor dot on inner ring */}
                  <circle
                    cx={520 + (target.x - 520) * 0.36}
                    cy={350 + (target.y - 350) * 0.36}
                    r={isActive ? '4.5' : '3'}
                    fill={isActive ? '#67D4F0' : '#3B82F6'}
                    opacity={isActive ? '1' : '0.5'}
                  />
                </g>
              )
            })}
          </svg>

          {/* CENTRAL TEKMEN REVOLUTION CORE NODE */}
          <div className="
            absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2
            flex h-44 w-44 flex-col items-center justify-center rounded-full
            border border-white/20 bg-[#081128]/95 p-4 text-center shadow-[0_0_70px_rgba(37,84,216,0.38)]
            backdrop-blur-md transition-transform duration-300
          ">
            <div className="pointer-events-none absolute -inset-2.5 rounded-full border border-cyan-hi/25" aria-hidden />
            <img
              src="/img/logo.png"
              alt="TEKMEN Revolution Core"
              referrerPolicy="no-referrer"
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
            />
            <p className="mt-2.5 text-xs font-extrabold tracking-[0.14em] text-white uppercase">
              TEKMEN
            </p>
            <p className="text-[10px] font-medium tracking-widest text-cyan-hi uppercase">
              Revolution Core
            </p>
            <span className="mt-1.5 text-[10px] text-white/55">
              Connected to {activeBranch.shortTitle}
            </span>
          </div>

          {/* 4 ORBITAL PILLAR NODES (TOP: Agency, RIGHT: Innovation, BOTTOM: Team, LEFT: Community) */}
          {branches.map(b => {
            const Icon = icons[b.icon]
            const isActive = activeId === b.id
            const coords = ORBIT_COORDS[b.position]
            const visual = PILLAR_VISUALS[b.id]

            return (
              <div
                key={b.id}
                onMouseEnter={() => setActiveId(b.id)}
                onFocus={() => setActiveId(b.id)}
                className={`absolute z-20 w-[296px] transition-all duration-200 ${coords.posClass} ${
                  isActive ? 'scale-[1.04]' : ' opacity-90 hover:opacity-100'
                }`}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border p-4 backdrop-blur-md transition-all duration-200 ${
                    isActive
                      ? 'border-cyan-hi/60 bg-[#0D1A3A]/95 shadow-[0_16px_48px_rgba(37,84,216,0.35)]'
                      : 'border-white/12 bg-[#091229]/85 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Circular image portal with subtle gradient border */}
                    <div
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-full p-[2px] transition-transform duration-300 ${
                        isActive
                          ? 'bg-gradient-to-tr from-royal via-cyan-hi to-white scale-105'
                          : 'bg-white/20 group-hover:bg-white/40'
                      }`}
                    >
                      <img
                        src={visual}
                        alt={b.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 grid h-5 w-5 place-items-center rounded-full bg-[#070C1D] text-cyan-hi ring-1 ring-white/20">
                        <Icon size={11} />
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold tracking-wider text-cyan-hi uppercase">
                        {b.shortTitle}
                      </p>
                      <h3 className="truncate text-sm font-extrabold text-white">
                        {b.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-white/65">
                        {b.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description & Direct Action CTA */}
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-white/75">
                    {b.text}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
                    <span className="text-[11px] text-white/50">
                      {isActive ? 'Active Pillar' : 'Hover to inspect'}
                    </span>
                    <NodeLink
                      b={b}
                      className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold text-cyan-hi transition hover:text-white"
                    >
                      {b.cta} <ArrowRight size={13} />
                    </NodeLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* MOBILE & TABLET INTERACTIVE CONSTELLATION FLOW (< lg) */}
        <div className="lg:hidden">
          {/* Central Core Header Node */}
          <div className="mx-auto mb-8 flex max-w-xs flex-col items-center rounded-2xl border border-white/15 bg-[#091229]/90 p-5 text-center backdrop-blur">
            <img
              src="/img/logo.png"
              alt="TEKMEN Revolution"
              referrerPolicy="no-referrer"
              className="h-14 w-14 rounded-full ring-2 ring-cyan-hi/40"
            />
            <p className="mt-2.5 text-sm font-extrabold tracking-wider text-white uppercase">
              TEKMEN Revolution Core
            </p>
            <p className="mt-1 text-xs text-white/65">
              Tap a connected pillar below to preview or explore
            </p>
          </div>

          <div className="relative space-y-4 before:absolute before:bottom-6 before:left-7 before:top-6 before:w-[1.5px] before:bg-gradient-to-b before:from-cyan-hi/60 before:via-royal/50 before:to-cyan-hi/60">
            {branches.map(b => {
              const Icon = icons[b.icon]
              const isActive = activeId === b.id
              const visual = PILLAR_VISUALS[b.id]
              return (
                <div
                  key={b.id}
                  onClick={() => setActiveId(b.id)}
                  className={`relative ml-12 overflow-hidden rounded-2xl border p-4 transition ${
                    isActive
                      ? 'border-cyan-hi/60 bg-[#0D1A3A]/95 shadow-xl'
                      : 'border-white/12 bg-[#091229]/85'
                  }`}
                >
                  {/* Node connector dot on mobile spine */}
                  <span
                    className={`absolute -left-[1.45rem] top-8 h-3 w-3 rounded-full ring-4 ring-[#070C1D] ${
                      isActive ? 'bg-cyan-hi' : 'bg-royal/60'
                    }`}
                    aria-hidden
                  />
                  <div className="flex items-center gap-3.5">
                    <img
                      src={visual}
                      alt={b.title}
                      referrerPolicy="no-referrer"
                      className="h-14 w-14 shrink-0 rounded-full border border-white/25 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-hi">
                        <Icon size={13} />
                        <span>{b.shortTitle}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-white">{b.title}</h3>
                      <p className="text-xs text-white/65">{b.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{b.text}</p>
                  <div className="mt-4">
                    <NodeLink
                      b={b}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-hi hover:underline"
                    >
                      {b.cta} <ArrowRight size={14} />
                    </NodeLink>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ACTIVE PILLAR DEEP-DIVE SPOTLIGHT PANEL */}
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#0A132C]/90 shadow-2xl backdrop-blur-md">
            <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_1.15fr] lg:p-10">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/12 bg-[#070C1D]">
                <img
                  key={activeBranch.id}
                  src={PILLAR_VISUALS[activeBranch.id]}
                  alt={activeBranch.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/85">
                  <span className="font-semibold tracking-wider text-cyan-hi uppercase">
                    {activeBranch.title}
                  </span>
                  <span>{activeBranch.tagline}</span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 border-b border-white/10 pb-4">
                  {branches.map(b => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setActiveId(b.id)}
                      className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                        activeId === b.id
                          ? 'bg-royal text-white shadow-sm'
                          : 'text-white/65 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {b.shortTitle}
                    </button>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
                  {activeBranch.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {activeBranch.text}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeBranch.capabilities.map(cap => (
                    <div key={cap} className="flex items-center gap-2 text-xs text-white/80">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-hi" aria-hidden />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Cta to={activeBranch.to}>{activeBranch.cta}</Cta>
                  <Cta to="/ecosystem" variant="ghost" arrow={false}>
                    View Full Ecosystem Overview
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
