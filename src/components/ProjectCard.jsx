import { ArrowUpRight, GitBranch } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

function ProjectPreview({ project }) {
  if (project.id === '01') {
    return (
      <div className="preview-mockup preview-chat">
        <div className="preview-mockup-bar"><strong>TelegramKW</strong><span>Online</span></div>
        <div className="preview-message preview-message-in">Hey, are you available?</div>
        <div className="preview-message preview-message-out">Yes, what's up?</div>
        <div className="preview-input">Type a message <b>+</b></div>
      </div>
    )
  }

  if (project.id === '02') {
    return (
      <div className="preview-mockup preview-finance">
        <span>Available balance</span>
        <strong>$12,450</strong>
        <div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="preview-finance-meta"><span>Income <b>+$4,280</b></span><span>Expenses <b>-$1,820</b></span></div>
      </div>
    )
  }

  if (project.id === '03') {
    return (
      <div className="preview-mockup preview-table">
        <div className="preview-table-head"><span>Lead</span><span>Source</span><span>Status</span></div>
        {['Nusa Studio', 'Maju Retail', 'Karya Labs'].map((lead, index) => (
          <div className="preview-table-row" key={lead}><span>{lead}</span><span>{index === 1 ? 'Web' : 'Search'}</span><b>{index === 2 ? 'New' : 'Review'}</b></div>
        ))}
      </div>
    )
  }

  if (project.id === '04') {
    return (
      <div className="preview-mockup preview-alerts">
        <div className="preview-alerts-head"><strong>Security overview</strong><span>Healthy</span></div>
        <div><b className="alert-dot alert-high" />Authentication alert <span>High</span></div>
        <div><b className="alert-dot alert-medium" />Unusual traffic <span>Medium</span></div>
        <div><b className="alert-dot alert-low" />Service check <span>Low</span></div>
      </div>
    )
  }

  return (
    <div className="preview-mockup preview-notes">
      <div className="preview-notes-title"><strong>Threat notes</strong><span>IOC / 05</span></div>
      <p>Suspicious domain pattern</p>
      <div><span>Severity</span><b>Review</b></div>
      <div><span>Source</span><b>Lab research</b></div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.article
        className={`project-card project-card-${project.id}`}
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.22 } }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: Number(project.id) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`project-visual project-visual-${project.id}`}>
          <span className="project-visual-label">{project.preview}</span>
          <ProjectPreview project={project} />
        </div>

        <div className="project-card__body">
          <div className="project-topline">
            <div className="project-number">PROJECT / {project.id}</div>
            <span className="project-category">{project.category}</span>
          </div>

          <div className="project-heading">
            <div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-features">
            {project.features.slice(0, 3).map(feature => <span key={feature}>{feature}</span>)}
          </div>

          <div className="project-footer">
            <div className="tech-list">
              {project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}
            </div>

            <div className="project-links">
              <button
                type="button"
                className="project-detail-button"
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                aria-label={`View ${project.title} details`}
              >
                View details <ArrowUpRight size={15} />
              </button>

              {project.github ? (
                <a className="project-icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <GitBranch size={18} />
                </a>
              ) : (
                <span className="link-muted">Repository pending</span>
              )}

              {project.demo && (
                <a className="project-icon-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      <ProjectModal project={project} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
