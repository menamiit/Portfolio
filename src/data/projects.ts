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
    title: 'Smart City Grievance Analytics Platform',
    description:
      'Developed a full-stack platform with analytics modules to track complaint distribution, SLA performance, and identify high-frequency issue zones using SQL and dashboards.',
    techStack: ['Spring Boot', 'SQL', 'Chart.js', 'JavaScript'],
    github: 'https://github.com/menamiit/smart-city-project',
    live: 'https://github.com/menamiit/smart-city-project',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time System Monitoring Dashboard',
    description:
      'Built a real-time data pipeline using Node.js and WebSockets to collect, process, and visualize system performance metrics.',
    techStack: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/menamiit/Real-Time-Server-Monitoring-Dashboard',
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile Network Performance Analysis and Prediction',
    description:
      'Performed exploratory data analysis and built regression models using Python and Scikit-learn to analyze network performance and predict key metrics.',
    techStack: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/menamiit/EDA-Mobile-Network-Experience',
    featured: true,
  },
  {
    id: 4,
    title: 'NYC Airbnb Data Analytics Dashboard',
    description:
      'Developed an interactive dashboard using Power BI and SQL to analyze pricing trends, occupancy patterns, and host behavior, generating actionable business insights.',
    techStack: ['Power BI', 'SQL'],
    github: 'https://github.com/menamiit/CO2-Footprint-Tracker',
    featured: true,
  },
]
