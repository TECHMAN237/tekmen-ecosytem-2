import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/site'
import { Cta } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 24); f()
    window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav-in fixed inset-x-0 top-0 z-40 transition duration-200 ${solid || open ? 'border-b border-white/10 bg-[#070C1D]/92 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 text-white" aria-label="TEKMEN Revolution home">
          <img src="/img/logo.png" alt="" referrerPolicy="no-referrer" className="h-9 w-9 rounded-lg" />
          <span className="text-sm font-extrabold tracking-wide">TEKMEN <span className="font-medium text-white/75">Revolution</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `link-u px-4 py-2 text-sm font-medium transition ${isActive ? 'active text-white' : 'text-white/70 hover:text-white'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="hidden lg:block"><Cta to="/community#join" arrow={false} className="!py-2.5">Join Our Community</Cta></div>
        <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden" aria-label="Mobile">
          {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'} className="block rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/10">{n.label}</NavLink>)}
          <Cta to="/community#join" arrow={false} className="mt-3 w-full">Join Our Community</Cta>
        </nav>
      )}
    </header>
  )
}
