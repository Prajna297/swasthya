import { createSlice } from '@reduxjs/toolkit'

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState: 'Patient',
  reducers: {
    setUserRole(_, action) {
      return action.payload
    }
  }
})

export const { setUserRole } = userRoleSlice.actions

export const selectUserRole = state => state.userRole

export default userRoleSlice.reducer
