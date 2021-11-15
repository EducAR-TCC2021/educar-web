import { createSlice } from '@reduxjs/toolkit';
import { editorActions, typeEnums } from './editor';

const initialState = {
  attribution: {},
  isAddingOverlay: false,
  src: '',
  type: typeEnums.IMAGE,
  isValid: false,
};

const overlayModal = createSlice({
  name: 'overlayModal',
  initialState,
  reducers: {
    setIsAddingOverlay(state, action) {
      state.isAddingOverlay = action.payload;
    },
    setAddOverlaySrc(state, action) {
      state.src = action.payload;
    },
    setAddOverlayIsValid(state, action) {
      state.isValid = action.payload;
    },
    setAddOverlayType(state, action) {
      state.type = action.payload;
      state.src = initialState.src;
    },
    setAddOverlayAttribution(state, action) {
      state.attribution = action.payload;
    },
  },
  extraReducers: {
    [editorActions.addOverlay.type]: () => initialState,
  },
});

// Actions
const overlayModalActions = Object(overlayModal.actions);

// Selector
const selectIsAddingOverlay = (state) => state.overlayModal.isAddingOverlay;

const selectIsValidAddOverlay = (state) => state.overlayModal.isValid;

const selectAddOverlaySrc = (state) => state.overlayModal.src;

const selectAddOverlayType = (state) => state.overlayModal.type;

const selectAddOverlayAttribution = (state) => state.overlayModal.attribution;

const overlayModalSelectors = {
  selectIsAddingOverlay,
  selectIsValidAddOverlay,
  selectAddOverlaySrc,
  selectAddOverlayType,
  selectAddOverlayAttribution,
};

export { overlayModalActions, overlayModalSelectors };
export default overlayModal.reducer;
