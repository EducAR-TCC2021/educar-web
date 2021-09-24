/* eslint-disable no-console */
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
  addOverlayModal: {
    isAddingOverlay: false,
    src: '',
    type: typeEnums.IMAGE,
    isValid: false,
  },
  blobFiles: {},
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
      const { position, rotation, scale } = action.payload.posRotScale;
      state.overlays[action.payload.id].position = position;
      state.overlays[action.payload.id].rotation = rotation;
      state.overlays[action.payload.id].scale = scale;
    },
    setIsAddingOverlay(state, action) {
      state.addOverlayModal.isAddingOverlay = action.payload;
    },
    setAddOverlaySrc(state, action) {
      state.addOverlayModal.src = action.payload;
    },
    setAddOverlayIsValid(state, action) {
      state.addOverlayModal.isValid = action.payload;
    },
    setAddOverlayType(state, action) {
      state.addOverlayModal.type = action.payload;
      state.addOverlayModal.src = initialState.addOverlayModal.src;
    },
    addOverlay(state) {
      state.overlays.push(
        {
          scale: {
            x: 1,
            y: 1,
            z: 1,
          },
          position: {
            x: 0,
            y: 0,
            z: 0,
          },
          type: state.addOverlayModal.type,
          url: state.addOverlayModal.src,
          rotation: {
            x: 0,
            y: 0,
            z: 0,
          },
        },
      );
      state.addOverlayModal = initialState.addOverlayModal;
    },
    removeOverlay(state) {
      state.overlays.splice(state.overlay_selection[0], 1);
      state.overlay_selection = [0];
    },
    setBlobFile(state, action) {
      state.blobFiles[action.payload.key] = action.payload.value;
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

const selectIsAddingOverlay = (state) => state.editor.addOverlayModal.isAddingOverlay;

const selectIsValidAddOverlay = (state) => state.editor.addOverlayModal.isValid;

const selectAddOverlaySrc = (state) => state.editor.addOverlayModal.src;

const selectAddOverlayType = (state) => state.editor.addOverlayModal.type;

const selectBlobFiles = (state) => state.editor.blobFiles;

const editorSelectors = {
  selectMarkerSrc,
  selectMarkerIsValid,
  selectOverlays,
  selectOverlaySelection,
  selectControlMode,
  selectIsAddingOverlay,
  selectIsValidAddOverlay,
  selectAddOverlaySrc,
  selectAddOverlayType,
  selectBlobFiles,
};

// Exports
export { editorActions, editorSelectors };
export { modesEnum, typeEnums };
export default editor.reducer;
