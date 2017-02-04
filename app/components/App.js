import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import mockdata from '../../mockdata'

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList todos={mockdata.todos} filter={mockdata.visibilityFilter} />
      <Footer visibilityFilter={mockdata.visibilityFilter} />
    </div>
  )
}

export default App
