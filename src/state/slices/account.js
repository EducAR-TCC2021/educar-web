import { createSlice } from '@reduxjs/toolkit';

// Slice
const account = createSlice({
  name: 'account',
  initialState: {
    accessToken: null,
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

// Actions
const accountActions = Object(account.actions);

// Selectors

const selectAccessToken = (state) => state.account.accessToken;

const accountSelectors = {
  selectAccessToken,
};

// Exports
export { accountActions, accountSelectors };
export default account.reducer;
