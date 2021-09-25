/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editorActions, editorSelectors } from '../../state/slices/editor';

function SceneTextField() {
  const { name, isNewScene } = useSelector(editorSelectors.selectSceneState);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(editorActions.setName(e.target.value));

  return (
    <TextField
      id="sceneName"
      value={name}
      onChange={isNewScene ? onChange : null}
    />
  );
}

export default SceneTextField;
