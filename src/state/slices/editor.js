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
  marker: {
    src: 'https://static.dw.com/image/37030280_101.jpg',
    isValid: false,
  },
  overlay_selection: [0],
  controlMode: modesEnum.TRANSLATE,
  overlays: [
    {
      name: 'Model',
      position: {
        x: 0.1,
        y: 0.15,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scale: {
        x: 0.1,
        y: 0.1,
        z: 0.1,
      },
      type: typeEnums.MODEL,
      url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
    },
    {
      name: 'Model 2',
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scale: {
        x: 0.1,
        y: 0.1,
        z: 0.1,
      },
      type: typeEnums.MODEL,
      url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
    },
    {
      name: 'Video',
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 90,
        y: 0,
        z: 0,
      },
      scale: {
        x: 0.2,
        y: 0.2,
        z: 1,
      },
      type: typeEnums.VIDEO,
      url: 'https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4',
    },
    {
      name: 'Image',
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 90,
        y: 0,
        z: 0,
      },
      scale: {
        x: 0.2,
        y: 0.2,
        z: 1,
      },
      type: 'image',
      url: 'https://static.dw.com/image/37030280_101.jpg',
    },
  ],
};

// Slice
const editor = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setMarkerSrc(state, action) {
      state.marker.src = action.payload;
    },
    setValidMarker(state) {
      state.marker.isValid = true;
    },
    setInvalidMarker(state) {
      state.marker.isValid = false;
    },
    setOverlaysFromScene(state, action) {
      state.overlays = action.payload.overlays;
    },
    setOverlaySelection(state, action) {
      state.overlay_selection = action.payload;
    },
    setControlMode(state, action) {
      state.controlMode = action.payload;
    },
    clearEditorState() {
      return initialState;
    },
  },
});

// Actions
const editorActions = Object(editor.actions);

// Selectors
const selectMarkerSrc = (state) => state.editor.marker.src;

const selectMarkerIsValid = (state) => state.editor.marker.isValid;

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
