import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import {
  useSelector,
  useStore,
} from 'react-redux';

import { editorActions, editorSelectors } from '../../../state/slices/editor';

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default function ImagePreview() {
  const classes = useStyles();
  const src = useSelector(editorSelectors.selectAddOverlaySrc);
  const store = useStore();

  const handleImgValid = () => {
    store.dispatch(editorActions.setAddOverlayIsValid(true));
  };

  const handleImgInvalid = () => {
    store.dispatch(editorActions.setAddOverlayIsValid(false));
  };

  return (
    <>
      <img
        className={classes.img}
        src={src}
        alt=""
        onLoad={handleImgValid}
        onError={handleImgInvalid}
      />
    </>
  );
}
