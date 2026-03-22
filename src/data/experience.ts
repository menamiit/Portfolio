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
    company: 'Infosys Springboard',
    role: 'SDE Intern',
    type: 'Internship',
    startDate: 'February 2025',
    endDate: 'Present',
    current: true,
    description: [
      'Developing a smart city platform with focus on data collection, processing, and reporting.',
      'Designing backend services using Spring Boot for structured data workflows.',
      'Building analytics modules to track complaint distribution and SLA performance.',
      'Using SQL queries to generate insights such as high-frequency issue zones.',
      'Creating dashboards for visualizing trends and supporting decision-making.',
    ],
    techStack: ['Spring Boot', 'SQL', 'JavaScript', 'Analytics', 'Dashboards'],
  },
  {
    id: 2,
    company: 'CipherSchools',
    role: 'SDE Trainee',
    type: 'Trainee',
    startDate: 'June 2025',
    endDate: 'July 2025',
    description: [
      'Built full-stack applications using MERN stack.',
      'Implemented REST APIs for data handling and CRUD operations.',
      'Designed MongoDB schemas for efficient querying.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
  },
]
