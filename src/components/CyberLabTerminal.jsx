import { useEffect, useMemo, useRef, useState } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'

const SAFE_COMMANDS = ['help', 'clear', 'whoami', 'pwd', 'ls', 'cat', 'ip addr', 'ping', 'scan', 'history']

const defaultResponses = {
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
  history: { output: ['help', 'whoami', 'ls'] }
}

export default function CyberLabTerminal({ lab }) {
  const inputRef = useRef(null)
  const terminalBodyRef = useRef(null)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [entries, setEntries] = useState([
    { type: 'system', value: lab.terminalIntro[0] },
    { type: 'system', value: lab.terminalIntro[1] }
  ])

  useEffect(() => {
    setEntries([
      { type: 'system', value: lab.terminalIntro[0] },
      { type: 'system', value: lab.terminalIntro[1] }
    ])
    setInput('')
    setHistory([])
  }, [lab.id, lab.terminalIntro])

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [entries])

  const commandMap = useMemo(() => ({
    ...defaultResponses,
    ...lab.commands
  }), [lab])

  const handleSubmit = event => {
    event.preventDefault()

    const rawTrimmed = input.trim()
    const commandKey = rawTrimmed.toLowerCase()

    if (!rawTrimmed) {
      inputRef.current?.focus()
      return
    }

    const nextHistory = [...history, rawTrimmed]
    setHistory(nextHistory)

    if (commandKey === 'clear') {
      setEntries([
        { type: 'system', value: lab.terminalIntro[0] },
        { type: 'system', value: lab.terminalIntro[1] }
      ])
    } else {
      setEntries(currentEntries => [
        ...currentEntries,
        { type: 'command', value: rawTrimmed },
        {
          type: 'result',
          value: commandMap[commandKey]?.output ?? ['command not recognized. Try help.']
        }
      ])
    }

    setInput('')
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const commandSuggestions = SAFE_COMMANDS.filter(command =>
    command.startsWith(input.trim().toLowerCase()) && command !== input.trim().toLowerCase()
  )

  return (
    <div className="lab-terminal-shell">
      <div className="terminal-top">
        <span className="terminal-dots"><i /><i /><i /></span>
        <span><TerminalIcon size={14} /> {lab.id}-simulator</span>
      </div>

      <div className="lab-terminal-body" ref={terminalBodyRef} aria-live="polite">
        {entries.map((entry, index) => (
          <div className={`terminal-line ${entry.type}`} key={`${entry.type}-${index}`}>
            {entry.type === 'command' ? (
              <span className="terminal-command">$ {entry.value}</span>
            ) : entry.type === 'result' ? (
              entry.value.map((line, lineIndex) => (
                <span key={`${lineIndex}-${line}`} className="terminal-result">{line}</span>
              ))
            ) : (
              <span className="terminal-result accent-text">{entry.value}</span>
            )}
          </div>
        ))}
      </div>

      <form className="terminal-form" onSubmit={handleSubmit}>
        <label htmlFor={`lab-command-${lab.id}`} className="sr-only">Command input</label>
        <span className="terminal-prompt">$</span>
        <input
          ref={inputRef}
          id={`lab-command-${lab.id}`}
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          placeholder="Enter command (e.g. help, ping, scan)"
          aria-label={`Interactive terminal for ${lab.title}`}
        />
        <button type="submit" className="button button-primary terminal-submit">
          Run
        </button>
      </form>

      {input && commandSuggestions.length > 0 && (
        <div className="command-hint" aria-label="Command suggestions">
          {commandSuggestions.map(command => (
            <button
              key={command}
              type="button"
              className="command-hint-item"
              onClick={() => {
                setInput(command)
                inputRef.current?.focus()
              }}
            >
              {command}
            </button>
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div className="history-panel" aria-label="Command history">
          <span>History</span>
          {history.slice(-4).map((entry, index) => (
            <button
              key={`${entry}-${index}`}
              type="button"
              className="history-pill"
              onClick={() => {
                setInput(entry)
                inputRef.current?.focus()
              }}
              title={`Click to copy "${entry}" to input`}
            >
              {entry}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

