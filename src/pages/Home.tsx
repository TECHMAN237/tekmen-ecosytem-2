import Hero from '../components/Hero'
import Ecosystem from '../components/Ecosystem'
import Story from '../components/Story'
import { Impact, ProjectGallery, PosterMarquee, StatsBand, TechMarquee } from '../components/Impact'
import { FounderSection, TeamPreview } from '../components/People'
import { Container, Cta, DarkBackdrop } from '../components/ui'
import { VISUALS } from '../data/visuals'

export function CommunityBand() {
  return (
    <section className="relative overflow-hidden bg-[#070C1D] py-24 text-white">
      <DarkBackdrop src={VISUALS.community} focus="left" intensity="balanced" />
      <div className="blob pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-royal/15 blur-3xl" aria-hidden />
      <Container className="relative z-10 grid items-center gap-10 md:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="eyebrow-line in mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-hi">
            TEKMEN Community
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl [text-wrap:balance]">
            Your Next Opportunity Starts Here.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Connect with passionate technology enthusiasts, discover new ideas, develop your engineering and design skills, and collaborate on meaningful projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta to="/community#join">Become a Member</Cta>
            <Cta to="/community" variant="ghost" arrow={false}>Explore Domains</Cta>
          </div>
        </div>
        <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72" aria-hidden>
          {['jeunesse', 'nationale', 'foumban'].map((n, i) => (
            <img
              key={n}
              src={`/img/real/${n}.jpg`}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="float absolute w-40 rounded-2xl border border-white/20 object-cover shadow-2xl sm:w-44"
              style={{ left: `${i * 28}%`, top: `${[4, 26, 0][i]}%`, aspectRatio: '1', rotate: `${[-8, 5, -2][i]}deg`, animationDelay: `${i * -2}s`, zIndex: i }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#070C1D] py-28 text-center text-white">
      <DarkBackdrop src={VISUALS.storyEvolution} focus="center" intensity="balanced" />
      <div className="blob pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-royal/15 blur-3xl" aria-hidden />
      <Container className="relative z-10">
        <p className="mx-auto mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-hi">
          Join the Movement
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl [text-wrap:balance]">
          Be Part of What Comes Next.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/72">
          Whether you are a business seeking digital transformation, a software engineer, a creative designer, or passionate about technology, there is a place for you in the TEKMEN ecosystem.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Cta to="/ecosystem">Explore Our Ecosystem</Cta>
          <Cta to="/community#join" variant="ghost" arrow={false}>Join TEKMEN Community</Cta>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <StatsBand />
      <Ecosystem />
      <Story />
      <PosterMarquee />
      <Impact />
      <ProjectGallery limit={3} />
      <CommunityBand />
      <FounderSection />
      <TeamPreview limit={3} />
      <FinalCta />
    </>
  )
}
