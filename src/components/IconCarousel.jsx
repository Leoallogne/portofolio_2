import { Braces, Cable, Cloud, Code2, Database, Fingerprint, GitBranch, Globe2, KeyRound, Laptop, LockKeyhole, Network, Router, ScanSearch, Server, ShieldCheck, TerminalSquare, Wifi, Wrench, Zap } from 'lucide-react'

const iconItems = [
  ['React & UI', Code2],
  ['Networking', Network],
  ['Linux', TerminalSquare],
  ['Cybersecurity', ShieldCheck],
  ['APIs', Braces],
  ['Cloud', Cloud],
  ['Database', Database],
  ['Git', GitBranch],
  ['Web Systems', Globe2],
  ['Servers', Server],
  ['Routing', Router],
  ['Wi-Fi', Wifi],
  ['Security', LockKeyhole],
  ['Identity', Fingerprint],
  ['Search', ScanSearch],
  ['Hardware', Laptop],
  ['Tools', Wrench],
  ['Protocols', Cable],
  ['Access', KeyRound],
  ['Build', Zap]
]

function IconSet({ labelled = false }) {
  return <div className="icon-carousel-set" aria-hidden={labelled ? undefined : true}>
    {iconItems.map(([label, Icon]) => <div className="icon-carousel-item" key={label}>
      <span className="icon-carousel-icon"><Icon size={20} strokeWidth={1.7} /></span>
      <span>{label}</span>
    </div>)}
  </div>
}

function IconCarousel() {
  return <section className="icon-carousel" aria-label="Technical focus areas">
    <div className="icon-carousel-label container"><span>Focus / 00</span><i /><span>Technical toolkit</span></div>
    <div className="icon-carousel-window">
      <div className="icon-carousel-track">
        <IconSet labelled />
        <IconSet />
      </div>
    </div>
  </section>
}

export default IconCarousel