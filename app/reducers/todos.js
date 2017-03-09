const todo = (todo = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (action.id !== todo.id) {
        return todo
      }
      return Object.assign({}, todo, {
        completed: !todo.completed
      })
    default:
      todo
  }
}

const todos = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return todos.map(t => todo(t, action))
    default:
      return todos
  }
}

export default todos
