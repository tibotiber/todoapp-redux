const visibilityFilter = (visibilityFilter = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return visibilityFilter
  }
}

export default visibilityFilter
