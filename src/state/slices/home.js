import { createSlice } from '@reduxjs/toolkit';

// Slice
const home = createSlice({
  name: 'home',
  initialState: {
    selectedChannelIndex: null,
  },
  reducers: {
    setSelectedChannelIndex(state, action) {
      state.selectedChannelIndex = action.payload;
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

const homeSelectors = {
  selectSelectedChannelIndex,
  selectSelectedChannel,
};

// Exports
export { homeActions, homeSelectors };
export default home.reducer;
