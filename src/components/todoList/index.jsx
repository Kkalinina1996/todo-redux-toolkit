import React from 'react'
import { useSelector } from 'react-redux'
import { Panel } from 'rsuite'
import TodoItem from '../todoitem'

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <Panel
      bordered
      header={<h3 style={{ textAlign: 'center' }}>Todo List</h3>}
      style={{ maxWidth: 600, margin: '40px auto' }}
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Panel>
  )
}

export default TodoList
