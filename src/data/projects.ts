import { LINKS } from './site'
export type Project = { id: string; name: string; category: string; text: string; image: string; tech: string[]; to: string }
const to = LINKS.innovation + 'work'
export const projects: Project[] = [
  { id: 'scs', name: 'Smart Child Safety', category: 'IoT', image: '/img/real/raydar10.jpg', tech: ['React Native', 'Expo', 'ESP32', 'SIM868', 'Node.js'], to,
    text: 'A digital platform combining incident reporting, case management and notifications, evolving toward a connected wearable for real-time location and alerts.' },
  { id: 'ub', name: 'UB Campus Hub', category: 'Mobile App', image: '/img/ub-campus-hub.jpg', tech: ['React Native', 'Expo', 'Supabase', 'Mapbox'], to,
    text: 'Course materials, a past-exam archive, a live campus map and push notifications in one app for University of Buea students.' },
  { id: 'ycd', name: 'YCD Farmer Guide', category: 'AI Solution', image: '/img/ycd-farmer-guide.jpg', tech: ['AI / Computer Vision', 'Web Platform'], to,
    text: 'AI-based crop-disease diagnosis, a farmer-to-buyer marketplace and expert advisory for smallholder farmers.' },
  { id: 'fako', name: 'Fako Land & Property', category: 'Digital Platform', image: '/img/fako-land-property.jpg', tech: ['Web Platform', 'AI property finder'], to,
    text: 'A real estate management platform featuring an AI-powered property finder to match buyers and tenants with listings faster.' },
  { id: 'noor', name: 'NOORAXIS', category: 'Digital Platform', image: '/img/nooraxis.jpg', tech: ['Platform design'], to,
    text: 'A digital platform designed and proposed end-to-end for NOORAXIS, from problem framing to a structured build plan.' },
]
