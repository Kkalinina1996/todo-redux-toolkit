import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние Redux
const initialState = {
  todos: [
    {
      id: Date.now().toString(),
      text: 'Learn React',
      completed: false,
    },
  ],
}

// Создаём slice
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Добавить задачу
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },

    // Удалить задачу по id
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      )
    },

    // Переключить completed
    toggleTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      )

      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

// Экспорт actions
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

// Экспорт reducer
export default todoSlice.reducer
