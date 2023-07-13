import {createSlice} from '@reduxjs/toolkit'

export const Handler = createSlice({
  name: 'theme',
  initialState: {
    value: 'primary',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {changeTheme} = Handler.actions
export const selectedTheme = (state) => state.theme.value
export default Handler.reducer