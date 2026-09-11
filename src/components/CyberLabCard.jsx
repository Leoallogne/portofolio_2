import { ArrowUpRight } from 'lucide-react'

export default function CyberLabCard({ lab, index, active, onSelect }) {
  return (
    <button
      type="button"
      className={`card border-0 text-start h-100 w-100 lab-card ${active ? 'lab-card-active shadow-sm border-primary-subtle' : 'shadow-sm'}`}
      onClick={() => onSelect(index)}
      aria-pressed={active}
    >
      <div className="card-body p-3 p-md-4 d-flex flex-column gap-3">
        <div className="lab-top d-flex justify-content-between align-items-center">
          <span className="lab-status badge rounded-pill bg-body-tertiary text-body-secondary border border-secondary-subtle"><i />{lab.status}</span>
          <span className="lab-index text-body-secondary">0{index + 1}</span>
        </div>

        <div className="lab-card-heading d-flex justify-content-between align-items-start gap-3">
          <h3 className="mb-0 fs-5 fw-semibold">{lab.title}</h3>
          <span className="text-body-secondary small">Topics</span>
        </div>

        <div className="topic-list d-flex flex-wrap gap-2">
          {lab.topics.slice(0, 3).map(topic => (
            <span key={`${lab.id}-${topic}`} className="badge rounded-pill text-bg-light border border-secondary-subtle">{topic}</span>
          ))}
        </div>

        <div className="lab-card-footer mt-auto d-flex justify-content-between align-items-center text-body-secondary">
          <span>{lab.difficulty}</span>
          <ArrowUpRight size={15} />
        </div>
      </div>
    </button>
  )
}
