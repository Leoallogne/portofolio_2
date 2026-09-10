import { Download, Moon, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const sectionLinks = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Cybersecurity', 'cybersecurity'], ['Contact', 'contact']]
const archiveLinks = [['Home', 'home'], ['Selected Work', 'projects'], ['Cybersecurity Lab', 'cybersecurity-lab']]

export default function Navbar({ theme, toggleTheme, page = 'home', onNavigate }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const menuButtonRef = useRef(null)
  const drawerRef = useRef(null)

  const close = () => setOpen(false)

  useEffect(() => {
    if (page !== 'home') {
      return undefined
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: '-35% 0px -55% 0px' })

    sectionLinks.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [page])

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key !== 'Tab' || !drawerRef.current) {
        return
      }

      const focusable = drawerRef.current.querySelectorAll('a[href], button:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('nav-drawer-open')
    requestAnimationFrame(() => drawerRef.current?.querySelector('a[href]')?.focus())

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('nav-drawer-open')
    }
  }, [open])

  const wasOpenRef = useRef(false)
  useEffect(() => {
    if (wasOpenRef.current && !open) {
      menuButtonRef.current?.focus()
    }
    wasOpenRef.current = open
  }, [open])

  const navLinks = page === 'home' ? sectionLinks : archiveLinks

  const handleBrandClick = event => {
    event.preventDefault()
    onNavigate('home')
  }

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={handleBrandClick}>
          <span className="brand-mark">MS</span>
          <span>Muhammad Syafiq</span>
        </a>

        <button
          className={`icon-button menu-button ${open ? 'is-open' : ''}`}
          ref={menuButtonRef}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="burger-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <button
          className={`drawer-backdrop ${open ? 'is-visible' : ''}`}
          onClick={close}
          aria-label="Close navigation menu"
          tabIndex={-1}
        />

        <div className={`nav-links ${open ? 'is-open' : ''}`} ref={drawerRef} id="primary-navigation">
          {navLinks.map(([label, id]) => {
            if (page === 'home') {
              return (
                <a
                  className={activeSection === id ? 'is-active' : ''}
                  key={id}
                  href={`#${id}`}
                  onClick={close}
                  aria-current={activeSection === id ? 'location' : undefined}
                >
                  {label}
                </a>
              )
            }

            const isActive = page === id

            return (
              <a
                className={isActive ? 'is-active' : ''}
                key={id}
                href="#top"
                onClick={event => {
                  event.preventDefault()
                  onNavigate(id)
                  close()
                }}
                aria-current={isActive ? 'location' : undefined}
              >
                {label}
              </a>
            )
          })}

          <a className="nav-cv" href="/Muhammad-Syafiq-CV.pdf" download onClick={close}>
            <Download size={15} />
            Download CV
            <small>PDF</small>
          </a>

          <button
            className="icon-button drawer-theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Light theme' : 'Dark theme'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
