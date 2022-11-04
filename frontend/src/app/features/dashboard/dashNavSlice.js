import { createSlice } from '@reduxjs/toolkit'

const dashNavSlice = createSlice({
  name: 'dashNav',
  initialState: 'Dashboard',
  reducers: {
    setDashNav (_, action) {
      return action.payload
    }
  }
})

export const { setDashNav } = dashNavSlice.actions

export const selectDashNav = state => state.dashNav

export default dashNavSlice.reducer
