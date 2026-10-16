export type Testimonial = {
  id: string
  clientName: string
  role?: string
  company?: string
  projectName?: string
  city: string
  rating: number
  message: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Nathalie Ekambi',
    company: 'Fako Land & Property',
    city: 'Buea, Cameroon',
    rating: 5,
    message: 'TEKMEN Innovation Solutions took our rough idea and turned it into a fully working platform in record time. Their team truly understood the problem we were trying to solve and built something our users love.',
    verified: true,
  },
  {
    id: 't-2',
    clientName: 'Jean-Pierre Mbarga',
    projectName: 'YCD Farmer Guide',
    city: 'Douala, Cameroon',
    rating: 5,
    message: 'From the first meeting, TEKMEN showed they care about the real problem — not just writing code. The result speaks for itself: our farmers now diagnose crop diseases with one photo.',
    verified: true,
  },
  {
    id: 't-3',
    clientName: 'Abigail Fonyuy',
    projectName: 'UB Campus Hub',
    city: 'Buea, Cameroon',
    rating: 5,
    message: 'As a student, I struggled to find past exams and campus info in one place. UB Campus Hub changed that completely. The app is fast, well-designed and exactly what we needed.',
    verified: true,
  },
  {
    id: 't-4',
    clientName: 'Emmanuel Tabi',
    company: 'NOORAXIS',
    city: 'Buea, Cameroon',
    rating: 5,
    message: 'Working with TEKMEN felt like working with a real partner, not a vendor. They were available, transparent, and proactive at every step. I would recommend them without hesitation.',
    verified: true,
  },
  {
    id: 't-5',
    clientName: 'Francis Ndip',
    company: 'Ndip Ventures',
    city: 'Douala, Cameroon',
    rating: 5,
    message: 'What impressed me most is that TEKMEN does not stop at prototypes. They deploy, test and support what they build. That level of commitment is rare.',
    verified: true,
  },
]
