import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code, 
  Sparkles, 
  X, 
  ArrowRight, 
  Info,
  Laptop,
  Smartphone,
  Cpu,
  Globe
} from 'lucide-react'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import { PageHero, Container, Cta, Reveal, Tilt, SectionHead } from '../components/ui'
import { VISUALS } from '../data/visuals'
import { TestimonialsSection } from '../components/Testimonials'

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Web Apps',
  'Mobile Apps',
  'AI Solutions',
  'Digital Platforms & IoT'
]

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projects
    return projects.filter(p => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <PageHero
        eyebrow="TEKMEN Innovation Solutions Portfolio"
        title="Don't Just Take Our Word For It. Explore What We've Built."
        text="A showcase of real software, web platforms, mobile apps, applied AI, and system architectures engineered by TEKMEN. Turning real-world problems into scalable technology."
        bgImage={VISUALS.innovation}
        visuals={[VISUALS.innovation, '/img/ub-campus-hub.jpg', '/img/fako-land-property.jpg']}
      >
        <Cta to="/contact?type=build">Build Your App</Cta>
        <Cta to="#projects-grid" variant="ghost" arrow={false}>Browse Projects</Cta>
      </PageHero>

      {/* FILTER BAR & PORTFOLIO GRID */}
      <section id="projects-grid" className="bg-mist py-20">
        <Container>
          {/* Header & Category Filter Buttons */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-line in text-xs font-bold uppercase tracking-[0.18em] text-royal">
                Verified Projects
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
                Engineering In Action
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in {activeCategory}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200/80">
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition duration-200 ${
                      isActive
                        ? 'bg-royal text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-navy'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, idx) => (
              <Reveal key={p.id} delay={(idx % 3) * 90} from="zoom">
                <Tilt>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:border-royal/40 hover:shadow-xl">
                    {/* Project Thumbnail Image with Category Badge */}
                    <div className="relative aspect-video w-full overflow-hidden bg-navy">
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070C1D]/80 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="rounded-full bg-[#070C1D]/80 px-2.5 py-1 font-semibold text-cyan-hi backdrop-blur-md">
                          {p.badgeCategory}
                        </span>
                        <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                          {p.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-navy group-hover:text-royal transition">
                          {p.name}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400">
                          {p.category}
                        </span>
                      </div>

                      {/* Problem Statement snippet */}
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {p.text}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                        {p.tech.map(t => (
                          <span
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(p)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:underline"
                        >
                          <Info size={14} /> View Case Study
                        </button>

                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-royal"
                          >
                            Visit Live <ExternalLink size={12} />
                          </a>
                        ) : (
                          <Link
                            to={`/contact?project=${encodeURIComponent(p.name)}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-hi/90 text-slate-600 hover:text-royal"
                          >
                            Discuss Project <ArrowRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection dark={true} />

      {/* STRATEGIC CONVERSION BANNER */}
      <section className="bg-white py-20 border-t border-slate-200/80">
        <Container className="text-center">
          <SectionHead
            center
            eyebrow="Turn Your Idea Into Reality"
            title="Have an Idea or a Real-World Problem to Solve?"
            text="TEKMEN Innovation Solutions designs, architects, and builds custom software, mobile apps, AI solutions, and IoT platforms. Let's discuss your technical roadmap."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Cta to="/contact?type=build">Build Your App with TEKMEN</Cta>
            <Cta to="/contact?type=consultation" variant="ghost" arrow={false} className="!border-slate-300 !text-slate-700 hover:!bg-slate-100">
              Request a Technical Consultation
            </Cta>
          </div>
        </Container>
      </section>

      {/* PROJECT CASE STUDY DETAIL MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070C1D]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy transition"
              aria-label="Close case study modal"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-royal">
                {selectedProject.badgeCategory}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {selectedProject.status}
              </span>
            </div>

            <h2 id="case-study-title" className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
              {selectedProject.name}
            </h2>

            {/* Thumbnail */}
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl bg-navy">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 5-Dimension Case Study Details */}
            <div className="mt-6 space-y-5 text-sm">
              {/* 1. Problem */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-royal/10 text-royal text-[10px]">1</span>
                  The Problem or Opportunity
                </h4>
                <p className="mt-1.5 text-slate-600 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* 2. Proposed Approach */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-royal/10 text-royal text-[10px]">2</span>
                  Proposed Technical Approach
                </h4>
                <p className="mt-1.5 text-slate-600 leading-relaxed">
                  {selectedProject.approach}
                </p>
              </div>

              {/* 3. Technology Solution */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-royal/10 text-royal text-[10px]">3</span>
                  Delivered Solution
                </h4>
                <p className="mt-1.5 text-slate-600 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* 4. Implementation & Key Features */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-royal/10 text-royal text-[10px]">4</span>
                  Key Features & Implementation
                </h4>
                <ul className="mt-2 space-y-1.5 text-slate-600">
                  {selectedProject.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Outcome or Status */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-royal/10 text-royal text-[10px]">5</span>
                  Outcome & Status
                </h4>
                <p className="mt-1.5 text-slate-600 leading-relaxed">
                  {selectedProject.outcome}
                </p>
                {selectedProject.verifiedNotes && (
                  <p className="mt-2 text-xs font-medium text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    {selectedProject.verifiedNotes}
                  </p>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Technologies Utilized
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span
                      key={t}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>

              <div className="flex gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Launch Live App <ExternalLink size={13} />
                  </a>
                )}
                <Link
                  to={`/contact?project=${encodeURIComponent(selectedProject.name)}`}
                  className="inline-flex items-center gap-1.5 rounded-full grad-btn px-5 py-2 text-xs font-bold text-white shadow"
                >
                  Discuss Similar Project <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
