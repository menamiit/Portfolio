export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  startYear: string
  endYear: string
  gpa?: string
  highlights?: string[]
}

export const education: Education[] = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    startYear: '2023',
    endYear: 'Present',
  },
]
