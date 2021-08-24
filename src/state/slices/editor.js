import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trigger: {
    src: '',
    isValid: false,
  },
};

const editor = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setTriggerSrc(state, action) {
      state.trigger.src = action.payload;
    },
    setValidTrigger(state) {
      state.trigger.isValid = true;
    },
    setInvalidTrigger(state) {
      state.trigger.isValid = false;
    },
    clearEditorState() {
      return initialState;
    },
  },
});

const { actions, reducer } = editor;
export const {
  setTriggerSrc,
  setValidTrigger,
  setInvalidTrigger,
  clearEditorState,
} = actions;
export default reducer;
