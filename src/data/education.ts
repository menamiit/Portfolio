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
  {
    id: 2,
    institution: 'MG Sr Sec School, Jodhpur, Rajasthan',
    degree: 'Class 12th',
    field: 'Senior Secondary',
    startYear: '2021-22',
    endYear: '2021-22',
    gpa: '71%',
  },
  {
    id: 3,
    institution: 'Anant Louis Public School, Jodhpur, Rajasthan',
    degree: 'Class 10th',
    field: 'Secondary School',
    startYear: '2019-20',
    endYear: '2019-20',
    gpa: '71%',
  },
]
