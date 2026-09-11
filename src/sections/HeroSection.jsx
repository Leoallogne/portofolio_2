import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import Terminal from '../features/terminal/Terminal'

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span>00</span>Portfolio / 2026</div>
        <p className="availability"><i /> Open to Opportunities</p>
        <h1>Muhammad<br /><em>Syafiq</em></h1>
        <p className="hero-positioning">Hospitality and operations professional building practical digital skills.</p>
        <p className="hero-lead">Hospitality <b>•</b> Web Development <b>•</b> Cybersecurity</p>
        <p className="hero-text">Adaptable and motivated, with front office experience and a growing technical background in web development, networking, Linux, and cybersecurity fundamentals.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <ArrowDownRight size={17} /></a>
          <a className="button button-quiet" href="#contact">Contact Me <ArrowUpRight size={17} /></a>
          <a className="cv-download" href="/Muhammad-Syafiq-CV.pdf" download><Download size={16} /><span>Download CV</span><small>PDF</small></a>
        </div>
        <div className="hero-facts" aria-label="Quick profile facts">
          <div><span>Primary focus</span><strong>Hospitality &amp; Operations</strong></div>
          <div><span>Technical focus</span><strong>React · Linux · Networking</strong></div>
        </div>
      </div>
      <div className="hero-side">
        <Terminal />
        <div className="hero-note">
          <div><span>Based in</span><strong>Karawang, West Java<br />Indonesia</strong></div>
          <div><span>Available for</span><strong>Hospitality · Operations<br />Entry-level IT</strong></div>
        </div>
      </div>
    </section>
  )
}
