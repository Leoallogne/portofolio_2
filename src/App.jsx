import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import CyberLabPage from './pages/CyberLabPage'
import { getStoredTheme, storeTheme } from './utils/portfolio'

function App() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [filter, setFilter] = useState('All')
  const [activeLab, setActiveLab] = useState(0)

  const getCurrentView = () => {
    const page = new URLSearchParams(window.location.search).get('page')
    return page === 'projects' || page === 'cybersecurity-lab' ? page : 'home'
  }

  const [view, setView] = useState(getCurrentView)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f3f5f2' : '#0b0f14')
    storeTheme(undefined, theme)
  }, [theme])

  useEffect(() => {
    const handlePopState = () => setView(getCurrentView())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = nextView => {
    const basePath = window.location.pathname || '/'
    const nextUrl = nextView === 'home' ? basePath : `${basePath}?page=${nextView}`
    setView(nextView)
    window.history.pushState({}, '', nextUrl)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="top">
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        page={view}
        onNavigate={navigateTo}
      />
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
      <Footer onNavigate={navigateTo} page={view} />
      <BackToTop />
    </div>
  )
}

export default App
