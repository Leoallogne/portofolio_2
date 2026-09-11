import SectionHeading from '../components/ui/SectionHeading'
import { skillGroups } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="section section-tint">
      <div className="container">
        <SectionHeading number="02" eyebrow="Capabilities" title="Skills that travel well.">A practical mix of people skills, technical fundamentals, and tools for learning quickly in new environments.</SectionHeading>
        <div className="skills-grid">
          {skillGroups.map(([title, skills], index) => (
            <article className={`skill-group ${index === 0 ? 'skill-group-primary' : ''}`} key={title}>
              <div className="skill-group-top"><span className="skill-index">0{index + 1}</span><span className="skill-count">{skills.length} skills</span></div>
              <h3>{title}</h3>
              <div className="badge-wrap">{skills.map(skill => <span className="skill-badge" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
