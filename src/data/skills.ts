export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'GraphQL', 'WebSockets', 'gRPC'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Mongoose', 'Elasticsearch'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD', 'Terraform', 'Nginx', 'Linux'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira', 'Webpack', 'Vite', 'ESLint'],
  },
]
