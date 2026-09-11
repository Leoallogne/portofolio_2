import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import CyberLabDetail from '../features/cyberlab/CyberLabDetail'
import CyberLabTerminal from '../features/cyberlab/CyberLabTerminal'
import { labCards } from '../data/projects'

export default function CyberLabPage({ navigateTo }) {
  const [activeLab, setActiveLab] = useState(0)
  const currentLab = labCards[activeLab] ?? labCards[0]
  const tabListRef = useRef(null)

  const scrollTabs = direction => {
    if (!tabListRef.current) return

    tabListRef.current.scrollBy({
      left: direction * 230,
      behavior: 'smooth'
    })
  }

  return (
    <div className="archive-page">
      <section className="section container archive-section">
        <div className="archive-topbar">
          <button type="button" className="button button-quiet archive-back-button" onClick={() => navigateTo('home')}>
            <ChevronLeft size={17} />
            <span>Back to home</span>
          </button>
          <span className="archive-chip">Lab archive</span>
        </div>

        <SectionHeading
          number="05.1"
          eyebrow="Extended Lab"
          title="More cyber lab tracks."
        >
          These are the additional lab directions I plan to expand as the portfolio grows, with screenshots and hosted previews coming later.
        </SectionHeading>

        <div className="cyberlab-tabs">
          <div className="cyberlab-tabs-controls">
            <button
              type="button"
              className="cyberlab-tab-arrow button button-quiet"
              aria-label="Previous labs"
              onClick={() => scrollTabs(-1)}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="cyberlab-tab-strip" ref={tabListRef}>
              {labCards.map((lab, index) => (
                <button
                  key={`${lab.id}-tab`}
                  type="button"
                  className={activeLab === index ? 'cyberlab-tab cyberlab-tab-active' : 'cyberlab-tab'}
                  onClick={() => setActiveLab(index)}
                  aria-pressed={activeLab === index}
                >
                  <span className="cyberlab-tab-index">0{index + 1}</span>
                  <span className="cyberlab-tab-title">{lab.title}</span>
                  <span className="cyberlab-tab-summary">{lab.topics?.[0] ?? 'Lab practice'}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="cyberlab-tab-arrow button button-quiet"
              aria-label="Next labs"
              onClick={() => scrollTabs(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="cyberlab-overview">
          <div className="cyberlab-overview-panel">
            <div className="cyberlab-overview-header">
              <span className="cyberlab-kicker">Current track</span>
              <span className="lab-status"><i />{currentLab.status}</span>
            </div>

            <div className="cyberlab-overview-body">
              <div className="cyberlab-overview-copy">
                <h3>{currentLab.title}</h3>
                <p>{currentLab.objective}</p>
              </div>

              <div className="cyberlab-meta-grid">
                <div>
                  <span>Difficulty</span>
                  <strong>{currentLab.difficulty}</strong>
                </div>
                <div>
                  <span>Progress</span>
                  <strong>{currentLab.progress}%</strong>
                  <div className="lab-progress" role="progressbar" aria-label={`${currentLab.title} progress`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={currentLab.progress}>
                    <span style={{ width: `${currentLab.progress}%` }} />
                  </div>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>{currentLab.topics?.[0] ?? 'Lab practice'}</strong>
                </div>
                <div>
                  <span>Mode</span>
                  <strong>Controlled lab</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-showcase">
          <CyberLabDetail lab={currentLab} />
          <CyberLabTerminal key={currentLab.id} lab={currentLab} />
        </div>
      </section>
    </div>
  )
}
