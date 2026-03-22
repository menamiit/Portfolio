import { motion } from 'framer-motion'
import SectionWrapper, { fadeUp } from '../ui/SectionWrapper'
import { Globe, Database, ServerCog } from 'lucide-react'

const highlights = [
  { icon: Globe, title: 'Data-Driven Builder', desc: 'Focused on analytics, backend APIs, and scalable data workflows.' },
  { icon: Database, title: 'Insight-Focused Analyst', desc: 'Experienced with SQL, EDA, and dashboarding to translate data into decisions.' },
  { icon: ServerCog, title: 'Backend System Designer', desc: 'Builds structured services and workflows with Node.js and Spring Boot.' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="section-alt">
      <motion.div variants={fadeUp} className="text-center mb-12">
        <div className="section-divider mx-auto" />
        <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
        <p className="section-subheading">A bit about who I am and what I do</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
            Computer Science student focused on data analytics, machine learning, and backend systems.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a Computer Science student with a strong interest in data analytics,
            machine learning, and backend development. I have experience working with
            Python, SQL, and Power BI to analyze datasets and extract meaningful insights.
            I have built data-driven projects involving exploratory data analysis,
            predictive modeling, and dashboard development.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Alongside this, I have experience in backend development using Node.js and
            Spring Boot, allowing me to design systems that efficiently collect, process,
            and serve data. I am particularly interested in solving real-world problems by
            combining data analysis with scalable system design.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              'Data Analysis and EDA',
              'SQL and Data Querying',
              'Problem Solving and Analytical Thinking',
              'Backend Development and API Design',
              'Data Visualization and Dashboarding',
            ].map((tag) => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {['Data Analytics', 'Machine Learning', 'Data Engineering', 'Backend Development', 'Building Data-Driven Systems'].map((tag) => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Highlights row */}
      <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="card p-6 flex flex-col gap-4 items-center text-center hover:border-primary-400/50 dark:hover:border-primary-600/50 transition-colors"
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
