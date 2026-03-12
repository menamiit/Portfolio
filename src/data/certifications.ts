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
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    credentialUrl: 'https://aws.amazon.com/certification/',
  },
  {
    id: 2,
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Nov 2023',
    credentialUrl: 'https://www.cncf.io/certification/cka/',
  },
  {
    id: 3,
    name: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'Jul 2023',
    credentialUrl: 'https://cloud.google.com/certification',
  },
  {
    id: 4,
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: 'Jan 2022',
    credentialUrl: 'https://coursera.org',
  },
]
