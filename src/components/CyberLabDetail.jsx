import { Check, ShieldCheck, Sparkles } from 'lucide-react'

export default function CyberLabDetail({ lab }) {
  return (
    <div className="lab-detail-grid">
      <div className="bento-panel bento-panel-large">
        <div className="bento-panel-body">
          <span className="bento-label">Objective</span>
          <h3>{lab.title}</h3>
          <p>{lab.objective}</p>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Scenario</span>
          <p>{lab.scenario}</p>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Concepts</span>
          <div className="topic-list">
            {lab.topics.map(topic => <span key={`${lab.id}-topic-${topic}`}>{topic}</span>)}
          </div>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Tools</span>
          <div className="topic-list">
            {lab.tools.map(tool => <span key={`${lab.id}-tool-${tool}`}>{tool}</span>)}
          </div>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Commands</span>
          <div className="command-list">
            {Object.keys(lab.commands).map(command => (
              <span key={`${lab.id}-command-${command}`}>{command}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Learning outcome</span>
          <div className="checklist">
            {lab.whatIlearned.map(item => (
              <div key={`${lab.id}-learn-${item}`} className="checklist-row">
                <Sparkles size={14} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Lab result</span>
          <div className="checklist-row strong-row">
            <ShieldCheck size={14} />
            <span>{lab.result}</span>
          </div>
        </div>
      </div>

      <div className="bento-panel">
        <div className="bento-panel-body">
          <span className="bento-label">Checkpoints</span>
          <div className="checklist">
            {lab.checkpoints.map(checkpoint => (
              <div key={`${lab.id}-checkpoint-${checkpoint}`} className="checklist-row">
                <Check size={14} />
                <span>{checkpoint}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
