import React, { useState } from 'react'
import { Button, Input } from 'rsuite'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlice'

const TodoForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') return

    dispatch(
      addTodo({
        id: Date.now().toString(),
        text: text,
        completed: false,
      })
    )

    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
    
      <Input
        placeholder="Enter new todo"
        value={text}
        onChange={(value) => setText(value)}
        style={{ marginBottom: 10 }}
      />

     
      <Button appearance="primary" type="submit">
        Add Todo
      </Button>
    </form>
  )
}

export default TodoForm
