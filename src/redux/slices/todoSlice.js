import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todos: [
    {
      id: Date.now().toString(),
      text: 'Learn React',
      completed: false,
    },
  ],
}


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      )
    },


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


export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
