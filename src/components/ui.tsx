import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, BrainCircuit, BarChart3, Cloud, ShieldCheck, Network, Smartphone, Palette, Cpu, Trophy, Users } from 'lucide-react'

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
  return <span ref={ref}>{n}</span>
}

export function Tilt({ children, className = '', max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current; if (!el || reduced() || window.matchMedia('(hover: none)').matches) return
    const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateY(-4px)`
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
  return <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent" aria-hidden><div className="h-full origin-left grad-btn" style={{ transform: `scaleX(${p})` }} /></div>
}

export function Marquee({ children, reverse = false, className = '' }: { children: ReactNode; reverse?: boolean; className?: string }) {
  return <div className={`marquee-wrap overflow-hidden ${className}`} aria-hidden><div className={`marquee ${reverse ? 'rev' : ''}`}><div className="flex shrink-0 gap-4 pr-4">{children}</div><div className="flex shrink-0 gap-4 pr-4">{children}</div></div></div>
}

const isExternal = (to: string) => to.startsWith('/sites/') || to.startsWith('http') || to.startsWith('mailto:')
type Variant = 'primary' | 'ghost' | 'light' | 'dark'
const styles: Record<Variant, string> = {
  primary: 'grad-btn text-white shadow-lg shadow-royal/25 hover:brightness-110 hover:-translate-y-0.5 shine',
  ghost: 'border border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5',
  light: 'bg-white text-navy hover:bg-mist hover:-translate-y-0.5 shine',
  dark: 'border border-navy/15 text-navy hover:bg-navy hover:text-white hover:-translate-y-0.5',
}
export function Cta({ to, children, variant = 'primary', arrow = true, className = '' }: { to: string; children: ReactNode; variant?: Variant; arrow?: boolean; className?: string }) {
  const cls = `group/cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`
  const inner = <>{children}{arrow && <ArrowRight size={16} className="transition group-hover/cta:translate-x-1" />}</>
  return isExternal(to) ? <a href={to} className={cls}>{inner}</a> : <Link to={to} className={cls}>{inner}</Link>
}

export function SectionHead({ eyebrow, title, text, dark = false, center = false }: { eyebrow?: string; title: string; text?: string; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-10 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow-line mb-3 text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-cyan-hi' : 'text-royal'}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>}
    </Reveal>
  )
}
export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>

/** Dark neutral page header. `visuals` are real images shown as floating tilted cards (no blue tinted backgrounds). */
export function PageHero({ eyebrow, title, text, visuals, children }: { eyebrow: string; title: string; text: string; visuals?: string[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#0c1124] pt-32 pb-20 text-white">
      <div className="dotgrid absolute inset-0" aria-hidden />
      <div className="blob absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <div className="blob absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-royal/15 blur-3xl" style={{ animationDelay: '-7s' }} aria-hidden />
      <Container className={`relative ${visuals ? 'grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]' : ''}`}>
        <div>
          <p className="rise eyebrow-line in mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-hi">{eyebrow}</p>
          <h1 className="rise max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ animationDelay: '.1s' }}>{title}</h1>
          <p className="rise mt-5 max-w-2xl text-lg text-white/75" style={{ animationDelay: '.22s' }}>{text}</p>
          {children && <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.34s' }}>{children}</div>}
        </div>
        {visuals && (
          <div className="relative mx-auto hidden h-72 w-full max-w-sm lg:block" aria-hidden>
            {visuals.slice(0, 3).map((v, i) => (
              <img key={v} src={v} alt="" loading="eager" className="float absolute w-44 rounded-2xl border border-white/15 object-cover shadow-2xl" style={{ left: `${i * 26}%`, top: `${[6, 30, 0][i]}%`, aspectRatio: '1', rotate: `${[-7, 5, -2][i]}deg`, animationDelay: `${i * -2}s`, zIndex: i }} />
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
