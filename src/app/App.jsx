import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BackToTop from '../components/layout/BackToTop'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import CyberLabPage from '../pages/CyberLabPage'
import { getCurrentPage } from '../utils/portfolio'

function App() {
  const [filter, setFilter] = useState('All')
  const [activeLab, setActiveLab] = useState(0)

  const [view, setView] = useState(getCurrentPage)
  const [pendingSection, setPendingSection] = useState(null)

  useEffect(() => {
    const handlePopState = () => {
      setPendingSection(null)
      setView(getCurrentPage())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (pendingSection && view === 'home') {
      requestAnimationFrame(() => {
        document.getElementById(pendingSection)?.scrollIntoView({ behavior: 'smooth' })
        setPendingSection(null)
      })
    }
  }, [pendingSection, view])

  const navigateTo = (nextView, sectionId = null) => {
    const basePath = window.location.pathname || '/'
    const nextUrl = nextView === 'home' ? basePath : `${basePath}?page=${nextView}`
    setView(nextView)
    setPendingSection(sectionId)
    window.history.pushState({}, '', nextUrl)
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div id="top" className="app-shell">
      <Navbar
        page={view}
        onNavigate={navigateTo}
      />
      <main className="app-main">
        {view === 'projects' ? (
          <ProjectsPage navigateTo={navigateTo} />
        ) : view === 'cybersecurity-lab' ? (
          <CyberLabPage navigateTo={navigateTo} />
        ) : (
          <HomePage
            navigateTo={navigateTo}
            filter={filter}
            setFilter={setFilter}
            activeLab={activeLab}
            setActiveLab={setActiveLab}
          />
        )}
      </main>
      <Footer onNavigate={navigateTo} page={view} />
      <BackToTop />
    </div>
  )
}

export default App
