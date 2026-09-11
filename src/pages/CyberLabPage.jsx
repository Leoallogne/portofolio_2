import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import CyberLabDetail from '../components/CyberLabDetail'
import CyberLabTerminal from '../components/CyberLabTerminal'
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
    <main className="archive-page">
      <section className="section container py-4 py-lg-5">
        <div className="archive-topbar d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <button type="button" className="btn btn-outline-secondary archive-back-button" onClick={() => navigateTo('home')}>
            <ChevronLeft size={17} />
            <span>Back to home</span>
          </button>
          <span className="archive-chip badge rounded-pill bg-body-tertiary border border-secondary-subtle text-body-secondary">Lab archive</span>
        </div>

        <SectionHeading
          number="05.1"
          eyebrow="Extended Lab"
          title="More cyber lab tracks."
        >
          These are the additional lab directions I plan to expand as the portfolio grows, with screenshots and hosted previews coming later.
        </SectionHeading>

        <div className="cyberlab-tabs mb-4">
          <div className="cyberlab-tabs-controls d-flex align-items-center gap-2">
            <button
              type="button"
              className="cyberlab-tab-arrow btn btn-outline-secondary btn-sm"
              aria-label="Previous labs"
              onClick={() => scrollTabs(-1)}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="cyberlab-tab-strip flex-grow-1" ref={tabListRef}>
              {labCards.map((lab, index) => (
                <button
                  key={`${lab.id}-tab`}
                  type="button"
                  className={activeLab === index ? 'cyberlab-tab cyberlab-tab-active border-0 rounded-4 px-3 py-2 text-start' : 'cyberlab-tab border-0 rounded-4 px-3 py-2 text-start'}
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
              className="cyberlab-tab-arrow btn btn-outline-secondary btn-sm"
              aria-label="Next labs"
              onClick={() => scrollTabs(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="cyberlab-overview card border-0 shadow-sm mb-4">
          <div className="card-body p-3 p-md-4">
            <div className="cyberlab-overview-header d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
              <span className="cyberlab-kicker text-body-secondary small text-uppercase">Current track</span>
              <span className="lab-status badge rounded-pill bg-body-tertiary border border-secondary-subtle text-body-secondary"><i />{currentLab.status}</span>
            </div>

            <div className="cyberlab-overview-body row g-4 align-items-center">
              <div className="cyberlab-overview-copy col-12 col-lg-6">
                <h3 className="mb-2">{currentLab.title}</h3>
                <p className="mb-0 text-body-secondary">{currentLab.objective}</p>
              </div>

              <div className="cyberlab-meta-grid col-12 col-lg-6">
                <div>
                  <span>Difficulty</span>
                  <strong>{currentLab.difficulty}</strong>
                </div>
                <div>
                  <span>Progress</span>
                  <strong>{currentLab.progress}%</strong>
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

        <div className="lab-showcase row g-4">
          <div className="col-12 col-xl-7">
            <CyberLabDetail lab={currentLab} />
          </div>
          <div className="col-12 col-xl-5">
            <CyberLabTerminal key={currentLab.id} lab={currentLab} />
          </div>
        </div>
      </section>
    </main>
  )
}
