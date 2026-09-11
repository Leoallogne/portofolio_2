import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'
import ProjectPreview from './ProjectPreview'

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

            </div>
          </div>
        </div>
      </motion.article>

      <ProjectModal project={project} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
