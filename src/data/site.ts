// Edit this file to update global content. Local copies of both sister sites live in /public/sites.
export const LINKS = { agency: '/sites/agency/', innovation: '/sites/innovation/' }
export const contact = {
  whatsapp: '237674264026', whatsappDisplay: '+237 674 264 026',
  email: 'Tekmenrevolution@mail.com', location: 'Buea, Cameroon',
}
export const social = {
  linkedin: 'https://www.linkedin.com/in/steeve-zali-5a70b6379',
  github: 'https://github.com/TECHMAN237',
}
export const nav = [
  { to: '/', label: 'Home' }, { to: '/ecosystem', label: 'Ecosystem' }, { to: '/about', label: 'Our Story' },
  { to: '/team', label: 'Team' }, { to: '/community', label: 'Community' }, { to: '/contact', label: 'Contact' },
]
export type Branch = {
  id: 'agency' | 'innovation' | 'team' | 'community'
  title: string
  shortTitle: string
  tagline: string
  text: string
  capabilities: string[]
  cta: string
  to: string
  external: boolean
  image?: string
  tone: string
  icon: string
  position: 'top' | 'right' | 'bottom' | 'left'
  accent: string
}
export const branches: Branch[] = [
  {
    id: 'agency',
    title: 'TEKMEN Agency',
    shortTitle: 'Agency',
    tagline: 'Creative Identity & Digital Transformation',
    cta: 'Explore Agency',
    to: LINKS.agency,
    external: true,
    image: '/img/real/website.jpg',
    tone: 'from-[#162244] to-[#0B132B]',
    icon: 'Palette',
    position: 'top',
    accent: '#3B82F6',
    capabilities: ['Brand Identity & Graphic Design', 'UI/UX & Web Experiences', 'Video Production & Motion', 'Digital Campaigns'],
    text: 'Helping businesses build stronger digital identities through creative design, digital communication, and online presence.',
  },
  {
    id: 'innovation',
    title: 'TEKMEN Innovation Solutions',
    shortTitle: 'Innovation Solutions',
    tagline: 'Web, Mobile, AI & IoT Engineering',
    cta: 'Discover Innovation',
    to: LINKS.innovation,
    external: true,
    image: '/img/real/raydar1.jpg',
    tone: 'from-[#101E42] to-[#091024]',
    icon: 'Cpu',
    position: 'right',
    accent: '#38BDF8',
    capabilities: ['Custom Web & Mobile Platforms', 'Applied AI & Computer Vision', 'Connected IoT Hardware Systems', 'Enterprise Software Architecture'],
    text: 'Turning real-world problems into powerful digital products, intelligent systems, and innovative technology solutions.',
  },
  {
    id: 'team',
    title: 'TEKMEN Team',
    shortTitle: 'Team',
    tagline: 'Hackathons, Competitions & R&D',
    cta: 'Meet the Team',
    to: '/team',
    external: false,
    image: '/img/real/asw.jpg',
    tone: 'from-[#1A1F45] to-[#0B1228]',
    icon: 'Trophy',
    position: 'bottom',
    accent: '#6366F1',
    capabilities: ['International Hackathons', 'Innovation Challenges', 'Rapid Prototyping & Pitching', 'Cross-Disciplinary Engineering'],
    text: 'A team of ambitious innovators representing TEKMEN in hackathons, technology competitions, and innovation challenges.',
  },
  {
    id: 'community',
    title: 'TEKMEN Community',
    shortTitle: 'Community',
    tagline: 'Peer Learning, Mentorship & Collaboration',
    cta: 'Join the Community',
    to: '/community',
    external: false,
    image: '/img/real/jeunesse.jpg',
    tone: 'from-[#142242] to-[#0A1226]',
    icon: 'Users',
    position: 'left',
    accent: '#60A5FA',
    capabilities: ['8 Specialized Tech Domains', 'Collaborative Project Building', 'Peer Learning Circles', 'Technical Challenges & Meetups'],
    text: 'A growing community of technology enthusiasts learning, collaborating, building projects, and creating opportunities together.',
  },
]
