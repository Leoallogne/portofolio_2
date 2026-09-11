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
        className={`project-card card h-100 border-0 shadow-sm project-card-${project.id}`}
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.22 } }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: Number(project.id) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`project-visual card-img-top project-visual-${project.id}`}>
          <span>{project.preview}</span>
          <div className="preview-window"><i /><i /><i /></div>
          <div className="preview-lines"><b /><b /><b /></div>
        </div>

        <div className="card-body d-flex flex-column gap-3 p-3 p-md-4">
          <div className="project-topline">
            <div className="project-number">PROJECT / {project.id}</div>
            <span className="project-category badge rounded-pill border border-secondary-subtle bg-transparent text-body-secondary">{project.category}</span>
          </div>

          <div className="project-heading">
            <div>
              <h3 className="mb-1">{project.title}</h3>
              <p className="mb-0">{project.subtitle}</p>
            </div>
          </div>

          <p className="project-description mb-0">{project.description}</p>

          <div className="project-features d-flex flex-wrap gap-2">
            {project.features.slice(0, 3).map(feature => <span key={feature} className="badge rounded-pill text-bg-light border border-secondary-subtle">{feature}</span>)}
          </div>

          <div className="project-footer mt-auto pt-3 border-top d-flex justify-content-between align-items-end gap-3 flex-wrap">
            <div className="tech-list d-flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map(tech => <span key={tech} className="text-body-secondary">{tech}</span>)}
            </div>

            <div className="project-links d-flex align-items-center justify-content-end flex-wrap gap-2">
              <button
                type="button"
                className="project-detail-button btn btn-link btn-sm p-0 text-decoration-none"
                onClick={() => setIsOpen(true)}
                aria-haspopup="dialog"
                aria-label={`View ${project.title} details`}
              >
                View details <ArrowUpRight size={15} />
              </button>

              {project.github ? (
                <a className="btn btn-sm btn-outline-secondary border-secondary-subtle rounded-2" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <GitBranch size={18} />
                </a>
              ) : (
                <span className="link-muted">Repository pending</span>
              )}

              {project.demo && (
                <a className="btn btn-sm btn-outline-secondary border-secondary-subtle rounded-2" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
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
