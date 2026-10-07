import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, BrainCircuit, BarChart3, Cloud, ShieldCheck, Network, Smartphone, Palette, Cpu, Trophy, Users } from 'lucide-react'
import { VISUALS } from '../data/visuals'

export const icons: Record<string, typeof Code2> = { Code2, BrainCircuit, BarChart3, Cloud, ShieldCheck, Network, Smartphone, Palette, Cpu, Trophy, Users }
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null); const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold })
    io.observe(el); return () => io.disconnect()
  }, [threshold])
  return [ref, on] as const
}

export function Reveal({ children, delay = 0, className = '', from = 'up' }: { children: ReactNode; delay?: number; className?: string; from?: 'up' | 'left' | 'right' | 'zoom' }) {
  const [ref, on] = useInView<HTMLDivElement>(0.12)
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${from === 'up' ? '' : from} ${on ? 'in' : ''} ${className}`}>{children}</div>
}

export function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const [ref, on] = useInView<HTMLSpanElement>(0.4); const [n, setN] = useState(0)
  useEffect(() => {
    if (!on) return; if (reduced()) { setN(to); return }
    let raf = 0; const t0 = performance.now()
    const tick = (t: number) => { const p = Math.min(1, (t - t0) / duration); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf)
  }, [on, to, duration])
  return <span ref={ref} className="tabular-nums">{n}</span>
}

export function Tilt({ children, className = '', max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current; if (!el || reduced() || window.matchMedia('(hover: none)').matches) return
    const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateY(-3px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt h-full ${className}`}>{children}</div>
}

export function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { const h = document.documentElement.scrollHeight - window.innerHeight; setP(h > 0 ? window.scrollY / h : 0) }
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return <div className="fixed inset-x-0 top-0 z-50 h-[2.5px] bg-transparent" aria-hidden><div className="h-full origin-left grad-btn" style={{ transform: `scaleX(${p})` }} /></div>
}

export function Marquee({ children, reverse = false, className = '' }: { children: ReactNode; reverse?: boolean; className?: string }) {
  return <div className={`marquee-wrap overflow-hidden ${className}`} aria-hidden><div className={`marquee ${reverse ? 'rev' : ''}`}><div className="flex shrink-0 gap-4 pr-4">{children}</div><div className="flex shrink-0 gap-4 pr-4">{children}</div></div></div>
}

/**
 * Layered atmospheric technology background for dark sections:
 * [TECHNOLOGY IMAGE] -> [SEMI-TRANSPARENT DEEP NAVY OVERLAY (30-40% image visibility)] -> [VIGNETTE & DIRECTIONAL SCRIM]
 */
export function DarkBackdrop({
  src,
  focus = 'left',
  intensity = 'balanced',
  eager = false,
}: {
  src: string
  focus?: 'left' | 'center' | 'right'
  intensity?: 'balanced' | 'subtle' | 'vivid'
  eager?: boolean
}) {
  const imgOpacity =
    intensity === 'vivid' ? 'opacity-[0.44]' : intensity === 'subtle' ? 'opacity-[0.26]' : 'opacity-[0.36]'
  const directionalScrim =
    focus === 'left'
      ? 'bg-gradient-to-r from-[#070C1D]/92 via-[#09122A]/72 to-[#070C1D]/52'
      : focus === 'right'
      ? 'bg-gradient-to-l from-[#070C1D]/92 via-[#09122A]/72 to-[#070C1D]/52'
      : 'bg-[radial-gradient(ellipse_at_center,rgba(9,18,42,0.74)_0%,rgba(7,12,29,0.62)_55%,rgba(7,12,29,0.92)_100%)]'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
      <img
        src={src}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        className={`h-full w-full object-cover object-center ${imgOpacity} contrast-[1.04] saturate-[0.85] transition-opacity duration-700`}
      />
      {/* Deep navy brand atmosphere layer */}
      <div className={`absolute inset-0 ${directionalScrim}`} />
      {/* Smooth top & bottom edge blending so rectangular boundaries never appear */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070C1D]/85 via-transparent to-[#070C1D]/90" />
      <div className="dotgrid absolute inset-0 opacity-60" />
    </div>
  )
}

const isExternal = (to: string) => to.startsWith('/sites/') || to.startsWith('http') || to.startsWith('mailto:')
type Variant = 'primary' | 'ghost' | 'light' | 'dark'
const styles: Record<Variant, string> = {
  primary: 'grad-btn text-white shadow-lg shadow-royal/20 ring-1 ring-white/15 hover:brightness-110 hover:-translate-y-0.5 shine',
  ghost: 'border border-white/25 bg-white/[0.04] text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5',
  light: 'bg-white text-navy shadow-md hover:bg-mist hover:-translate-y-0.5 shine',
  dark: 'border border-navy/15 text-navy hover:bg-navy hover:text-white hover:-translate-y-0.5',
}
export function Cta({ to, children, variant = 'primary', arrow = true, className = '' }: { to: string; children: ReactNode; variant?: Variant; arrow?: boolean; className?: string }) {
  const cls = `group/cta inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`
  const inner = <>{children}{arrow && <ArrowRight size={16} className="transition duration-200 group-hover/cta:translate-x-1" />}</>
  return isExternal(to) ? <a href={to} className={cls}>{inner}</a> : <Link to={to} className={cls}>{inner}</Link>
}

export function SectionHead({ eyebrow, title, text, dark = false, center = false }: { eyebrow?: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow-line mb-3 text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-cyan-hi' : 'text-royal'}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl [text-wrap:balance] ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-white/72' : 'text-slate-600'}`}>{text}</p>}
    </Reveal>
  )
}
export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>

/** Dark atmospheric page header with contextual technology background imagery and floating visual cards. */
export function PageHero({
  eyebrow,
  title,
  text,
  visuals,
  bgImage = VISUALS.heroEcosystem,
  children,
}: {
  eyebrow: string
  title: string
  text: string
  visuals?: string[]
  bgImage?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-[#070C1D] pt-32 pb-22 text-white lg:pt-36 lg:pb-24">
      <DarkBackdrop src={bgImage} focus="left" intensity="balanced" eager />
      <div className="blob pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-royal/15 blur-3xl" aria-hidden />
      <Container className={`relative z-10 ${visuals ? 'grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]' : ''}`}>
        <div>
          <p className="rise eyebrow-line in mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-hi">{eyebrow}</p>
          <h1 className="rise max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl [text-wrap:balance]" style={{ animationDelay: '.1s' }}>{title}</h1>
          <p className="rise mt-5 max-w-2xl text-lg leading-relaxed text-white/75" style={{ animationDelay: '.2s' }}>{text}</p>
          {children && <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.3s' }}>{children}</div>}
        </div>
        {visuals && (
          <div className="relative mx-auto hidden h-72 w-full max-w-sm lg:block" aria-hidden>
            {visuals.slice(0, 3).map((v, i) => (
              <img
                key={v}
                src={v}
                alt=""
                loading="eager"
                referrerPolicy="no-referrer"
                className="float absolute w-44 rounded-2xl border border-white/15 object-cover shadow-2xl"
                style={{ left: `${i * 26}%`, top: `${[6, 30, 0][i]}%`, aspectRatio: '1', rotate: `${[-7, 5, -2][i]}deg`, animationDelay: `${i * -2}s`, zIndex: i }}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
