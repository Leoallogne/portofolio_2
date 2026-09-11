import { Terminal as TerminalIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Terminal({ security = false }) {
  const reduceMotion = useReducedMotion()

  const lines = security
    ? [
        ['security --focus', 'Networking'],
        ['environment', 'Controlled Laboratory'],
        ['objective', 'Learn · Build · Understand']
      ]
    : [
        ['whoami', 'Muhammad Syafiq'],
        ['focus', 'Web Development'],
        ['stack', 'React · Laravel · MongoDB'],
        ['learning', 'Linux · Networking · Cybersecurity'],
        ['location', 'Karawang, Indonesia'],
        ['status', 'Open to Opportunities']
      ]

  return (
    <motion.div
      className="terminal"
      role="region"
      aria-label={security ? 'Cybersecurity learning terminal' : 'Profile terminal'}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
    >
      <div className="terminal-top">
        <span className="terminal-dots">
          <i />
          <i />
          <i />
        </span>
        <span>
          <TerminalIcon size={14} /> {security ? 'learning-lab' : 'syafiq-profile'}
        </span>
      </div>

      <div className="terminal-body">
        {lines.map(([command, result], index) => (
          <motion.div
            className="terminal-line"
            key={command}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.42 + index * 0.12 }}
          >
            <span className="terminal-command">$ {command}</span>
            {security && command === 'security --focus' ? (
              <div className="terminal-result">
                &gt; {result}
                <br />
                &gt; Linux
                <br />
                &gt; Web Security
                <br />
                &gt; Cybersecurity Fundamentals
              </div>
            ) : (
              <span
                className={
                  result === 'Open to Opportunities'
                    ? 'terminal-result accent-text'
                    : 'terminal-result'
                }
              >
                {result}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}