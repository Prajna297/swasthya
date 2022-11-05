import { configureStore } from '@reduxjs/toolkit'
import userRoleReducer from './features/user/userRoleSlice'

export const store = configureStore({
  reducer: {
    userRole: userRoleReducer
  }
})
