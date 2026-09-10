export const projects = [
  { id: '01', title: 'TelegramKW', subtitle: 'Real-Time Chat Application', category: 'Web Development', preview: 'Realtime conversations', description: 'A modern web-based messaging application designed for real-time communication, user authentication, and conversation management.', technologies: ['React', 'Supabase', 'PostgreSQL', 'Authentication', 'Realtime'], features: ['User authentication', 'User profiles', 'Real-time messaging', 'Conversation management', 'Responsive interface'], github: 'https://github.com/Leoallogne/telegramkw_2.git', demo: 'https://telegramkw-2.vercel.app/', repository: { title: 'telegramkw_2', description: 'Real-time chat application with authentication and Supabase integration.', language: 'JavaScript' } },
  { id: '02', title: 'Student Finance Management', subtitle: 'Personal Finance Web Application', category: 'Web Development', preview: 'Financial dashboard', description: 'A personal finance management web application designed to manage transactions, analyze financial activity, and visualize financial data.', technologies: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'REST API'], features: ['Transaction management', 'Financial dashboard', 'Analytics', 'Data visualization', 'User/Admin roles'], github: null, repository: { title: 'Student Finance Management', description: 'Personal finance dashboard concept built around transactions and data visualization.', language: 'PHP / MySQL' } },
  { id: '03', title: 'Business Lead Finder', subtitle: 'Personal / Experimental Project', category: 'Tools', preview: 'Lead discovery concept', description: 'A lead discovery and management concept designed to collect, organize, and analyze potential business leads.', technologies: ['Python', 'MySQL', 'Web Scraping', 'Dashboard'], features: ['Lead collection', 'Data organization', 'Database storage', 'Lead management', 'Dashboard concept'], github: null, repository: { title: 'Business Lead Finder', description: 'Experimental lead discovery and organization concept for learning data workflows.', language: 'Python' } },
  { id: '04', title: 'Security Operations Dashboard', subtitle: 'Expert Project Concept', category: 'Tools', preview: 'Monitoring overview', description: 'A planned security operations dashboard concept focused on alert visibility, task tracking, and lightweight monitoring workflows for a future lab environment.', technologies: ['React', 'Node.js', 'Supabase', 'Monitoring', 'Charts'], features: ['Alert overview', 'Incident queue', 'Status tracking', 'Custom dashboard widgets', 'Operational readiness layout'], github: null, demo: null, repository: { title: 'Security Operations Dashboard', description: 'Planned dashboard concept for learning actionable security monitoring workflows.', language: 'JavaScript' } },
  { id: '05', title: 'Threat Intelligence Notebook', subtitle: 'Research & Learning Workspace', category: 'Tools', preview: 'Research tracker', description: 'An expert-level knowledge workspace designed to collect threat notes, compare indicators, and organize learning outcomes from practical cyber exercises.', technologies: ['React', 'Markdown', 'Search', 'Documentation', 'Analytics'], features: ['Research notes', 'Indicator tracking', 'Learning journal', 'Categorized findings', 'Knowledge organization'], github: null, demo: null, repository: { title: 'Threat Intelligence Notebook', description: 'A documentation-driven workspace for organizing findings from controlled cybersecurity learning.', language: 'JavaScript' } }
]

export const repositories = projects.map(project => ({ ...project.repository, href: project.github }))

export const skillGroups = [
  ['Operational & Hospitality', ['Customer Service', 'Teamwork', 'Communication', 'SOP Compliance', 'Time Management', 'Attention to Detail', 'Problem Solving', 'Adaptability', 'Shift Work']],
  ['Web Development', ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'REST APIs']],
  ['Backend & Database', ['PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'Supabase', 'SQL']],
  ['Tools', ['Git', 'GitHub', 'Vite', 'NPM', 'VS Code', 'Netlify', 'Microsoft Excel', 'Microsoft Office']],
  ['Networking & Cybersecurity', ['TCP/IP', 'IP Addressing', 'Subnetting', 'DNS', 'DHCP', 'Linux Fundamentals', 'HTTP/HTTPS', 'Web Security Fundamentals', 'Metasploit Fundamentals']]
]

export const labCards = [
  {
    id: 'networking',
    title: 'Networking Fundamentals',
    status: 'Practicing',
    summary: 'Understanding how devices communicate, why protocols matter, and how network services behave in real environments.',
    focus: ['TCP/IP', 'IP Addressing', 'Subnetting', 'DNS', 'DHCP'],
    checkpoints: ['Packet flow analysis', 'Subnet planning', 'Service discovery'],
    metrics: [
      { label: 'Protocols', value: '6', tone: 'green' },
      { label: 'Labs', value: '12', tone: 'warm' },
      { label: 'Progress', value: '72%', tone: 'blue' }
    ]
  },
  {
    id: 'linux',
    title: 'Linux Fundamentals',
    status: 'Practicing',
    summary: 'Strengthening command-line confidence, permission handling, and system-level understanding used in many security workflows.',
    focus: ['Linux CLI', 'File Permissions', 'Processes', 'Networking Commands', 'Package Management'],
    checkpoints: ['Privilege control', 'Service inspection', 'Log review'],
    metrics: [
      { label: 'Commands', value: '24', tone: 'green' },
      { label: 'Labs', value: '9', tone: 'warm' },
      { label: 'Progress', value: '68%', tone: 'blue' }
    ]
  },
  {
    id: 'web-security',
    title: 'Web Security',
    status: 'Learning',
    summary: 'Exploring how web requests, sessions, and authentication work so weak points can be recognized and understood safely.',
    focus: ['HTTP/HTTPS', 'Authentication', 'Sessions', 'Input Validation', 'OWASP Fundamentals'],
    checkpoints: ['Request inspection', 'Session handling', 'Secure input review'],
    metrics: [
      { label: 'Topics', value: '11', tone: 'green' },
      { label: 'Labs', value: '7', tone: 'warm' },
      { label: 'Progress', value: '58%', tone: 'blue' }
    ]
  },
  {
    id: 'metasploit',
    title: 'Metasploit Fundamentals',
    status: 'Learning',
    summary: 'Studying offensive security concepts in a controlled setting, focusing on understanding workflows rather than misuse.',
    focus: ['Modules', 'Payload concepts', 'Exploitation concepts', 'Controlled lab practice'],
    checkpoints: ['Module review', 'Payload understanding', 'Lab notes'],
    metrics: [
      { label: 'Modules', value: '8', tone: 'green' },
      { label: 'Labs', value: '5', tone: 'warm' },
      { label: 'Progress', value: '46%', tone: 'blue' }
    ]
  },
  {
    id: 'incident-response',
    title: 'Incident Response Basics',
    status: 'Planned',
    summary: 'Preparing a realistic workflow for investigation, evidence handling, and concise reporting after a security event.',
    focus: ['Containment', 'Evidence handling', 'Reporting', 'Triage flow', 'Documentation'],
    checkpoints: ['Timeline review', 'Triage exercises', 'Written incident report'],
    metrics: [
      { label: 'Scenarios', value: '4', tone: 'green' },
      { label: 'Labs', value: '3', tone: 'warm' },
      { label: 'Progress', value: '30%', tone: 'blue' }
    ]
  }
]