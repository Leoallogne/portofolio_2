import { ArrowUpRight, GitBranch } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

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
          <span>{project.preview}</span>
          <div className="preview-window"><i /><i /><i /></div>
          <div className="preview-lines"><b /><b /><b /></div>
        </div>

        <div className="project-number">PROJECT / {project.id}</div>

        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
          <span className="project-category">{project.category}</span>
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
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                <GitBranch size={18} />
              </a>
            ) : (
              <span className="link-muted">Repository pending</span>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <ProjectModal project={project} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
