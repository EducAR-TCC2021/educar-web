import React, {
  useEffect,
  useState,
} from 'react';
import { useSelector, useStore } from 'react-redux';
import {
  makeStyles,
  Paper,
} from '@material-ui/core';

import {
  editorActions,
  editorSelectors,
} from '../../state/slices/editor';
import SnackbarAlert from '../../components/SnackbarAlert';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '440px',
    marginTop: theme.spacing(4),
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function MarkerPreview() {
  const [imgExists, setImgExists] = useState(false);
  const [alertUndownloadable, setAlertUndownloadable] = useState(false);
  const classes = useStyles();
  const src = useSelector(editorSelectors.selectMarkerSrc);
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
    store.dispatch(editorActions.setInvalidMarker());
    setAlertUndownloadable(false);
    setImgExists(false);
  }, [src]);

  useEffect(() => {
    if (imgExists) {
      checkIfDownloadable();
    }
  }, [imgExists]);

  const handleValidImage = () => {
    setImgExists(true);
  };

  return (
    <Paper variant="outlined" className={classes.imgContainer} square>
      <img
        className={classes.img}
        src={src}
        alt=""
        onLoad={handleValidImage}
      />
      <SnackbarAlert
        autoHideDuration={null}
        severity="error"
        open={alertUndownloadable}
      >
        Não é possível utilizar esta imagem (possível erro de CORS).
      </SnackbarAlert>
    </Paper>
  );
}

export default MarkerPreview;
