import { configureStore } from '@reduxjs/toolkit'
import dashNavReducer from './features/dashboard/dashNavSlice'

export const store = configureStore({
  reducer: {
    dashNav: dashNavReducer
  }
})
