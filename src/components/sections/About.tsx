import { motion } from 'framer-motion'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { Code2, Globe, Cpu } from 'lucide-react'

const highlights = [
  { icon: Code2, title: '5+ Years Experience',  desc: 'Building production-grade web applications end-to-end.' },
  { icon: Globe, title: '15+ Projects Shipped', desc: 'From startup MVPs to enterprise platforms at scale.' },
  { icon: Cpu,   title: 'Open-Source Advocate', desc: 'Regular contributor to public repos and npm packages.' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-[#0f1629]/50">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
        <p className="section-subheading">A bit about who I am and what I do</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Avatar / visual side */}
        <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500 to-accent-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-primary-500/30 dark:border-primary-400/30">
              {/* Placeholder avatar using initials — replace with <img> once you have a photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                <span className="text-7xl font-bold text-white select-none">Image</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-[#1e2a45] rounded-2xl px-4 py-2 shadow-lg">
              {/* <p className="text-xs text-slate-500 dark:text-slate-400">Currently at</p> */}
              {/* <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">TechCorp Solutions</p> */}
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div variants={fadeUp} className="space-y-5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Engineering software that <span className="gradient-text">matters</span>
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm a full-stack software engineer with 5+ years of experience designing and shipping
            scalable web applications. I specialize in <strong className="text-primary-600 dark:text-primary-400">React, Node.js, and cloud infrastructure</strong>,
            and I care deeply about performance, developer experience, and clean code.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects, writing
            technical blog posts, or leveling up my knowledge on distributed systems and system design.
            I believe great software comes from curiosity, collaboration, and attention to detail.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Problem Solver', 'Team Player', 'Lifelong Learner', 'Open-Source Contributor'].map((tag) => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Highlights row */}
      <div className="grid sm:grid-cols-3 gap-6 mt-16">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="card p-6 flex gap-4 items-start hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/40 shrink-0">
              <Icon size={20} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
