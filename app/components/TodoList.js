import React, { PropTypes } from 'react'
import Todo from './Todo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
    return todos
    case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed)
  }
}

const TodoList = ({ todos, filter }) => {
  return (
    <ul>
      {getVisibleTodos(todos, filter).map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => console.log('todo clicked: ' + todo.id)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired
}

export default TodoList
