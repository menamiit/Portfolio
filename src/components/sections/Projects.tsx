import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import TiltCard from '../ui/TiltCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-[#0f1629]/50">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subheading">Things I've built that I'm proud of</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <TiltCard className="h-full">
              <div className="card p-6 h-full flex flex-col gap-4 hover:border-primary-400/60 dark:hover:border-primary-600/60 transition-colors duration-300">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/40">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                    >
                      <Github size={17} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title + description */}
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs font-mono
                                 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
