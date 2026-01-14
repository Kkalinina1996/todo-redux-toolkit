import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Stack } from 'rsuite'
import { toggleTodo, removeTodo } from '../../redux/slices/todoSlice'
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  if (!todo) return null

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>

      <Stack direction="row" spacing={10}>
        <Button
          appearance="primary"
          size="xs"
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </Button>

        <Button
          appearance="primary"
          color="red"
          size="xs"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  )
}

export default TodoItem
