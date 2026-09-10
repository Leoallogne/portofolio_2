import { ChevronLeft } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { labCards } from '../data/projects'

export default function CyberLabPage({ navigateTo }) {
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

        <div className="lab-grid lab-grid-archive">
          {labCards.map((lab, index) => {
            const labTopics = lab.topics ?? lab.focus ?? []

            return (
              <article className="lab-card lab-card-archive" key={`${lab.id}-archive`}>
                <div className="lab-top">
                  <span className="lab-status"><i />{lab.status}</span>
                  <span className="lab-index">0{index + 1}</span>
                </div>
                <div className="lab-card-heading">
                  <h3>{lab.title}</h3>
                  <span>Topics</span>
                </div>
                <div className="topic-list">
                  {labTopics.map(topic => <span key={`${lab.id}-archive-${topic}`}>{topic}</span>)}
                </div>
                <div className="lab-archive-footer">
                  <span>Preview pending</span>
                  <ChevronLeft size={15} />
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
