import Hero from '../components/Hero'
import Ecosystem from '../components/Ecosystem'
import Story from '../components/Story'
import { Impact, ProjectGallery, PosterMarquee, StatsBand, TechMarquee } from '../components/Impact'
import { FounderSection, TeamPreview } from '../components/People'
import { Container, Cta } from '../components/ui'

export function CommunityBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal to-violet py-20 text-white"><div className="blob absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden />
      <Container className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Your Next Opportunity Starts Here.</h2>
          <p className="mt-4 max-w-xl text-white/85">Connect with passionate technology enthusiasts, discover new ideas, develop your skills, and collaborate on meaningful projects.</p>
          <div className="mt-7"><Cta to="/community#join" variant="light">Become a Member</Cta></div>
        </div>
        <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72" aria-hidden>{['jeunesse', 'nationale', 'foumban'].map((n, i) => <img key={n} src={`/img/real/${n}.jpg`} alt="" loading="lazy" className="float absolute w-40 rounded-2xl border-4 border-white/80 object-cover shadow-2xl sm:w-44" style={{ left: `${i * 28}%`, top: `${[4, 26, 0][i]}%`, aspectRatio: '1', rotate: `${[-8, 5, -2][i]}deg`, animationDelay: `${i * -2}s`, zIndex: i }} />)}</div>
      </Container>
    </section>
  )
}
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0c1124] py-24 text-center text-white"><div className="dotgrid absolute inset-0" aria-hidden /><div className="blob absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <Container className="relative">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Be Part of What Comes Next.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">Whether you are a business, a developer, a creator, or simply passionate about technology, there is a place for you in the TEKMEN ecosystem.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Cta to="/ecosystem">Explore Our Ecosystem</Cta><Cta to="/community#join" variant="ghost" arrow={false}>Join TEKMEN Community</Cta></div>
      </Container>
    </section>
  )
}
export default function Home() {
  return <><Hero /><TechMarquee /><Ecosystem /><StatsBand /><Story /><PosterMarquee /><Impact /><ProjectGallery limit={3} /><CommunityBand /><FounderSection /><TeamPreview limit={3} /><FinalCta /></>
}
