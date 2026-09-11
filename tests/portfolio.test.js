import test from 'node:test'
import assert from 'node:assert/strict'
import { projects, repositories } from '../src/data/projects.js'
import { cyberLabs } from '../src/data/cyberLabs.js'
import { skillGroups } from '../src/data/skills.js'
import { getCurrentPage, getProjectFilters, getProjectStats } from '../src/utils/portfolio.js'
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

test('skills data remains separated from project data', () => {
  assert.equal(skillGroups.length, 5)
  assert.ok(skillGroups.every(([title, skills]) => typeof title === 'string' && skills.length > 0))
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

