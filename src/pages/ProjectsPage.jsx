import { ChevronLeft } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage({ navigateTo }) {
  return (
    <main className="archive-page">
      <section className="section container">
        <div className="archive-topbar">
          <button type="button" className="button button-quiet archive-back-button" onClick={() => navigateTo('home')}>
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

        <div className="projects-grid archive-grid">
          {projects.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      </section>
    </main>
  )
}
