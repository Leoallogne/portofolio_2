import { Code2, Network, Server, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'

const learningTracks = [
  ['01', 'Networking Fundamentals', 'TCP/IP, IP addressing, subnetting, DNS, DHCP.', 'Practicing', Network, '#projects'],
  ['02', 'Linux', 'Command line, permissions, processes, system fundamentals.', 'Practicing', Server, '#cybersecurity'],
  ['03', 'Web Development', 'React, modern frontend architecture, APIs.', 'Building', Code2, '#projects'],
  ['04', 'Cybersecurity', 'Web security and cybersecurity fundamentals.', 'Learning', ShieldCheck, '#cybersecurity']
]

export default function LearningSection() {
  return <section className="section section-tint"><div className="container"><SectionHeading number="06" eyebrow="Next Chapter" title="Currently learning.">A focused learning rhythm: strengthen fundamentals, build practical interfaces, and keep improving through small projects.</SectionHeading><div className="focus-grid">{learningTracks.map(([number, title, text, status, Icon, href]) => <motion.article className={`focus-card focus-card-${number}`} key={title} whileHover={{ y: -5 }}><div className="focus-top"><span>{number}</span><strong>{status}</strong></div><Icon size={22} /><h3>{title}</h3><p>{text}</p><a href={href}>Explore focus <ArrowUpRight size={14} /></a></motion.article>)}</div></div></section>
}
