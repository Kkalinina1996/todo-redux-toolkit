import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Stack } from 'rsuite'
import { addTodo } from '../../redux/slices/todoSlice'

const TodoForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim() === '') return

    dispatch(
      addTodo({
        id: Date.now().toString(),
        text,
        completed: false,
      })
    )

    setText('')
  }

  return (
    <Stack spacing={10} style={{ maxWidth: 600, margin: '20px auto' }}>
      <Input
        placeholder="Enter new todo"
        value={text}
        onChange={(value) => setText(value)}
      />

      <Button appearance="primary" onClick={handleAdd}>
        Add Todo
      </Button>
    </Stack>
  )
}

export default TodoForm
