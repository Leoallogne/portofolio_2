import { Code2, Coffee, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const pillars = [
  [Coffee, 'Hospitality', 'Customer service, teamwork, and SOP-led operations.'],
  [Code2, 'Development', 'Practical web applications, databases, and responsive UI.'],
  [ShieldCheck, 'Security', 'Networking, Linux, and controlled web security learning.']
]

export default function AboutSection() {
  return (
    <section id="about" className="section container profile-section">
      <SectionHeading number="01" eyebrow="Profile" title="A practical professional with range.">Hospitality and operations are the foundation. Technology is the discipline I am building alongside it.</SectionHeading>
      <div className="about-grid">
        <div className="about-intro">
          <span className="large-quote">“</span>
          <p>I'm an adaptable and curious professional who works well with people, follows procedures, and stays calm while learning new systems.</p>
          <p>My technical journey includes web development, databases, networking, Linux, and cybersecurity fundamentals. I enjoy building practical applications, understanding how systems work, and continuously improving both my technical and professional skills.</p>
          <div className="profile-snapshot">
            <div><span>Work style</span><strong>Adaptable · Detail-oriented</strong></div>
            <div><span>Strength</span><strong>Service · Teamwork · Learning</strong></div>
          </div>
        </div>
        <div className="pillar-grid">
          {pillars.map(([Icon, title, text]) => <div className="pillar" key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  )
}
