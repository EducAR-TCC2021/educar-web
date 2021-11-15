/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import undoable, { includeAction } from 'redux-undo';

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
    attribution: {},
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
      const { name, scene } = action.payload;
      return {
        ...initialState,
        overlays: scene.overlays,
        trigger: {
          src: scene.trigger,
          isValid: true,
        },
        isNewScene: false,
        name,
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
    setAddOverlayAttribution(state, action) {
      state.addOverlayModal.attribution = action.payload;
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
          attribution: state.addOverlayModal.attribution,
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
    setName(state, action) {
      state.name = action.payload;
    },
    setTransform(state, action) {
      const idx = state.overlay_selection[0];
      state.overlays[idx] = {
        ...state.overlays[idx],
        ...action.payload,
      };
    },
  },
});

// Actions
const editorActions = Object(editor.actions);

// Selectors
const selectMarkerSrc = (state) => state.editor.present.trigger.src;

const selectMarkerIsValid = (state) => state.editor.present.trigger.isValid;

const selectOverlays = (state) => state.editor.present.overlays;

const selectOverlaySelection = (state) => state.editor.present.overlay_selection;

const selectControlMode = (state) => state.editor.present.controlMode;

const selectScene = (state) => ({
  sceneId: state.editor.present.name,
  sceneInfo: {
    trigger: state.editor.present.trigger.src,
    overlays: state.editor.present.overlays,
  },
});

const selectIsAddingOverlay = (state) => state.editor.present.addOverlayModal.isAddingOverlay;

const selectIsValidAddOverlay = (state) => state.editor.present.addOverlayModal.isValid;

const selectAddOverlaySrc = (state) => state.editor.present.addOverlayModal.src;

const selectAddOverlayType = (state) => state.editor.present.addOverlayModal.type;

const selectBlobFiles = (state) => state.editor.present.blobFiles;

const selectSceneState = (state) => state.editor.present;

const placeholderOverlay = {
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
    x: 1,
    y: 1,
    z: 1,
  },
  attribution: {},
};

const selectOverlay = (state) => {
  const idx = state.editor.present.overlay_selection[0];
  return state.editor.present.overlays[idx] || placeholderOverlay;
};

const selectTransform = (state) => {
  const overlay = selectOverlay(state);
  return [overlay.position, overlay.rotation, overlay.scale];
};

const selectAttribution = (state) => {
  const overlay = selectOverlay(state);
  return overlay.attribution;
};

const selectType = (state) => {
  const overlay = selectOverlay(state);
  return overlay.type;
};

const editorSelectors = {
  selectMarkerSrc,
  selectMarkerIsValid,
  selectOverlays,
  selectOverlaySelection,
  selectControlMode,
  selectScene,
  selectIsAddingOverlay,
  selectIsValidAddOverlay,
  selectAddOverlaySrc,
  selectAddOverlayType,
  selectBlobFiles,
  selectSceneState,
  selectTransform,
  selectAttribution,
  selectType,
};

// Undoable Actions
const undoableActions = [
  editorActions.setOverlayTransform.type,
  editorActions.addOverlay.type,
  editorActions.removeOverlay.type,
  editorActions.setTransform.type,
];

// Exports
export { editorActions, editorSelectors };
export { modesEnum, typeEnums };
export default undoable(editor.reducer, { filter: includeAction(undoableActions) });
