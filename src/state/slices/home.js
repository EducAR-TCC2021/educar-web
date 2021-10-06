import { createSlice } from '@reduxjs/toolkit';

// Slice
const home = createSlice({
  name: 'home',
  initialState: {
    selectedChannelIndex: null,
    snackbar: {
      open: false,
      message: '',
    },
  },
  reducers: {
    setSelectedChannelIndex(state, action) {
      state.selectedChannelIndex = action.payload;
    },
    setSnackbar(state, action) {
      state.snackbar = action.payload;
    },
  },
});

// Actions
const homeActions = Object(home.actions);

// Selectors

const selectSelectedChannelIndex = (state) => state.home.selectedChannelIndex;
const selectSelectedChannel = (state) => {
  const channels = state.entities.channels || [];
  return channels[state.home.selectedChannelIndex] || {};
};
const selectSnackbar = (state) => state.home.snackbar;

const homeSelectors = {
  selectSelectedChannelIndex,
  selectSelectedChannel,
  selectSnackbar,
};

// Exports
export { homeActions, homeSelectors };
export default home.reducer;
