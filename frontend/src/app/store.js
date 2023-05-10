import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import todoReducer from '../features/todos/todoSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    todos: todoReducer,
  },
})
