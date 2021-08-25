import { createSlice } from '@reduxjs/toolkit';

// TODO: store this slice in localStorage
const settings = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    scenes: [],
  },
  reducers: {
    userLoggedIn(state, action) {
      state.accessToken = action.payload;
    },
    userLoggedOff(state) {
      state.accessToken = null;
    },
    setScenes(state, action) {
      state.scenes = action.payload;
    },
  },
});

const { actions, reducer } = settings;
export const {
  userLoggedIn,
  userLoggedOff,
} = actions;
export default reducer;
