import test from 'node:test'
import assert from 'node:assert/strict'
import { projects, repositories } from '../src/data/projects.js'
import { cyberLabs } from '../src/data/cyberLabs.js'
import { getCurrentPage, getNextTheme, getProjectFilters, getProjectStats, getStoredTheme, storeTheme } from '../src/utils/portfolio.js'
import { defaultResponses, getCommandSuggestions, resolveCommand } from '../src/utils/terminal.js'

test('project filters contain only categories present in project data', () => {
  const filters = getProjectFilters(projects)
  assert.equal(filters[0], 'All')
  assert.deepEqual(filters.slice(1), [...new Set(projects.map(project => project.category))])
})

test('project ids are unique', () => {
  const ids = projects.map(project => project.id)
  assert.equal(new Set(ids).size, ids.length)
})

test('projects contain the canonical required fields', () => {
  const requiredFields = ['id', 'title', 'subtitle', 'category', 'preview', 'description', 'technologies', 'features', 'overview', 'problem', 'solution', 'role', 'challenges', 'status', 'repository']
  for (const project of projects) {
    for (const field of requiredFields) {
      assert.ok(project[field] !== undefined, `${project.id} is missing ${field}`)
    }
    assert.ok(project.github === null || typeof project.github === 'string')
    assert.ok(project.demo === null || typeof project.demo === 'string')
  }
})

test('project statistics are derived from project statuses', () => {
  assert.deepEqual(getProjectStats(projects), { Live: 1, Concept: 3, Experimental: 1 })
})

test('terminal commands resolve safely and suggestions stay relevant', () => {
  assert.deepEqual(resolveCommand('whoami', defaultResponses), ['cyber-operator@portfolio-lab'])
  assert.deepEqual(resolveCommand('unknown', defaultResponses), ['command not recognized. Try help.'])
  assert.deepEqual(resolveCommand('history', defaultResponses, ['whoami', 'ls']), ['whoami', 'ls'])
  assert.deepEqual(getCommandSuggestions('ip'), ['ip addr'])
  assert.deepEqual(getCommandSuggestions('p'), ['pwd', 'ping'])
})

test('lab ids and required fields are valid', () => {
  const ids = cyberLabs.map(lab => lab.id)
  assert.equal(new Set(ids).size, ids.length)
  for (const lab of cyberLabs) {
    for (const field of ['title', 'status', 'difficulty', 'objective', 'scenario', 'topics', 'tools', 'checkpoints', 'commands', 'terminalIntro']) {
      assert.ok(lab[field], `${lab.id} is missing ${field}`)
    }
    assert.ok(Object.keys(lab.commands).includes('help'))
    assert.ok(Object.keys(lab.commands).includes('history'))
  }
})

test('page parser accepts supported pages and falls back to home', () => {
  assert.equal(getCurrentPage('?page=projects'), 'projects')
  assert.equal(getCurrentPage('?page=cybersecurity-lab'), 'cybersecurity-lab')
  assert.equal(getCurrentPage('?page=unknown'), 'home')
})

test('repository cards are derived from project data', () => {
  assert.deepEqual(repositories, projects.map(project => ({ ...project.repository, href: project.github })))
})

test('theme storage falls back safely when storage is unavailable', () => {
  const blockedStorage = {
    getItem() { throw new Error('Storage blocked') },
    setItem() { throw new Error('Storage blocked') }
  }

  assert.equal(getStoredTheme(blockedStorage), 'light')
  assert.equal(storeTheme(blockedStorage, 'light'), false)
  assert.equal(storeTheme(null, 'light'), false)
})

test('theme toggle alternates only between supported themes', () => {
  assert.equal(getNextTheme('dark'), 'light')
  assert.equal(getNextTheme('light'), 'dark')
  assert.equal(getNextTheme('unexpected'), 'dark')
})

test('theme storage rejects invalid values', () => {
  const storage = { getItem: () => 'blue' }
  assert.equal(getStoredTheme(storage), 'light')
})

test('theme storage reads and writes valid values', () => {
  const values = new Map()
  const storage = {
    getItem(key) { return values.get(key) ?? null },
    setItem(key, value) { values.set(key, value) }
  }

  assert.equal(getStoredTheme(storage), 'light')
  assert.equal(storeTheme(storage, 'light'), true)
  assert.equal(getStoredTheme(storage), 'light')
})
