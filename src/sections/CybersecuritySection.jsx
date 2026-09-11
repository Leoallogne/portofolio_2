import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Terminal from '../features/terminal/Terminal'
import CyberLabCard from '../features/cyberlab/CyberLabCard'
import { labCards } from '../data/projects'

export default function CybersecuritySection({ navigateTo, activeLab, setActiveLab }) {
  const currentLab = labCards[activeLab] ?? labCards[0]
  const metrics = [
    { label: 'Progress', value: `${currentLab.progress ?? 0}%`, tone: 'green' },
    { label: 'Difficulty', value: currentLab.difficulty ?? 'Beginner', tone: 'warm' },
    { label: 'Status', value: currentLab.status ?? 'Learning', tone: 'blue' }
  ]
  const topics = currentLab.topics ?? currentLab.focus ?? []
  const checkpoints = currentLab.checkpoints ?? []
  return (
    <section id="cybersecurity" className="section container">
      <div className="split-heading"><SectionHeading number="05" eyebrow="Technical Learning" title="Cybersecurity Lab">Learning by building, testing, and understanding systems. Exercises are performed in controlled laboratory environments for educational purposes.</SectionHeading><Terminal security /></div>
      <div className="lab-context"><div><span>Learning mode</span><strong>Controlled laboratory practice</strong></div><div><span>Current emphasis</span><strong>Networks · Linux · Web fundamentals</strong></div><div><span>Approach</span><strong>Learn · Build · Understand</strong></div></div>
      <div className="lab-dashboard"><div className="lab-dashboard-panel"><div className="lab-dashboard-header"><div><span className="lab-kicker">Active track</span><h3>{currentLab.title}</h3></div><span className="lab-status"><i />{currentLab.status}</span></div><div className="lab-dashboard-body"><div className="lab-summary"><div className="lab-summary-copy"><span className="lab-summary-kicker">Selected track</span><p>{currentLab.objective ?? currentLab.summary ?? 'Learning focus is being prepared for this track.'}</p></div><div className="lab-badges" aria-label="Current lab topics">{topics.slice(0, 4).map(topic => <span key={topic}>{topic}</span>)}</div><div className="lab-metrics">{metrics.map(metric => <div className={`lab-metric lab-metric-${metric.tone}`} key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div></div><div className="lab-focus-panel"><h4>Current focus</h4><div className="topic-list">{topics.map(topic => <span key={topic}>{topic}</span>)}</div><div className="checkpoint-list">{checkpoints.map(checkpoint => <div key={checkpoint}><span />{checkpoint}</div>)}</div></div></div></div><div className="lab-grid">{labCards.slice(0, 2).map((lab, index) => <CyberLabCard key={lab.id} lab={lab} index={index} active={activeLab === index} onSelect={setActiveLab} />)}</div></div>
      <div className="see-more-wrap"><button type="button" className="button button-primary" onClick={() => navigateTo('cybersecurity-lab')}>See more <ArrowUpRight size={17} /></button></div>
    </section>
  )
}
