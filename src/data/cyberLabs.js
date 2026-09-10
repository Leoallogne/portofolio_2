export const cyberLabs = [
  {
    id: 'networking',
    title: 'Networking Fundamentals',
    status: 'Practicing',
    difficulty: 'Intermediate',
    progress: 72,
    objective: 'Understand how devices communicate across a network and why core protocols shape modern system behavior.',
    scenario: 'The lab simulates a small office network where a workstation must resolve DNS, communicate over TCP/IP, and reach local services reliably.',
    topics: ['TCP/IP', 'IPv4 addressing', 'Subnetting', 'DNS', 'DHCP', 'Packet flow'],
    tools: ['Wireshark mindset', 'Cisco-style topology notes', 'Linux networking tools', 'Packet analysis workflow'],
    checkpoints: ['Packet flow analysis', 'Subnet planning', 'Service discovery'],
    result: 'You can explain the path of a request from client to service and identify where bottlenecks or misconfiguration usually happen.',
    whatIlearned: ['How IP addressing and subnet boundaries affect communication', 'Why DNS, DHCP, and routing matter in practice', 'How to reason about packet flow in a controlled environment'],
    commands: {
      help: {
        output: [
          'Available commands:',
          'help, clear, whoami, pwd, ls, cat, ip addr, ping, scan, history'
        ]
      },
      whoami: { output: ['network-analyst@cyber-lab'] },
      pwd: { output: ['/workspace/networking-lab'] },
      ls: { output: ['configs/', 'notes/', 'topology.txt'] },
      cat: { output: ['TCP/IP review: 1) establish session 2) resolve host 3) route data 4) confirm delivery'] },
      'ip addr': { output: ['eth0: 192.168.10.15/24', 'lo: 127.0.0.1/8'] },
      ping: { output: ['PING 192.168.10.1 (192.168.10.1): 56 data bytes', '64 bytes from 192.168.10.1: icmp_seq=1 ttl=64 time=1.2ms'] },
      scan: { output: ['Discovered hosts:', '192.168.10.1 gateway', '192.168.10.10 workstation', '192.168.10.20 services'] },
      history: { output: ['help', 'whoami', 'ip addr', 'ping'] }
    },
    terminalIntro: [
      'networking-lab ready',
      'Use help to explore the available simulation commands.'
    ]
  },
  {
    id: 'linux',
    title: 'Linux Fundamentals',
    status: 'Practicing',
    difficulty: 'Beginner to Intermediate',
    progress: 68,
    objective: 'Build command-line confidence and understand how core Linux concepts connect to security and system administration.',
    scenario: 'This lab focuses on a Linux host running services, permissions, and diagnostic tasks across logs, processes, and file ownership.',
    topics: ['Linux CLI', 'Permissions', 'Processes', 'Log review', 'Networking commands'],
    tools: ['bash', 'systemctl mindset', 'file permissions', 'journalctl-inspired notes'],
    checkpoints: ['Privilege control', 'Service inspection', 'Log review'],
    result: 'You gain enough practical familiarity to read system state, understand permission boundaries, and inspect services with confidence.',
    whatIlearned: ['How file ownership and permissions affect access', 'How processes and logs help diagnose issues', 'Why disciplined CLI habits matter in Linux environments'],
    commands: {
      help: {
        output: [
          'Available commands:',
          'help, clear, whoami, pwd, ls, cat, ip addr, ping, scan, history'
        ]
      },
      whoami: { output: ['linux-user@lab-host'] },
      pwd: { output: ['/home/linux-user/workspace'] },
      ls: { output: ['access.log', 'error.log', 'services.conf', 'secrets.disabled'] },
      cat: { output: ['permissions note: root owns system files; regular users read only approved paths'] },
      'ip addr': { output: ['eth0: 10.0.0.12/24', 'dns: 10.0.0.1'] },
      ping: { output: ['PING 10.0.0.1 (10.0.0.1): 56 data bytes', '64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.9ms'] },
      scan: { output: ['Running processes:', 'sshd', 'nginx', 'cron'] },
      history: { output: ['whoami', 'ls', 'cat access.log', 'ping 10.0.0.1'] }
    },
    terminalIntro: [
      'linux-lab active',
      'Inspect perms, services, and logs to understand state.'
    ]
  },
  {
    id: 'web-security',
    title: 'Web Security',
    status: 'Learning',
    difficulty: 'Intermediate',
    progress: 58,
    objective: 'Explore how web requests, sessions, and authentication behave so common weaknesses can be recognized and understood safely.',
    scenario: 'The lab models a simple application flow involving login, session cookies, request handling, and controlled input validation exercises.',
    topics: ['HTTP/HTTPS', 'Authentication', 'Sessions', 'Input validation', 'OWASP basics'],
    tools: ['browser dev tools', 'request inspection', 'session review', 'secure coding mindset'],
    checkpoints: ['Request inspection', 'Session handling', 'Secure input review'],
    result: 'You can identify common authentication and validation issues by observing how requests and responses behave in a practical app flow.',
    whatIlearned: ['How cookies and sessions affect persistence', 'Why input validation matters even in small apps', 'How HTTP and HTTPS differ in trust and exposure'],
    commands: {
      help: {
        output: [
          'Available commands:',
          'help, clear, whoami, pwd, ls, cat, ip addr, ping, scan, history'
        ]
      },
      whoami: { output: ['web-security-analyst@secure-app'] },
      pwd: { output: ['/app/web-security'] },
      ls: { output: ['app.js', 'routes.json', 'session-store.txt', 'auth-flow.md'] },
      cat: { output: ['Authentication sequence: submit credentials -> validate -> issue session token -> authorize request'] },
      'ip addr': { output: ['eth0: 172.16.0.22/16', 'https: enabled'] },
      ping: { output: ['PING secure-app.local (172.16.0.22): 56 data bytes', '64 bytes from 172.16.0.22: icmp_seq=1 ttl=64 time=0.4ms'] },
      scan: { output: ['HTTP route map:', '/login', '/dashboard', '/profile', '/api/session'] },
      history: { output: ['help', 'cat auth-flow.md', 'scan', 'ping secure-app.local'] }
    },
    terminalIntro: [
      'web-security simulator ready',
      'Inspect the request flow and review session handling.'
    ]
  },
  {
    id: 'metasploit',
    title: 'Metasploit Fundamentals',
    status: 'Learning',
    difficulty: 'Advanced',
    progress: 46,
    objective: 'Study offensive security workflows at a conceptual level so you can understand exploitation steps, payload logic, and post-exploitation patterns safely.',
    scenario: 'The lab presents a controlled environment where a vulnerable service is explored through module selection, payload concepts, and session handling.',
    topics: ['Modules', 'Payload concepts', 'Exploitation workflow', 'Sessions', 'Controlled lab practice'],
    tools: ['metasploit-style workflow', 'payload analysis', 'session tracking', 'lab notes'],
    checkpoints: ['Module review', 'Payload understanding', 'Lab notes'],
    result: 'You understand the high-level mechanics of an exploitation workflow without treating the exercise as a real-world attack path.',
    whatIlearned: ['How payloads and sessions fit into a broader exploit chain', 'Why module selection and target validation matter', 'How structured notes help turn a lab into real learning'],
    commands: {
      help: {
        output: [
          'Available commands:',
          'help, clear, whoami, pwd, ls, cat, ip addr, ping, scan, history'
        ]
      },
      whoami: { output: ['lab-operator@metasploit-sim'] },
      pwd: { output: ['/workspace/metasploit-lab'] },
      ls: { output: ['modules.txt', 'payloads.md', 'session-notes.txt', 'targets.csv'] },
      cat: { output: ['Exploitation workflow note: recon -> payload selection -> target validation -> session handling'] },
      'ip addr': { output: ['eth0: 10.10.10.5/24', 'target: 10.10.10.7'] },
      ping: { output: ['PING 10.10.10.7 (10.10.10.7): 56 data bytes', '64 bytes from 10.10.10.7: icmp_seq=1 ttl=64 time=0.7ms'] },
      scan: { output: ['Module preview:', 'exploit', 'post', 'payload', 'auxiliary'] },
      history: { output: ['help', 'ls', 'cat modules.txt', 'scan'] }
    },
    terminalIntro: [
      'metasploit-lab simulation active',
      'Study the flow, not the misuse.'
    ]
  }
]
