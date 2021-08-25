import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  marker: {
    src: '',
    isValid: false,
  },
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
      type: 'model',
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
      type: 'video',
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
    clearEditorState() {
      return initialState;
    },
  },
});

const editorSelectors = {
  overlaysSelector: (state) => state.editor.overlays,
  markerSrcSelector: (state) => state.editor.marker.src,
  markerIsValidSelector: (state) => state.editor.marker.isValid,
};

const editorActions = Object(editor.actions);

export { editorActions, editorSelectors };
export default editor.reducer;
