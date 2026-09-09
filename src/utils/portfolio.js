function getDefaultStorage() {
  try {
    return globalThis.localStorage
  } catch {
    return null
  }
}

export function getStoredTheme(storage = getDefaultStorage()) {
  try {
    return storage?.getItem('theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export function storeTheme(storage = getDefaultStorage(), theme) {
  try {
    storage?.setItem('theme', theme)
  } catch {
    return false
  }
  return true
}

export function getProjectFilters(projectList) {
  return ['All', ...new Set(projectList.map(project => project.category))]
}
