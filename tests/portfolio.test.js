import test from 'node:test'
import assert from 'node:assert/strict'
import { projects, repositories } from '../src/data/projects.js'
import { getProjectFilters, getStoredTheme, storeTheme } from '../src/utils/portfolio.js'

test('project filters contain only categories present in project data', () => {
  assert.deepEqual(getProjectFilters(projects), ['All', 'Web Development', 'Tools'])
})

test('project ids are unique', () => {
  const ids = projects.map(project => project.id)
  assert.equal(new Set(ids).size, ids.length)
})

test('repository cards are derived from project data', () => {
  assert.deepEqual(repositories, projects.map(project => ({ ...project.repository, href: project.github })))
})

test('theme storage falls back safely when storage is unavailable', () => {
  const blockedStorage = {
    getItem() { throw new Error('Storage blocked') },
    setItem() { throw new Error('Storage blocked') }
  }

  assert.equal(getStoredTheme(blockedStorage), 'dark')
  assert.equal(storeTheme(blockedStorage, 'light'), false)
})

test('theme storage rejects invalid values', () => {
  const storage = { getItem: () => 'blue' }
  assert.equal(getStoredTheme(storage), 'dark')
})

test('theme storage reads and writes valid values', () => {
  const values = new Map()
  const storage = {
    getItem(key) { return values.get(key) ?? null },
    setItem(key, value) { values.set(key, value) }
  }

  assert.equal(getStoredTheme(storage), 'dark')
  assert.equal(storeTheme(storage, 'light'), true)
  assert.equal(getStoredTheme(storage), 'light')
})
