export interface Experience {
  id: number
  company: string
  role: string
  type: string
  startDate: string
  endDate: string
  current?: boolean
  description: string[]
  techStack: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    role: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    startDate: 'Jan 2023',
    endDate: 'Present',
    current: true,
    description: [
      'Led development of a microservices-based platform serving 500K+ daily active users.',
      'Reduced API response time by 40% through Redis caching and query optimization.',
      'Mentored a team of 4 junior developers and conducted regular code reviews.',
      'Collaborated with product and design to ship 3 major feature releases per quarter.',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    role: 'Full-Stack Developer',
    type: 'Full-time',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      "Built the company's core product from scratch \u2014 an AI-driven analytics dashboard.",
      'Implemented real-time data pipelines using WebSockets and server-sent events.',
      'Integrated Stripe payments and reduced checkout abandonment by 25% through A/B testing.',
      'Set up CI/CD pipelines with GitHub Actions and zero-downtime deployments on AWS.',
    ],
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Stripe'],
  },
  {
    id: 3,
    company: 'WebAgency Pro',
    role: 'Frontend Developer',
    type: 'Full-time',
    startDate: 'Aug 2019',
    endDate: 'May 2021',
    description: [
      'Delivered 15+ client websites and web apps, consistently on time and within budget.',
      'Introduced component-based design systems that cut development time by 30%.',
      'Collaborated closely with UX/UI designers to implement pixel-perfect responsive layouts.',
    ],
    techStack: ['React', 'JavaScript', 'SCSS', 'WordPress', 'Figma'],
  },
]
