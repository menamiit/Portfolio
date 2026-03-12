export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  github: string
  live?: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description:
      'A full-stack productivity app that uses GPT-4 to auto-prioritize tasks, suggest deadlines, and generate daily summaries. Built with a React frontend and a Node.js/PostgreSQL backend.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description:
      'Scalable websocket-based chat app supporting rooms, direct messages, read receipts, and file uploads. Deployed on AWS with auto-scaling.',
    techStack: ['React', 'Socket.IO', 'Express', 'Redis', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'DevOps Dashboard',
    description:
      'Internal monitoring platform visualizing CI/CD pipeline metrics, deployment history, and infrastructure health using live WebSocket feeds from GitHub Actions and AWS CloudWatch.',
    techStack: ['React', 'Redux', 'D3.js', 'FastAPI', 'Docker', 'Kubernetes'],
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'E-Commerce Microservices Platform',
    description:
      'Production-grade e-commerce backend decomposed into microservices (auth, catalog, orders, payments) with an API gateway, event-driven communication via Kafka, and Stripe integration.',
    techStack: ['Node.js', 'Kafka', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'Stripe'],
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'Open-Source CLI Toolkit',
    description:
      'A developer productivity CLI with commands for scaffolding projects, managing environment configs, and syncing dotfiles across machines. Published to npm with 500+ weekly downloads.',
    techStack: ['TypeScript', 'Node.js', 'Commander.js', 'Inquirer', 'npm'],
    github: 'https://github.com',
    live: 'https://npmjs.com',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'This very portfolio — a visually engaging single-page React application featuring particle animations, 3D card effects, dark/light theme, and smooth scroll navigation.',
    techStack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com',
  },
]
