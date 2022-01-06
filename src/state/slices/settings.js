import { createSlice } from '@reduxjs/toolkit';

// Slice
const settings = createSlice({
  name: 'settings',
  initialState: {
    paletteType: 'dark',
  },
  reducers: {
    setPaletteType(state, action) {
      state.paletteType = action.payload;
    },
    togglePaletteType(state) {
      state.paletteType = state.paletteType === 'dark' ? 'light' : 'dark';
    },
  },
});

// Actions
const settingsActions = Object(settings.actions);

// Selectors
const selectPaletteType = (state) => state.settings.paletteType;

const settingsSelectors = {
  selectPaletteType,
};

export { settingsActions, settingsSelectors };
export default settings.reducer;
