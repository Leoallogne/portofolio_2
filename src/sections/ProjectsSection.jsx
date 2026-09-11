import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../features/projects/ProjectCard'
import { projects } from '../data/projects'
import { getProjectFilters } from '../utils/portfolio'

export default function ProjectsSection({ navigateTo, filter, setFilter }) {
  const projectFilters = getProjectFilters(projects)
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)
  const featuredProjects = filteredProjects.slice(0, 2)
  return (
    <section id="projects" className="section section-tint"><div className="container">
      <SectionHeading number="04" eyebrow="Selected Work" title="Things I have built.">Practical applications that show how I think, learn, and turn a problem into a working interface.</SectionHeading>
      <div className="filters" role="group" aria-label="Filter projects">{projectFilters.map(item => <button className={filter === item ? 'filter active' : 'filter'} key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} type="button">{item}</button>)}</div>
      {featuredProjects.length ? <div className="projects-grid">{featuredProjects.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="empty-state"><ShieldCheck size={22} /><strong>No projects in this category yet.</strong><span>Learning notes and controlled exercises will be added here as they become portfolio-ready.</span></div>}
      <div className="see-more-wrap"><button type="button" className="button button-primary" onClick={() => navigateTo('projects')}>See more <ArrowUpRight size={17} /></button></div>
    </div></section>
  )
}
