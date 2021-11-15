import { createSlice } from '@reduxjs/toolkit';

const blobFiles = createSlice({
  name: 'blobFiles',
  initialState: {},
  reducers: {
    setBlobFile(state, action) {
      state[action.payload.key] = action.payload.value;
    },
  },
});

const selectBlobFiles = (state) => state.blobFiles;

const blobFilesActions = Object(blobFiles.actions);

const blobFilesSelectors = {
  selectBlobFiles,
};

export { blobFilesActions, blobFilesSelectors };
export default blobFiles.reducer;
