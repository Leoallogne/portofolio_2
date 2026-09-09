import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Cybersecurity', 'cybersecurity'], ['Contact', 'contact']]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const close = () => setOpen(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' })
    links.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])
  return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><a className="brand" href="#top" onClick={close}><span className="brand-mark">MS</span><span>Muhammad Syafiq</span></a><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={20} /> : <Menu size={20} />}</button><div className={`nav-links ${open ? 'is-open' : ''}`} id="primary-navigation">{links.map(([label, id]) => <a className={activeSection === id ? 'is-active' : ''} key={id} href={`#${id}`} onClick={close}>{label}</a>)}<a className="nav-cv" href="/Muhammad-Syafiq-CV.pdf" download>Download CV</a><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button></div></nav></header>
}