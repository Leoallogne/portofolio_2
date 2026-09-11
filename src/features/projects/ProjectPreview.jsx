export default function ProjectPreview({ project }) {
  if (project.id === '01') {
    return <div className="preview-mockup preview-chat"><div className="preview-mockup-bar"><strong>TelegramKW</strong><span>Online</span></div><div className="preview-message preview-message-in">Hey, are you available?</div><div className="preview-message preview-message-out">Yes, what's up?</div><div className="preview-input">Type a message <b>+</b></div></div>
  }

  if (project.id === '02') {
    return <div className="preview-mockup preview-finance"><span>Available balance</span><strong>$12,450</strong><div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="preview-finance-meta"><span>Income <b>+$4,280</b></span><span>Expenses <b>-$1,820</b></span></div></div>
  }

  if (project.id === '03') {
    return <div className="preview-mockup preview-table"><div className="preview-table-head"><span>Lead</span><span>Source</span><span>Status</span></div>{['Nusa Studio', 'Maju Retail', 'Karya Labs'].map((lead, index) => <div className="preview-table-row" key={lead}><span>{lead}</span><span>{index === 1 ? 'Web' : 'Search'}</span><b>{index === 2 ? 'New' : 'Review'}</b></div>)}</div>
  }

  if (project.id === '04') {
    return <div className="preview-mockup preview-alerts"><div className="preview-alerts-head"><strong>Security overview</strong><span>Healthy</span></div><div><b className="alert-dot alert-high" />Authentication alert <span>High</span></div><div><b className="alert-dot alert-medium" />Unusual traffic <span>Medium</span></div><div><b className="alert-dot alert-low" />Service check <span>Low</span></div></div>
  }

  return <div className="preview-mockup preview-notes"><div className="preview-notes-title"><strong>Threat notes</strong><span>IOC / 05</span></div><p>Suspicious domain pattern</p><div><span>Severity</span><b>Review</b></div><div><span>Source</span><b>Lab research</b></div></div>
}
