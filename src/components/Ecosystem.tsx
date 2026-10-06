import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { branches, type Branch } from '../data/site'
import { Container, Reveal, SectionHead, Tilt, icons } from './ui'

export function BranchCard({ b }: { b: Branch }) {
  const Icon = icons[b.icon]
  const body = (
    <>
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${b.tone}`}>
        {b.image && <img src={b.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur"><Icon size={22} /></div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy">{b.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">{b.cta}<ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
      </div>
    </>
  )
  const cls = 'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl'
  return b.external ? <a href={b.to} className={cls}>{body}</a> : <Link to={b.to} className={cls}>{body}</Link>
}

export default function Ecosystem() {
  return (
    <section className="bg-mist py-20">
      <Container>
        <SectionHead eyebrow="The ecosystem" title="More Than a Company. A Complete Technology Ecosystem." text="TEKMEN Revolution combines four complementary branches — creative services, product innovation, competitive talent and a learning community." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b, i) => <Reveal key={b.id} delay={i * 110} from="zoom"><Tilt><BranchCard b={b} /></Tilt></Reveal>)}
        </div>
      </Container>
    </section>
  )
}
