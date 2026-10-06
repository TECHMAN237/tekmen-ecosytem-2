// Verified members come from the Innovation Solutions repo. Add new members by appending to this array.
export type Member = { id: string; name: string; role: string; expertise: string; bio: string; photo?: string; founder?: boolean; linkedin?: string }
export const members: Member[] = [
  { id: 'techman', name: 'Steeve Zali (TECHMAN)', role: 'Founder & CEO', expertise: 'Technical direction · Web, Mobile, AI & IoT', founder: true, photo: '/img/techman.jpg',
    linkedin: 'https://www.linkedin.com/in/steeve-zali-5a70b6379',
    bio: 'Founder and CEO of TEKMEN Revolution and its technology branch, TEKMEN Innovation Solutions. Leads technical direction across web, mobile, AI and IoT projects.' },
  { id: 'tato-einstein', name: 'Tato Einstein', role: 'Full-Stack Developer', expertise: 'Web platforms · Backend services', photo: '/img/tato-einstein.jpg',
    bio: 'Develops robust web platforms, scalable backend services, and custom application architectures for client and internal initiatives.' },
  { id: 'yonta-beriot', name: 'Yonta Beriot', role: 'IT Engineer', expertise: 'Infrastructure · Connected systems', photo: '/img/yonta-beriot.jpg',
    bio: 'Specializes in infrastructure, user interfaces, connected systems integration, and technical operations across digital products.' },
]
export type Experience = { id: string; category: string; title: string; text: string; image?: string; status: string; placeholder?: boolean }
export const experiences: Experience[] = [
  { id: 'scs', category: 'Projects', title: 'Smart Child Safety System', image: '/img/real/asw.jpg', status: 'Flagship project',
    text: 'Incident reporting, case management and notifications, evolving toward a connected wearable device for real-time location and alerts.' },
  { id: 'ycd', category: 'Innovation Challenges', title: 'YCD Farmer Guide', image: '/img/ycd-farmer-guide.jpg', status: '2025 · Funding track',
    text: 'An agri-tech platform with AI crop-disease diagnosis, a farmer-to-buyer marketplace and expert advisory — built for a national innovation funding track.' },
  { id: 'xena', category: 'Competitions', title: 'XENA AI — AI Innovation Challenge 2026', status: '2026 · Submission prepared',
    text: 'An agentic student companion prepared by the team for the AI Innovation Challenge 2026, with a 3-minute pitch and deck. No result is claimed here.' },
  { id: 'ph1', category: 'Hackathons', title: 'Your hackathon story here', status: 'Placeholder', placeholder: true,
    text: 'Replace with a verified event: title, date, location, real photos and result.' },
]
