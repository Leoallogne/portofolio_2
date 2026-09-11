import { Check, ShieldCheck, Sparkles } from 'lucide-react'

export default function CyberLabDetail({ lab }) {
  return (
    <div className="lab-detail-grid row g-3">
      <div className="col-12 col-xl-6">
        <div className="bento-panel bento-panel-large card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Objective</span>
            <h3 className="mt-2 mb-3">{lab.title}</h3>
            <p className="mb-0">{lab.objective}</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Scenario</span>
            <p className="mb-0 mt-3">{lab.scenario}</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Concepts</span>
            <div className="topic-list mt-3">
              {lab.topics.map(topic => <span key={`${lab.id}-topic-${topic}`}>{topic}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Tools</span>
            <div className="topic-list mt-3">
              {lab.tools.map(tool => <span key={`${lab.id}-tool-${tool}`}>{tool}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Commands</span>
            <div className="command-list mt-3">
              {Object.keys(lab.commands).map(command => (
                <span key={`${lab.id}-command-${command}`}>{command}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Learning outcome</span>
            <div className="checklist mt-3">
              {lab.whatIlearned.map(item => (
                <div key={`${lab.id}-learn-${item}`} className="checklist-row">
                  <Sparkles size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Lab result</span>
            <div className="checklist-row strong-row mt-3">
              <ShieldCheck size={14} />
              <span>{lab.result}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="bento-panel card border-0 shadow-sm h-100">
          <div className="card-body p-3 p-md-4">
            <span className="bento-label">Checkpoints</span>
            <div className="checklist mt-3">
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
    </div>
  )
}
