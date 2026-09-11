import { useEffect, useMemo, useRef, useState } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'
import { defaultResponses, getCommandSuggestions, resolveCommand } from '../utils/terminal'

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

    if (commandKey === 'clear') {
      setHistory([])
      setEntries([
        { type: 'system', value: lab.terminalIntro[0] },
        { type: 'system', value: lab.terminalIntro[1] }
      ])
    } else {
      setHistory(nextHistory)
      const response = resolveCommand(commandKey, commandMap, nextHistory.slice(0, -1))
      setEntries(currentEntries => [
        ...currentEntries,
        { type: 'command', value: rawTrimmed },
        {
          type: 'result',
          value: response.length ? response : ['No commands in history yet.']
        }
      ])
    }

    setInput('')
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const commandSuggestions = getCommandSuggestions(input)

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
        <label className="sr-only" htmlFor={`lab-command-${lab.id}`}>Command input</label>
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
          className="terminal-input"
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
          <div className="history-list">
            {history.slice(-4).map((entry, index) => (
              <button
                key={`${entry}-${index}`}
                type="button"
                className="history-pill"
                onClick={() => {
                  setInput(entry)
                  inputRef.current?.focus()
                }}
                title={`Load "${entry}" into the command input`}
              >
                {entry}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

