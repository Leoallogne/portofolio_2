import { ArrowUpRight, GitBranch } from 'lucide-react'
import { repositories } from '../data/projects'

export default function ActivitySection() {
  return <section className="section container activity-section"><div className="activity-callout"><div><div className="eyebrow"><span>07</span>Technical Activity</div><h2>Follow the work<br /><em>as it develops.</em></h2><p>Selected projects and experiments live on GitHub. The best work is always in progress.</p><div className="activity-status"><i />Maintained through personal projects and learning exercises</div></div><a className="button button-primary" href="https://github.com/Leoallogne" target="_blank" rel="noreferrer">View GitHub <GitBranch size={17} /></a></div><div className="repository-grid">{repositories.map(repo => <article className="repository-card" key={repo.title}><div className="repository-top"><GitBranch size={17} /><span>{repo.language}</span></div><h3>{repo.title}</h3><p>{repo.description}</p>{repo.href ? <a href={repo.href} target="_blank" rel="noreferrer">Open repository <ArrowUpRight size={15} /></a> : <span className="link-muted">Repository link pending</span>}</article>)}</div></section>
}
