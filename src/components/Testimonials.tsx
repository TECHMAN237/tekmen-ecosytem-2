import { Star, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { Container, SectionHead, Reveal, Cta } from './ui'

export function TestimonialsSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`py-24 ${dark ? 'relative overflow-hidden bg-[#070C1D] text-white' : 'bg-mist text-navy'}`}>
      <Container className="relative z-10">
        <SectionHead
          dark={dark}
          center
          eyebrow="Client & Partner Voices"
          title="Don't Just Take Our Word For It. Hear From Those We've Built With."
          text="Authentic feedback from partners, founders, and community stakeholders who have collaborated with TEKMEN Innovation Solutions to engineer real technology."
        />

        {/* Honest Future-Proof Trust Banner */}
        <div className={`mx-auto mb-12 max-w-2xl rounded-2xl border p-4.5 text-center backdrop-blur-sm sm:p-5 ${
          dark
            ? 'border-cyan-hi/25 bg-royal/10 text-white/90'
            : 'border-royal/20 bg-royal/[0.04] text-slate-700'
        }`}>
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-royal dark:text-cyan-hi">
            <Sparkles size={14} className="text-cyan-hi" />
            <span>Our story is still being written</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-white/80">
            Be among the visionary organizations shaping the next generation of technology with TEKMEN Innovation Solutions. We turn raw ideas into resilient, production-ready software.
          </p>
        </div>

        {/* Verified Testimonial Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 80} from="zoom">
              <div className={`flex h-full flex-col justify-between rounded-2xl border p-6 transition duration-200 hover:-translate-y-1 ${
                dark
                  ? 'border-white/12 bg-[#0A132C]/80 shadow-lg hover:border-cyan-hi/40'
                  : 'border-slate-200/90 bg-white shadow-sm hover:border-royal/30 hover:shadow-md'
              }`}>
                <div>
                  {/* Rating Stars & Verification Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'}
                        />
                      ))}
                    </div>
                    {t.verified && (
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                        dark
                          ? 'border border-cyan-hi/30 bg-cyan-hi/10 text-cyan-hi'
                          : 'border border-blue-200 bg-blue-50 text-royal'
                      }`}>
                        <ShieldCheck size={11} /> Verified
                      </span>
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <p className={`mt-4 text-sm leading-relaxed italic ${dark ? 'text-white/85' : 'text-slate-700'}`}>
                    "{t.message}"
                  </p>
                </div>

                {/* Author Metadata */}
                <div className={`mt-6 border-t pt-4 ${dark ? 'border-white/10' : 'border-slate-100'}`}>
                  <h4 className={`text-sm font-bold ${dark ? 'text-white' : 'text-navy'}`}>
                    {t.clientName}
                  </h4>
                  <p className={`text-xs ${dark ? 'text-cyan-hi' : 'text-royal'}`}>
                    {t.company ? t.company : t.projectName ? `Project: ${t.projectName}` : 'Technology Partner'}
                  </p>
                  <p className={`mt-0.5 text-[11px] ${dark ? 'text-white/50' : 'text-slate-400'}`}>
                    {t.city}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Conversion Action */}
        <div className="mt-12 text-center">
          <Cta to="/contact?type=build">
            Have an Idea? Let's Build It Together
          </Cta>
        </div>
      </Container>
    </section>
  )
}
