import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HubAssistant } from './components/Assistant'
import { ScrollProgress } from './components/ui'
import Home from './pages/Home'
import { EcosystemPage, AboutPage, TeamPage, MembersPage, MemberDetail, JoinTeamPage, CommunityPage, ContactPage, NotFound } from './pages/Simple'

const titles: Record<string, string> = { '/': 'TEKMEN Revolution — One Vision. Four Pillars.', '/ecosystem': 'Ecosystem — TEKMEN Revolution', '/about': 'Our Story — TEKMEN Revolution', '/team': 'Team — TEKMEN Revolution', '/team/members': 'All Members — TEKMEN Revolution', '/team/join': 'Join the Team — TEKMEN Revolution', '/community': 'Community — TEKMEN Revolution', '/contact': 'Contact — TEKMEN Revolution' }
function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] ?? 'TEKMEN Revolution'
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50); else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
export default function App() {
  const { pathname } = useLocation()
  return <>
    <RouteEffects /><ScrollProgress /><Navbar />
    <main id="main" key={pathname} className="page-in"><Routes>
      <Route path="/" element={<Home />} /><Route path="/ecosystem" element={<EcosystemPage />} /><Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} /><Route path="/team/members" element={<MembersPage />} /><Route path="/team/join" element={<JoinTeamPage />} /><Route path="/team/members/:id" element={<MemberDetail />} />
      <Route path="/community" element={<CommunityPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFound />} />
    </Routes></main>
    <Footer /><HubAssistant />
  </>
}
