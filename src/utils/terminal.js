export const safeCommands = ['help', 'clear', 'whoami', 'pwd', 'ls', 'cat', 'ip addr', 'ping', 'scan', 'history']

export const defaultResponses = {
  help: {
    output: [
      'Available commands:',
      'help, clear, whoami, pwd, ls, cat, ip addr, ping, scan, history'
    ]
  },
  clear: { output: [] },
  whoami: { output: ['cyber-operator@portfolio-lab'] },
  pwd: { output: ['/workspace'] },
  ls: { output: ['labs/', 'commands/', 'notes/'] },
  cat: { output: ['Controlled lab simulator active. Use the commands below to inspect the current scenario.'] },
  'ip addr': { output: ['eth0: 172.16.0.15/24', 'lo: 127.0.0.1/8'] },
  ping: { output: ['PING 172.16.0.1 (172.16.0.1): 56 data bytes', '64 bytes from 172.16.0.1: icmp_seq=1 ttl=64 time=0.5ms'] },
  scan: { output: ['Available targets:', 'gateway', 'services', 'workstation'] },
  history: { output: [] }
}

export function getCommandSuggestions(input) {
  const query = input.trim().toLowerCase()
  return safeCommands.filter(command => command.startsWith(query) && command !== query)
}

export function resolveCommand(command, commandMap, history = []) {
  const key = command.trim().toLowerCase()
  if (key === 'history') {
    return history.length ? history : ['No commands in history yet.']
  }
  return commandMap[key]?.output ?? ['command not recognized. Try help.']
}