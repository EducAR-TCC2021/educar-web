import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Snackbar,
  Slide,
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
  const [imgExists, setImgExists] = useState(false);
  const [alertUndownloadable, setAlertUndownloadable] = useState(false);
  const classes = useStyles();
  const src = useSelector(editorSelectors.selectAddOverlaySrc);
  const store = useStore();

  async function checkIfDownloadable() {
    try {
      const response = await fetch(src);
      if (response.ok) {
        setAlertUndownloadable(false);
        store.dispatch(editorActions.setValidMarker());
      }
    } catch (e) {
      setAlertUndownloadable(true);
    }
  }

  useEffect(() => {
    store.dispatch(editorActions.setAddOverlayIsValid(false));
    setAlertUndownloadable(false);
    setImgExists(false);
  }, [src]);

  useEffect(() => {
    if (imgExists) {
      checkIfDownloadable();
    }
  }, [imgExists]);

  return (
    <>
      <img
        className={classes.img}
        src={src}
        alt=""
        onLoad={() => setImgExists(true)}
      />
      <Snackbar
        autoHideDuration={null}
        severity="error"
        open={alertUndownloadable}
        TransitionComponent={Slide}
        message="Não é possível utilizar esta imagem (possível erro de CORS)."
      />
    </>
  );
}
