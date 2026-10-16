import { LINKS } from './site'

export type ProjectCategory = 'All Projects' | 'Web Apps' | 'Mobile Apps' | 'AI Solutions' | 'Digital Platforms & IoT'

export type Project = {
  id: string
  name: string
  category: 'Web Apps' | 'Mobile Apps' | 'AI Solutions' | 'Digital Platforms & IoT'
  badgeCategory: string
  problem: string
  approach: string
  solution: string
  keyFeatures: string[]
  outcome: string
  text: string
  image: string
  tech: string[]
  to: string
  liveUrl?: string
  status: string
  featured?: boolean
  verifiedNotes?: string
}

const innovationWorkUrl = LINKS.innovation + 'work'

export const projects: Project[] = [
  {
    id: 'rida',
    name: 'RIDA',
    category: 'Web Apps',
    badgeCategory: 'Technology Platform',
    status: 'In Development · Architecture Verified',
    featured: true,
    image: '/img/real/raydar1.jpg',
    tech: ['React', 'TypeScript', 'Node.js', 'REST API', 'Tailwind CSS'],
    problem: 'Organizations and operational teams face fragmented digital workflows, manual coordination overhead, and lack a unified technological system to track and manage organizational data securely.',
    approach: 'Designed a component-driven, modular platform architecture with rigorous state management, role-based workflows, and automated communication bridges.',
    solution: 'A modern, responsive web application engineered by TEKMEN Innovation Solutions to centralize operations, automate routine tasks, and deliver real-time operational clarity.',
    keyFeatures: [
      'Modular dashboard interface with real-time state tracking',
      'Secure data validation and role-based access workflows',
      'Extensible API architecture for cross-system coordination',
      'Responsive design engineered for desktop and mobile workstations',
    ],
    outcome: 'Core system architecture and interface prototypes completed. Client-specific media assets and production deployment URLs are undergoing final authorization prior to public deployment.',
    text: 'A specialized digital platform engineered by TEKMEN Innovation Solutions to turn complex organizational workflows into reliable, scalable software. Replaces the legacy Chmacha Safety entry in the public portfolio.',
    to: '/contact?project=RIDA',
    verifiedNotes: 'Architectural specifications and codebase verified. Live deployment and client media pending final authorization review.',
  },
  {
    id: 'aplus',
    name: 'Aplus Client Portfolio',
    category: 'Web Apps',
    badgeCategory: 'Web Showcase',
    status: 'Live in Production',
    featured: true,
    image: '/img/real/website.jpg',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'UI/UX Design'],
    problem: 'A high-profile client (Apollos / Aplus) required an exceptional digital showcase to articulate credentials, showcase creative work, and convert premium opportunities.',
    approach: 'Applied modern frontend craft — fluid physics-based transitions, responsive typography, and precision spatial hierarchy to create an unforgettable personal brand journey.',
    solution: 'A bespoke showcase website engineered with Next.js and Framer Motion, delivering high-fidelity visual performance, sub-second route transitions, and responsive polish.',
    keyFeatures: [
      'Interactive project exhibition with custom micro-animations',
      'Optimized Lighthouse performance and Core Web Vitals',
      'Adaptive layouts seamlessly responsive across smartphone, tablet, and desktop',
      'Direct client conversion touchpoints and social integration',
    ],
    outcome: 'Successfully delivered and deployed live on Vercel; actively functioning as the primary digital portfolio for the client.',
    text: 'A high-quality portfolio website delivered to a client (Apollos / Aplus), engineered with Next.js, fluid motion, and bespoke design systems.',
    liveUrl: 'https://portfolio-apollos.vercel.app/',
    to: 'https://portfolio-apollos.vercel.app/',
  },
  {
    id: 'ub',
    name: 'UB Campus Hub',
    category: 'Mobile Apps',
    badgeCategory: 'Mobile Platform',
    status: 'Live & In Use',
    featured: true,
    image: '/img/ub-campus-hub.jpg',
    tech: ['React Native', 'Expo', 'Supabase', 'Mapbox', 'React'],
    problem: 'University of Buea students juggle course materials, past exams, campus navigation, and critical announcements across dozens of scattered and unverified chat groups.',
    approach: 'Conducted field research among university students to consolidate academic resources, geospatial campus navigation, and peer alerts into a single cohesive platform.',
    solution: 'A mobile application bringing verified course repositories, a searchable past-exam archive, a live interactive campus map, and push notifications into one unified student portal, accompanied by a dedicated web portal.',
    keyFeatures: [
      'Searchable past examination archive categorized by faculty and level',
      'Geolocated campus mapping powered by Mapbox with lecture hall routing',
      'Real-time push announcements for academic deadlines and timetable shifts',
      'Offline-first caching for essential course materials on mobile devices',
    ],
    outcome: 'Actively deployed and utilized by students across faculties at the University of Buea; supplementary student portal running live.',
    text: 'Course materials, a past-exam archive, a live campus map, and push notifications in one app for University of Buea students.',
    liveUrl: 'https://student-portal-seven-nu.vercel.app/',
    to: 'https://student-portal-seven-nu.vercel.app/',
  },
  {
    id: 'ycd',
    name: 'YCD Farmer Guide',
    category: 'AI Solutions',
    badgeCategory: 'Applied AI',
    status: 'Innovation Track Finalist',
    featured: true,
    image: '/img/ycd-farmer-guide.jpg',
    tech: ['AI / Computer Vision', 'React', 'Node.js', 'AgriTech API'],
    problem: 'Smallholder farmers in rural agricultural corridors lack rapid crop disease diagnostics, leading to preventable crop loss and vulnerable market dependence.',
    approach: 'Trained and connected computer vision models to diagnose common leaf pathologies from mobile camera snapshots, paired with a transparent farmer-to-buyer marketplace.',
    solution: 'An agri-tech platform combining AI-driven visual disease identification, local agronomic treatment recommendations, and a direct marketplace connecting harvest yields with verified buyers.',
    keyFeatures: [
      'Single-photo crop disease diagnosis powered by computer vision',
      'Actionable agronomic treatment advice tailored to local farming conditions',
      'Farmer-to-buyer marketplace eliminating predatory intermediaries',
      'Low-bandwidth mobile web interface engineered for rural connectivity',
    ],
    outcome: 'Engineered for a national innovation funding track and praised by farming associations for practical accessibility and field reliability.',
    text: 'AI-based crop-disease diagnosis, a farmer-to-buyer marketplace, and expert advisory for smallholder farmers — engineered for a national innovation funding track.',
    to: innovationWorkUrl,
  },
  {
    id: 'fako',
    name: 'Fako Land & Property',
    category: 'Digital Platforms & IoT',
    badgeCategory: 'Digital Platform',
    status: 'Delivered Client Platform',
    featured: true,
    image: '/img/fako-land-property.jpg',
    tech: ['Web Platform', 'AI Property Finder', 'PostgreSQL', 'Tailwind CSS'],
    problem: 'Property seekers and landowners in the Fako region struggle with unverified land listings, opaque intermediary pricing, and fragmented geographic discovery.',
    approach: 'Built a verified property database with structured land verification safeguards and an AI-assisted search assistant that filters listings by budget, topography, and legal status.',
    solution: 'A real estate and land management platform featuring verified listings, landlord management dashboards, and an AI-powered property matcher that connects buyers and tenants faster.',
    keyFeatures: [
      'AI-assisted property and land matching based on custom requirements',
      'Land verification workflows to curb fraudulent listings',
      'Interactive neighborhood and zoning map filters across the Fako division',
      'Direct, auditable inquiry channels between buyers and property owners',
    ],
    outcome: 'Delivered for a regional property client, drastically speeding up qualified buyer-tenant discovery across the Fako region.',
    text: 'A real estate management platform featuring an AI-powered property finder to match buyers and tenants with verified listings faster.',
    to: innovationWorkUrl,
  },
  {
    id: 'noor',
    name: 'NOORAXIS Digital Platform',
    category: 'Digital Platforms & IoT',
    badgeCategory: 'Enterprise Architecture',
    status: 'End-to-End Build Plan',
    featured: true,
    image: '/img/nooraxis.jpg',
    tech: ['Platform Architecture', 'Enterprise UI/UX', 'Cloud Blueprint'],
    problem: 'The client needed a digital platform to structure and scale their operations online, without having an internal technology leadership team to frame and build it.',
    approach: 'Engaged in end-to-end technical advisory — from problem framing and system architecture diagrams to interactive UI prototypes and production deployment roadmap.',
    solution: 'A comprehensive digital platform designed and proposed end-to-end for NOORAXIS, delivering architectural blueprints, user journey mapping, and a structured implementation specification.',
    keyFeatures: [
      'Comprehensive system architecture blueprint and component hierarchy',
      'Operational workflows designed for multi-stakeholder management',
      'Technical specification document ready for modular rollout',
      'Brand-consistent UI/UX design system tailored for enterprise trust',
    ],
    outcome: 'Delivered on behalf of TEKMEN Revolution as a turnkey technological foundation for NOORAXIS operations.',
    text: 'A digital platform designed and proposed end-to-end for NOORAXIS — from problem framing to a structured build plan, delivered on behalf of TEKMEN Revolution.',
    to: innovationWorkUrl,
  },
  {
    id: 'xena',
    name: 'XENA AI Companion',
    category: 'AI Solutions',
    badgeCategory: 'Conversational AI',
    status: 'Live Interactive Demo',
    featured: false,
    image: '/img/real/raydar19.jpg',
    tech: ['React', 'Web Speech API', 'Conversational AI', 'Tailwind CSS'],
    problem: 'Students and fast-moving professionals face cognitive overload, struggling to keep track of daily priorities without an adaptive, hands-free assistant.',
    approach: 'Integrated browser-native speech synthesis and conversational intelligence to create a zero-friction voice assistant capable of hands-free task organization.',
    solution: 'An AI-powered voice and conversational assistant that listens, organizes daily schedules, answers contextual queries, and delivers voice-guided task reminders.',
    keyFeatures: [
      'Bi-directional voice interaction leveraging the Web Speech API',
      'Context-aware daily agenda organization and smart task prioritizer',
      'Fast client-side response with no cumbersome account setup required',
      'Lightweight, responsive interface optimized for mobile and desktop screens',
    ],
    outcome: 'Submitted and demonstrated for the AI Innovation Challenge 2026; live interactive demo deployed and operational.',
    text: 'An AI-powered personal assistant combining voice synthesis, conversational AI, and speech recognition to help organize tasks and daily schedules.',
    liveUrl: 'https://nexa-ai-2.vercel.app/',
    to: 'https://nexa-ai-2.vercel.app/',
  },
  {
    id: 'rock-attitude',
    name: 'Rock Attitude Architecture',
    category: 'Web Apps',
    badgeCategory: '3D Web Experience',
    status: 'Live Showcase',
    featured: false,
    image: '/img/real/website.jpg',
    tech: ['Three.js', 'React', 'WebGL', 'Spatial Design'],
    problem: 'An architectural firm required a cutting-edge web presence that could convey structural elegance and physical materiality through digital media.',
    approach: 'Leveraged WebGL and Three.js 3D rendering to construct spatial scenes that visitors can interact with and explore smoothly in any modern web browser.',
    solution: 'An immersive architectural showcase website blending 3D spatial models, smooth camera transitions, and editorial typography.',
    keyFeatures: [
      'Real-time 3D model rendering and interactive orbit controls',
      'Optimized asset loading pipeline ensuring fast initial page paint',
      'Editorial portfolio layout highlighting architectural projects',
      'Responsive fallback for lower-spec mobile devices',
    ],
    outcome: 'Shipped to production as a live showcase demonstrating advanced frontend engineering and spatial design.',
    text: 'An immersive showcase website delivered for Rock Attitude featuring interactive 3D spatial models and responsive WebGL rendering.',
    liveUrl: 'https://rock-attitude-website.vercel.app/',
    to: 'https://rock-attitude-website.vercel.app/',
  },
]
