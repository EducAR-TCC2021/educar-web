import { createSlice } from '@reduxjs/toolkit';

// Enums
const modesEnum = {
  TRANSLATE: 'translate',
  ROTATE: 'rotate',
  SCALE: 'scale',
};
const typeEnums = {
  MODEL: 'model',
  VIDEO: 'video',
  IMAGE: 'image',
};

const initialState = {
  trigger: {
    src: '',
    isValid: false,
  },
  overlay_selection: [0],
  controlMode: modesEnum.TRANSLATE,
  overlays: [],
  isNewScene: true,
  name: '',
};

// Slice
const editor = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setMarkerSrc(state, action) {
      state.trigger.src = action.payload;
    },
    setValidMarker(state) {
      state.trigger.isValid = true;
    },
    setInvalidMarker(state) {
      state.trigger.isValid = false;
    },
    setStateFromScene(state, action) {
      const scene = action.payload;
      return {
        ...initialState,
        overlays: scene.overlays,
        trigger: {
          src: scene.trigger,
          isValid: true,
        },
        isNewScene: false,
        name: scene.name,
      };
    },
    setOverlaySelection(state, action) {
      state.overlay_selection = action.payload;
    },
    setControlMode(state, action) {
      state.controlMode = action.payload;
    },
    setOverlayTransform(state, action) {
      state.overlays[action.payload.id] = action.payload.overylay;
    },
    clearEditorState() {
      return initialState;
    },
  },
});

// Actions
const editorActions = Object(editor.actions);

// Selectors
const selectMarkerSrc = (state) => state.editor.trigger.src;

const selectMarkerIsValid = (state) => state.editor.trigger.isValid;

const selectOverlays = (state) => state.editor.overlays;

const selectOverlaySelection = (state) => state.editor.overlay_selection;

const selectControlMode = (state) => state.editor.controlMode;

const editorSelectors = {
  selectMarkerSrc,
  selectMarkerIsValid,
  selectOverlays,
  selectOverlaySelection,
  selectControlMode,
};

// Exports
export { editorActions, editorSelectors };
export { modesEnum, typeEnums };
export default editor.reducer;
