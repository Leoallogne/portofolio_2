import { cyberLabs } from './cyberLabs.js'

export const projects = [
  {
    id: '01',
    title: 'TelegramKW',
    subtitle: 'Real-Time Chat Application',
    category: 'Web Development',
    preview: 'Realtime conversations',
    description: 'A modern web-based messaging application designed for real-time communication, user authentication, and conversation management.',
    technologies: ['React', 'Supabase', 'PostgreSQL', 'Authentication', 'Realtime'],
    features: ['User authentication', 'User profiles', 'Real-time messaging', 'Conversation management', 'Responsive interface'],
    overview: ['Authentication flow with secure session handling', 'Realtime messaging and conversation management', 'Responsive UI tuned for mobile and desktop'],
    problem: 'The project needed a practical chat experience that felt modern, but also remained easy to extend and maintain over time.',
    solution: 'I structured the app around a clean React interface, managed state flow efficiently, and connected it to a realtime backend for real communication.',
    role: 'Full-stack learning project covering frontend structure, data flow, and hosted service integration.',
    challenges: 'Keeping the interface polished while balancing real-time data updates and a simple, consistent user journey.',
    status: 'Live',
    github: 'https://github.com/Leoallogne/telegramkw_2.git',
    demo: 'https://telegramkw-2.vercel.app/',
    repository: { title: 'telegramkw_2', description: 'Real-time chat application with authentication and Supabase integration.', language: 'JavaScript' }
  },
  {
    id: '02',
    title: 'Student Finance Management',
    subtitle: 'Personal Finance Web Application',
    category: 'Web Development',
    preview: 'Financial dashboard',
    description: 'A personal finance management web application designed to manage transactions, analyze financial activity, and visualize financial data.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'REST API'],
    features: ['Transaction management', 'Financial dashboard', 'Analytics', 'Data visualization', 'User/Admin roles'],
    overview: ['Transaction handling with category-based organization', 'Dashboard-style reporting and financial summaries', 'Simple admin workflow for broader use cases'],
    problem: 'The challenge was building a usable finance dashboard that made records and trends easy to understand without overcomplicating the workflow.',
    solution: 'I focused on organized transaction management, chart-based reporting, and a practical interface for day-to-day financial oversight.',
    role: 'Independent project covering backend structure, database work, and UI orchestration.',
    challenges: 'Mapping the workflow clearly so users could understand their financial activity and the system remained easy to review.',
    status: 'Concept',
    github: null,
    repository: { title: 'Student Finance Management', description: 'Personal finance dashboard concept built around transactions and data visualization.', language: 'PHP / MySQL' }
  },
  {
    id: '03',
    title: 'Business Lead Finder',
    subtitle: 'Personal / Experimental Project',
    category: 'Tools',
    preview: 'Lead discovery concept',
    description: 'A lead discovery and management concept designed to collect, organize, and analyze potential business leads.',
    technologies: ['Python', 'MySQL', 'Web Scraping', 'Dashboard'],
    features: ['Lead collection', 'Data organization', 'Database storage', 'Lead management', 'Dashboard concept'],
    overview: ['Structured lead collection from external sources', 'Data organization and storage for inspection', 'Concept dashboard for future exploration'],
    problem: 'I wanted to explore data workflows around lead discovery and understand how messy sources can be turned into useful structured information.',
    solution: 'The concept centers on organizing raw inputs into a usable, reviewable system that can later support stronger workflows and reporting.',
    role: 'End-to-end concept development focused on learning data processing and organization.',
    challenges: 'Managing imperfect source quality while designing a workflow that still felt useful and realistic.',
    status: 'Experimental',
    github: null,
    repository: { title: 'Business Lead Finder', description: 'Experimental lead discovery and organization concept for learning data workflows.', language: 'Python' }
  },
  {
    id: '04',
    title: 'Security Operations Dashboard',
    subtitle: 'Expert Project Concept',
    category: 'Tools',
    preview: 'Monitoring overview',
    description: 'A planned security operations dashboard concept focused on alert visibility, task tracking, and lightweight monitoring workflows for a future lab environment.',
    technologies: ['React', 'Node.js', 'Supabase', 'Monitoring', 'Charts'],
    features: ['Alert overview', 'Incident queue', 'Status tracking', 'Custom dashboard widgets', 'Operational readiness layout'],
    overview: ['Dashboard layout for alert visibility', 'Tracked operational tasks with clear status states', 'Future-ready structure for monitoring workflows'],
    problem: 'There was a need for a clearer, more structured security operations interface that could support both monitoring and task visibility.',
    solution: 'I designed a dashboard concept that emphasizes clarity, prioritization, and practical visibility for ongoing operations.',
    role: 'Concept-driven design and frontend planning for a future security operations tool.',
    challenges: 'Turning a broad idea into a clean, structured product vision that is easy to understand and extend.',
    status: 'Concept',
    github: null,
    demo: null,
    repository: { title: 'Security Operations Dashboard', description: 'Planned dashboard concept for learning actionable security monitoring workflows.', language: 'JavaScript' }
  },
  {
    id: '05',
    title: 'Threat Intelligence Notebook',
    subtitle: 'Research & Learning Workspace',
    category: 'Tools',
    preview: 'Research tracker',
    description: 'An expert-level knowledge workspace designed to collect threat notes, compare indicators, and organize learning outcomes from practical cyber exercises.',
    technologies: ['React', 'Markdown', 'Search', 'Documentation', 'Analytics'],
    features: ['Research notes', 'Indicator tracking', 'Learning journal', 'Categorized findings', 'Knowledge organization'],
    overview: ['Structured knowledge capture for lab outcomes', 'Organized note-taking around threat-related findings', 'A browsing experience designed for long-term learning'],
    problem: 'Cybersecurity learning can create a lot of fragmented notes, so the challenge was to build a workspace that keeps findings organized and easy to revisit.',
    solution: 'I designed a documentation-first workspace that is easy to search, structured around categories, and useful for ongoing learning.',
    role: 'Research workspace concept focused on documentation quality and knowledge organization.',
    challenges: 'Balancing a rich information model with a simple experience that remains accessible and readable.',
    status: 'Concept',
    github: null,
    demo: null,
    repository: { title: 'Threat Intelligence Notebook', description: 'A documentation-driven workspace for organizing findings from controlled cybersecurity learning.', language: 'JavaScript' }
  }
]

export const repositories = projects.map(project => ({ ...project.repository, href: project.github }))

export const skillGroups = [
  ['Operational & Hospitality', ['Customer Service', 'Teamwork', 'Communication', 'SOP Compliance', 'Time Management', 'Attention to Detail', 'Problem Solving', 'Adaptability', 'Shift Work']],
  ['Web Development', ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'REST APIs']],
  ['Backend & Database', ['PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'Supabase', 'SQL']],
  ['Tools', ['Git', 'GitHub', 'Vite', 'NPM', 'VS Code', 'Netlify', 'Microsoft Excel', 'Microsoft Office']],
  ['Networking & Cybersecurity', ['TCP/IP', 'IP Addressing', 'Subnetting', 'DNS', 'DHCP', 'Linux Fundamentals', 'HTTP/HTTPS', 'Web Security Fundamentals', 'Metasploit Fundamentals']]
]

export const labCards = cyberLabs
