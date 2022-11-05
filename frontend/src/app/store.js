import { configureStore } from '@reduxjs/toolkit'
import dashNavReducer from './features/dashboard/dashNavSlice'
import userRoleReducer from './features/dashboard/dashNavSlice'

export const store = configureStore({
  reducer: {
    dashNav: dashNavReducer,
    userRole: userRoleReducer
  }
})
