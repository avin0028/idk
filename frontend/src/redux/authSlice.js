import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userInfo: localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      localStorage.setItem("userinfo", JSON.stringify(action.payload))
      state.userInfo = action.payload
    },
  },
})

export const { setUserInfo } = authSlice.actions

export default authSlice.reducer
