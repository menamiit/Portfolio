import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { education } from '../../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education" className="section-alt">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading"><span className="gradient-text">Education</span></h2>
        <p className="section-subheading">Where my technical foundation was built</p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
        {education.map((edu) => (
          <motion.div key={edu.id} variants={fadeUp}>
            <div className="card p-4 md:p-6 flex gap-4 md:gap-5 items-start hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/40 shrink-0">
                <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{edu.institution}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.degree} — {edu.field}
                    </p>
                  </div>
                  <div className="text-sm font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {edu.startYear} – {edu.endYear}
                  </div>
                </div>

                {edu.gpa && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    GPA: <span className="font-semibold text-accent-500">{edu.gpa}</span>
                  </p>
                )}

                {edu.highlights && (
                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
