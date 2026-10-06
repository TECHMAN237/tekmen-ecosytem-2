export const domains = [
  { id: 'swe', title: 'Software Engineering', icon: 'Code2', text: 'Web and backend foundations, clean code, shipping real products.' },
  { id: 'ai', title: 'Artificial Intelligence', icon: 'BrainCircuit', text: 'Applied AI, assistants, automation and computer vision.' },
  { id: 'data', title: 'Data Science', icon: 'BarChart3', text: 'Collect, clean, analyse and tell stories with data.' },
  { id: 'cloud', title: 'DevOps & Cloud', icon: 'Cloud', text: 'Deployment, CI/CD, hosting and reliable infrastructure.' },
  { id: 'sec', title: 'Cybersecurity', icon: 'ShieldCheck', text: 'Secure-by-default thinking and practical defensive skills.' },
  { id: 'net', title: 'Networking', icon: 'Network', text: 'How systems talk: protocols, connectivity and IoT links.' },
  { id: 'mob', title: 'Mobile Development', icon: 'Smartphone', text: 'Android and iOS apps that work well on real devices.' },
  { id: 'ux', title: 'UI/UX Design', icon: 'Palette', text: 'Interfaces people understand and enjoy using.' },
] as { id: string; title: string; icon: string; text: string; link?: string }[]
// status: 'available' only for what truly works today.
export const benefits = [
  { title: 'Register your interest & get a badge', status: 'available', text: 'Sign up on this site and generate your TEKMEN Community badge.' },
  { title: 'Knowledge sharing', status: 'planned', text: 'Members sharing what they learn.' },
  { title: 'Peer learning', status: 'planned', text: 'Learning circles by domain.' },
  { title: 'Collaborative projects', status: 'planned', text: 'Build real projects with other members.' },
  { title: 'Technical challenges', status: 'planned', text: 'Friendly challenges to sharpen skills.' },
  { title: 'Community events', status: 'planned', text: 'Workshops, meetups and online sessions.' },
  { title: 'TEKMEN opportunities', status: 'planned', text: 'A path toward TEKMEN activities and teams.' },
  { title: 'Networking', status: 'planned', text: 'Meet builders across disciplines.' },
]
export const futureBadges = ['Active Contributor', 'Project Builder', 'Event Participant', 'Community Mentor', 'Innovation Leader']
