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
