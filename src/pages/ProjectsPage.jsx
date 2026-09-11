import { ChevronLeft } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage({ navigateTo }) {
  return (
    <main className="archive-page">
      <section className="section container">
        <div className="archive-topbar">
          <button type="button" className="btn btn-outline-secondary archive-back-button" onClick={() => navigateTo('home')}>
            <ChevronLeft size={17} />
            <span>Back to home</span>
          </button>
          <span className="archive-chip">Portfolio archive</span>
        </div>

        <SectionHeading
          number="04.1"
          eyebrow="Extended Portfolio"
          title="More expert projects."
        >
          These are the additional project directions I plan to build and publish as the portfolio grows.
        </SectionHeading>

        <div className="archive-intro">
          <div className="archive-summary-card">
            <span className="archive-summary-kicker">Portfolio scope</span>
            <h3>Practical builds, research-driven concepts, and usable systems.</h3>
            <p>
              This archive expands the main portfolio with deeper experiments, dashboard concepts,
              and product ideas focused on communication, operations, and learning by doing.
            </p>
          </div>

          <div className="archive-stats">
            <div className="archive-stat archive-stat-live">
              <span>Live</span>
              <strong>01</strong>
            </div>
            <div className="archive-stat archive-stat-concept">
              <span>Concept</span>
              <strong>03</strong>
            </div>
            <div className="archive-stat archive-stat-experimental">
              <span>Experimental</span>
              <strong>01</strong>
            </div>
          </div>
        </div>

        <div className="projects-grid archive-grid row g-4">
          {projects.map(project => (
            <div className="col-12 col-xl-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
