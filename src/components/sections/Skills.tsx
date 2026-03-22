import { motion } from 'framer-motion'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Tech <span className="gradient-text">Stack</span></h2>
        <p className="section-subheading">Technologies I work with day-to-day</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {skillCategories.map(({ category, icon, skills }) => (
          <motion.div
            key={category}
            variants={fadeUp}
            className="card p-6 w-full max-w-sm hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-all duration-300 group text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-2xl">{icon}</span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">{category}</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06 }}
                  className="badge cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
