import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme } from '../../app/slices/themeSlice'

const navLinks = [
  { label: 'About',          to: 'about' },
  { label: 'Skills',         to: 'skills' },
  { label: 'Projects',       to: 'projects' },
  { label: 'Experience',     to: 'experience' },
  { label: 'Education',      to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact',        to: 'contact' },
]

export default function Navbar() {
  const dispatch = useAppDispatch()
  const theme    = useAppSelector((s) => s.theme.mode)
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          className="font-mono font-semibold text-lg cursor-pointer gradient-text select-none"
        >
          &lt;Portfolio /&gt;
        </ScrollLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300
                           hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer
                           transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
                activeClass="text-primary-600 dark:text-primary-400"
                spy
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300
                       hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300
                       hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f1629] border-b border-slate-200 dark:border-[#1e2a45] px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth
                  duration={500}
                  offset={-64}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200
                             hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg cursor-pointer transition-colors"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
