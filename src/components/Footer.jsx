import { ArrowUp, GitBranch, Mail } from 'lucide-react'

export default function Footer({ onNavigate, page = 'home' }) {
  const handleNav = (event, id) => {
    event.preventDefault()
    if (page !== 'home' && onNavigate) {
      onNavigate('home')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTopClick = event => {
    event.preventDefault()
    if (page !== 'home' && onNavigate) {
      onNavigate('home')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer border-top mt-auto">
      <div className="container footer-inner py-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 footer-brand">
            <a className="brand" href="#top" onClick={handleTopClick}>
              <span className="brand-mark">MS</span>
              <span>Muhammad Syafiq</span>
            </a>
            <p className="mb-2">Hospitality first. Technology in progress.</p>
            <span className="footer-availability">
              <i />Open to opportunities
            </span>
          </div>
          <div className="col-lg-4 footer-nav">
            <span className="d-block mb-2">Explore</span>
            <div className="d-flex flex-wrap gap-3">
              <a href="#about" onClick={e => handleNav(e, 'about')}>Profile</a>
              <a href="#experience" onClick={e => handleNav(e, 'experience')}>Experience</a>
              <a href="#projects" onClick={e => handleNav(e, 'projects')}>Projects</a>
              <a href="#contact" onClick={e => handleNav(e, 'contact')}>Contact</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-links d-flex justify-content-lg-end gap-3">
              <a href="https://github.com/Leoallogne" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitBranch size={18} />
              </a>
              <a href="mailto:leoallogne@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#top" onClick={handleTopClick} aria-label="Back to top">
                <ArrowUp size={18} />
              </a>
            </div>
          </div>
        </div>
        <small className="d-block mt-3 text-muted">© 2026 Muhammad Syafiq · Built with React + Vite</small>
      </div>
    </footer>
  )
}
