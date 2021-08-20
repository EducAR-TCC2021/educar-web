import { createSlice } from '@reduxjs/toolkit';

// TODO: store this slice in localStorage
const settings = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    userLoggedIn(state) {
      state.isLoggedIn = true;
    },
    userLoggedOff(state) {
      state.isLoggedIn = false;
    },
  },
});

const { actions, reducer } = settings;
export const {
  userLoggedIn,
  userLoggedOff,
} = actions;
export default reducer;
