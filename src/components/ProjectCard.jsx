import { ArrowUpRight, Check, GitBranch, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)
  const triggerRef = useRef(null)
  useEffect(() => {
    if (!isOpen) return undefined
    const handleKeyDown = event => {
      if (event.key === 'Escape') { setIsOpen(false); return }
      if (event.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    const backgroundCards = [...document.querySelectorAll('.project-card')]
    backgroundCards.forEach(card => { card.inert = true; card.setAttribute('aria-hidden', 'true') })
    const previousFocus = document.activeElement
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.classList.remove('modal-open'); backgroundCards.forEach(card => { card.inert = false; card.removeAttribute('aria-hidden') }); previousFocus?.focus?.() }
  }, [isOpen])
  return <>
    <motion.article className={`project-card project-card-${project.id}`} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: .22 } }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .55, delay: Number(project.id) * .06, ease: [0.22, 1, 0.36, 1] }}><div className={`project-visual project-visual-${project.id}`}><span>{project.preview}</span><div className="preview-window"><i /><i /><i /></div><div className="preview-lines"><b /><b /><b /></div></div><div className="project-number">PROJECT / {project.id}</div><div className="project-heading"><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><span className="project-category">{project.category}</span></div><p className="project-description">{project.description}</p><div className="project-features">{project.features.slice(0, 3).map(feature => <span key={feature}>{feature}</span>)}</div><div className="project-footer"><div className="tech-list">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-links"><button type="button" className="project-detail-button" ref={triggerRef} onClick={() => setIsOpen(true)} aria-haspopup="dialog" aria-label={`View ${project.title} details`}>View details <ArrowUpRight size={15} /></button>{project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><GitBranch size={18} /></a> : <span className="link-muted">Repository pending</span>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><ArrowUpRight size={18} /></a>}</div></div></motion.article>
    <AnimatePresence>{isOpen && <motion.div className="project-modal-backdrop" role="presentation" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} onMouseDown={event => event.target === event.currentTarget && setIsOpen(false)}><motion.div className="project-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby={`project-title-${project.id}`} aria-describedby={`project-description-${project.id}`} initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: .98 }} transition={{ duration: .25 }}><div className={`modal-visual project-visual-${project.id}`}><span>{project.preview}</span><div className="preview-window"><i /><i /><i /></div><div className="preview-lines"><b /><b /><b /></div></div><div className="modal-content"><div className="modal-header"><div><div className="modal-meta"><span className="project-number">PROJECT / {project.id}</span><span className="modal-category">{project.category}</span></div><span className="modal-kicker">Project detail</span><h2 id={`project-title-${project.id}`}>{project.title}</h2><p>{project.subtitle}</p></div><button type="button" className="modal-close" ref={closeButtonRef} onClick={() => setIsOpen(false)} aria-label={`Close ${project.title} details`}><X size={20} /></button></div><p className="modal-description" id={`project-description-${project.id}`}>{project.description}</p><div className="modal-columns"><div><span className="modal-label">Key features</span><ul className="modal-features">{project.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul></div><div><span className="modal-label">Technology</span><div className="modal-tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div></div><div className="modal-actions">{project.github && <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">GitHub <GitBranch size={16} /></a>}{project.demo && <a className="button button-quiet" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}{!project.github && !project.demo && <span className="modal-unavailable">Links will be added when available.</span>}</div></div></motion.div></motion.div>}</AnimatePresence>
  </>
}