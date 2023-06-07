import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  password: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    
  },
});

export const { setLogin, setPassword, setAuthenticated } = userSlice.actions;

export const selectUserState = state => state.user;

export default userSlice.reducer;
