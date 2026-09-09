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
    return themes.includes(storedTheme) ? storedTheme : 'dark'
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
