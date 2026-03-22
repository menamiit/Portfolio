export interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  credentialUrl?: string
  badge?: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'Full Stack Development (MERN)',
    issuer: 'CipherSchools',
    date: '2025',
  },
  {
    id: 2,
    name: 'Python for AI/ML',
    issuer: 'CSEPathshala',
    date: '2025',
  },
  {
    id: 3,
    name: 'Computer Communications Specialization',
    issuer: 'Coursera',
    date: '2025',
  },
  {
    id: 4,
    name: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    date: '2025',
  },
]
