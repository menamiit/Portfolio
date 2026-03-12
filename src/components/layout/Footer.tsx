import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com',   label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:you@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f1629] border-t border-slate-200 dark:border-[#1e2a45] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
          Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> using React, Tailwind & Framer Motion
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400
                         hover:text-primary-600 dark:hover:text-primary-400
                         hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  )
}
