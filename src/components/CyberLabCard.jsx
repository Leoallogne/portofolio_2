import { ArrowUpRight } from 'lucide-react'

export default function CyberLabCard({ lab, index, active, onSelect }) {
  return (
    <button
      type="button"
      className={active ? 'lab-card lab-card-active' : 'lab-card'}
      onClick={() => onSelect(index)}
      aria-pressed={active}
    >
      <div className="lab-top">
        <span className="lab-status"><i />{lab.status}</span>
        <span className="lab-index">0{index + 1}</span>
      </div>

      <div className="lab-card-heading">
        <h3>{lab.title}</h3>
        <span>Topics</span>
      </div>

      <div className="topic-list">
        {lab.topics.slice(0, 3).map(topic => <span key={`${lab.id}-${topic}`}>{topic}</span>)}
      </div>

      <div className="lab-card-footer">
        <span>{lab.difficulty}</span>
        <ArrowUpRight size={15} />
      </div>
    </button>
  )
}
