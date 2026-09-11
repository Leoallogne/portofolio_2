import IconCarousel from '../components/ui/IconCarousel'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ExperienceSection from '../sections/ExperienceSection'
import ProjectsSection from '../sections/ProjectsSection'
import CybersecuritySection from '../sections/CybersecuritySection'
import LearningSection from '../sections/LearningSection'
import ActivitySection from '../sections/ActivitySection'
import ContactSection from '../sections/ContactSection'

export default function HomePage({ navigateTo, filter, setFilter, activeLab, setActiveLab }) {
  return <><HeroSection /><IconCarousel /><AboutSection /><SkillsSection /><ExperienceSection /><ProjectsSection navigateTo={navigateTo} filter={filter} setFilter={setFilter} /><CybersecuritySection navigateTo={navigateTo} activeLab={activeLab} setActiveLab={setActiveLab} /><LearningSection /><ActivitySection /><ContactSection /></>
}
