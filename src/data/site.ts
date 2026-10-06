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
export type Branch = { id: string; title: string; text: string; cta: string; to: string; external: boolean; image?: string; tone: string; icon: string }
export const branches: Branch[] = [
  { id: 'agency', title: 'TEKMEN Agency', cta: 'Explore Agency', to: LINKS.agency, external: true, image: '/img/real/website.jpg', tone: 'from-[#2a3350] to-[#161b2e]', icon: 'Palette',
    text: 'Helping businesses build stronger digital identities through creative design, digital communication, and online presence.' },
  { id: 'innovation', title: 'TEKMEN Innovation Solutions', cta: 'Discover Innovation', to: LINKS.innovation, external: true, image: '/img/real/raydar1.jpg', tone: 'from-navy to-ink', icon: 'Cpu',
    text: 'Turning real-world problems into powerful digital products, intelligent systems, and innovative technology solutions.' },
  { id: 'team', title: 'TEKMEN Team', cta: 'Meet the Team', to: '/team', external: false, image: '/img/real/asw.jpg', tone: 'from-violet to-[#5636c4]', icon: 'Trophy',
    text: 'A team of ambitious innovators representing TEKMEN in hackathons, technology competitions, and innovation challenges.' },
  { id: 'community', title: 'TEKMEN Community', cta: 'Join the Community', to: '/community', external: false, image: '/img/real/jeunesse.jpg', tone: 'from-[#2a3350] to-[#161b2e]', icon: 'Users',
    text: 'A growing community of technology enthusiasts learning, collaborating, building projects, and creating opportunities together.' },
]
