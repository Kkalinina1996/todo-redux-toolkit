import React, { useState } from 'react'
import { Input, Button, Stack } from 'rsuite'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlices' 

const TodoForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!text.trim()) return

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
    <Stack
      direction="column"   // 🔥 ВАЖНО: вертикально
      spacing={12}
      style={{ maxWidth:900, margin: '40px auto' }}
    >
      <Input
        placeholder="Enter new todo"
        value={text}
        onChange={setText}
        size="lg"
      />

      <Button
        appearance="primary"
        color="green"
        size="lg"
        block               
        onClick={handleAdd}
      >
        Add Todo
      </Button>
    </Stack>
  )
}

export default TodoForm
