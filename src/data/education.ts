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
    institution: 'University of Technology',
    degree: "Bachelor's of Science",
    field: 'Computer Science',
    startYear: '2015',
    endYear: '2019',
    gpa: '3.8 / 4.0',
    highlights: [
      "Dean's List — 6 semesters",
      'Senior Thesis: Distributed Consensus Algorithms in IoT Networks',
      'Lead developer for university hackathon-winning team (2018)',
    ],
  },
]
