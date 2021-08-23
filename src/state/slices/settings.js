import { createSlice } from '@reduxjs/toolkit';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const settings = createSlice({
  name: 'settings',
  initialState: {
    paletteType: prefersDarkMode ? 'dark' : 'light',
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

const { actions, reducer } = settings;
export const {
  setPaletteType,
  togglePaletteType,
} = actions;
export default reducer;
