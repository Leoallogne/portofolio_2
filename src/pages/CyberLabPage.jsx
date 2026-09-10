import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import CyberLabCard from '../components/CyberLabCard'
import CyberLabDetail from '../components/CyberLabDetail'
import CyberLabTerminal from '../components/CyberLabTerminal'
import { labCards } from '../data/projects'

export default function CyberLabPage({ navigateTo }) {
  const [activeLab, setActiveLab] = useState(0)
  const currentLab = labCards[activeLab] ?? labCards[0]

  return (
    <main className="archive-page">
      <section className="section container">
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

        <div className="cyberlab-overview">
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

        <div className="lab-showcase">
          <CyberLabDetail lab={currentLab} />
          <CyberLabTerminal key={currentLab.id} lab={currentLab} />
        </div>

        <div className="lab-grid lab-grid-archive">
          {labCards.map((lab, index) => (
            <CyberLabCard
              key={`${lab.id}-archive`}
              lab={lab}
              index={index}
              active={activeLab === index}
              onSelect={setActiveLab}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
