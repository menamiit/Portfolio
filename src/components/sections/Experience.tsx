import { motion } from 'framer-motion'
import { Briefcase, CalendarDays } from 'lucide-react'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Work <span className="gradient-text">Experience</span></h2>
        <p className="section-subheading">My professional journey so far</p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-400 to-transparent hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="relative sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full hidden sm:flex items-center justify-center
                              bg-primary-100 dark:bg-primary-900/40 border-2 border-primary-500/60 z-10">
                <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
              </div>

              <div className="card p-6 hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-colors">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <p className="font-medium text-primary-600 dark:text-primary-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 shrink-0">
                    <CalendarDays size={14} />
                    <span>{exp.startDate} – {exp.current ? <span className="text-accent-500 font-medium">Present</span> : exp.endDate}</span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Duration indicator */}
              {i < experiences.length - 1 && (
                <div className="sm:hidden mt-4 mb-2 flex items-center gap-2 text-xs text-slate-400">
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
