import { createSlice } from '@reduxjs/toolkit';

// Slice
const home = createSlice({
  name: 'home',
  initialState: {
    selectedChannel: null,
  },
  reducers: {
    setSelectedChannel(state, action) {
      state.selectedChannel = action.payload;
    },
  },
});

// Actions
const homeActions = Object(home.actions);

// Selectors

const selectSelectedChannel = (state) => state.home.selectedChannel;

const homeSelectors = {
  selectSelectedChannel,
};

// Exports
export { homeActions, homeSelectors };
export default home.reducer;
