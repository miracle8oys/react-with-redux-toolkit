import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {login} from "../service/auth";

export const loginSlice = createAsyncThunk(
    'auth/Login', 
    async (payload) => {
        console.log(payload);
        const response = await login(payload.username, payload.password);
        return response
    }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
      value: null
  },
  reducers: {
    logout: (state) => {
      state.value = null
    },
  },
  extraReducers: (snapshot) => {
      snapshot
        .addCase(loginSlice.fulfilled, (state, action) => {
            state.value = action.payload
        })
        .addCase(loginSlice.rejected, (state, action) => {
            state.value = action.payload
        })
  }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer