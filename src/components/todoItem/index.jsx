 import React from 'react'

// Компонент для одной задачи
const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.text}
    </li>
  )
}

export default TodoItem
