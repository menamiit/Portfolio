export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Power BI', 'Git', 'GitHub', 'Jupyter Notebook', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
]
