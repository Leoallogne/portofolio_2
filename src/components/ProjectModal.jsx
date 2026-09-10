import { Check, ExternalLink, GitBranch, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, isOpen, onClose }) {
  const reduceMotion = useReducedMotion()
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  const overview = Array.isArray(project.overview) && project.overview.length > 0
    ? project.overview
    : Array.isArray(project.features) ? project.features : []

  const problem = project.problem ?? 'This project focused on turning a practical idea into a usable interface or workflow with clear outcomes.'
  const solution = project.solution ?? 'The solution was shaped around a clean user experience, practical functionality, and a maintainable structure.'
  const role = project.role ?? 'Independent product development and implementation.'
  const challenges = project.challenges ?? 'The main challenge was balancing clarity, usability, and learning while keeping the project practical and structured.'
  const statusText = project.status ?? 'In progress'
  const statusClass = statusText.toLowerCase().replace(/\s+/g, '-')

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousFocus = document.activeElement
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return
      }

      const focusable = modalRef.current.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

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
    document.body.classList.add('modal-open')

    const backgrounds = Array.from(document.querySelectorAll('.project-card'))
    backgrounds.forEach(card => {
      card.setAttribute('aria-hidden', 'true')
      card.setAttribute('inert', 'true')
    })

    requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
      backgrounds.forEach(card => {
        card.removeAttribute('aria-hidden')
        card.removeAttribute('inert')
      })
      previousFocus?.focus?.()
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-backdrop"
          role="presentation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          onMouseDown={event => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            ref={modalRef}
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${project.id}`}
            aria-describedby={`project-modal-description-${project.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`modal-visual project-visual-${project.id}`}>
              <span>{project.preview}</span>
              <div className="preview-window"><i /><i /><i /></div>
              <div className="preview-lines"><b /><b /><b /></div>
            </div>

            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <div className="modal-meta">
                    <span className="project-number">PROJECT / {project.id}</span>
                    <span className="modal-category">{project.category}</span>
                  </div>

                  <span className="modal-kicker">Case study</span>
                  <h2 id={`project-modal-title-${project.id}`}>{project.title}</h2>
                  <p>{project.subtitle}</p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="modal-close"
                  onClick={onClose}
                  aria-label={`Close ${project.title} details`}
                >
                  <X size={20} />
                </button>
              </div>

              <p id={`project-modal-description-${project.id}`} className="modal-description">
                {project.description}
              </p>

              <div className="modal-columns">
                <div>
                  <span className="modal-label">Overview</span>
                  <ul className="modal-features">
                    {overview.map(item => (
                      <li key={item}><Check size={15} />{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="modal-label">Tech stack</span>
                  <div className="modal-tech-list">
                    {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
              </div>

              <div className="modal-columns modal-columns-split">
                <section>
                  <span className="modal-label">Problem</span>
                  <p className="modal-copy">{problem}</p>
                </section>

                <section>
                  <span className="modal-label">Solution</span>
                  <p className="modal-copy">{solution}</p>
                </section>
              </div>

              <div className="modal-columns modal-columns-split">
                <section>
                  <span className="modal-label">My role</span>
                  <p className="modal-copy">{role}</p>
                </section>

                <section>
                  <span className="modal-label">Challenges / learning</span>
                  <p className="modal-copy">{challenges}</p>
                </section>
              </div>

              <div className="modal-columns modal-columns-split">
                <section>
                  <span className="modal-label">Key features</span>
                  <ul className="modal-features">
                    {project.features.map(feature => (
                      <li key={feature}><Check size={15} />{feature}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <span className="modal-label">Status</span>
                  <div className="status-stack">
                    <span className={`project-status project-status-${statusClass}`}>
                      {statusText}
                    </span>
                    <p className="modal-copy">{project.preview}</p>
                  </div>
                </section>
              </div>

              <div className="modal-actions">
                {project.github && (
                  <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">
                    <GitBranch size={15} />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a className="button button-quiet" href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} />
                    Live demo
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="modal-unavailable">Repository and demo are still being prepared.</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
