import { BriefcaseBusiness, Check } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const trainingItems = ['Front Office Fundamentals', 'Customer Service', 'Hospitality Operations', 'Barista Fundamentals', 'Workplace Communication', 'Teamwork & Professionalism']

export default function ExperienceSection() {
  return (
    <section id="experience" className="section container">
      <SectionHeading number="03" eyebrow="Experience" title="Professional foundations.">A first hospitality experience shaped around guest service, operational discipline, and working confidently with a team.</SectionHeading>
      <div className="experience-strip"><div><span>Role</span><strong>Front Office Intern</strong></div><div><span>Environment</span><strong>Hotel operations</strong></div><div><span>Core practice</span><strong>Service &amp; SOPs</strong></div></div>
      <div className="experience-layout">
        <div className="timeline"><div className="timeline-item"><span className="timeline-dot" /><div><div className="meta-line"><span>01 / 2026</span><span>1 Month</span></div><div className="role-heading"><div><h3>Front Office Intern</h3><p className="company">Royal Chulan Damansara — Malaysia</p></div><span className="role-tag">Hospitality</span></div><h4>What I contributed</h4><ul><li>Assisted with daily Front Office and guest service activities.</li><li>Supported customer service and administrative tasks according to hotel SOPs.</li><li>Communicated professionally with guests and team members in a multicultural work environment.</li><li>Adapted to a fast-paced hospitality environment and changing operational needs.</li></ul></div></div></div>
        <div className="training-card"><div className="card-icon"><BriefcaseBusiness size={19} /></div><div className="training-heading"><span className="eyebrow">Training</span><span className="training-status"><i />Completed training</span></div><h3>STAR4Hire Hospitality Training</h3><p>A compact foundation across service, operations, and workplace communication.</p><div className="training-list">{trainingItems.map(item => <span key={item}><Check size={14} />{item}</span>)}</div></div>
      </div>
    </section>
  )
}
