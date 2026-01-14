import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem'

const TodoList = () => {
  const todos = useSelector((state) => state.todo?.todos ?? [])

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
