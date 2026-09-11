function getDefaultStorage() {
  try {
    return globalThis.localStorage
  } catch {
    return null
  }
}

export const themes = ['dark', 'light']

export function getStoredTheme(storage = getDefaultStorage()) {
  try {
    const storedTheme = storage?.getItem('theme')
    return themes.includes(storedTheme) ? storedTheme : 'light'
  } catch {
    return 'light'
  }
}

export function storeTheme(storage = getDefaultStorage(), theme) {
  if (!storage || !themes.includes(theme)) {
    return false
  }

  try {
    storage.setItem('theme', theme)
  } catch {
    return false
  }
  return true
}

export function getNextTheme(theme) {
  return theme === 'dark' ? 'light' : 'dark'
}

export function getProjectFilters(projectList) {
  return ['All', ...new Set(projectList.map(project => project.category))]
}

export function getCurrentPage(search = globalThis.location?.search ?? '') {
  const page = new URLSearchParams(search).get('page')
  return page === 'projects' || page === 'cybersecurity-lab' ? page : 'home'
}

export function getProjectStats(projectList) {
  return projectList.reduce((stats, project) => {
    const status = project.status ?? 'In progress'
    stats[status] = (stats[status] ?? 0) + 1
    return stats
  }, {})
}
