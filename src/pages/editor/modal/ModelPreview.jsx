import React, {
  useEffect,
  useState,
} from 'react';
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
import { accountSelectors } from '../../../state/slices/account';

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const modelsBaseUrl = 'https://sketchfab.com/3d-models/';

export default function ModelPreview() {
  const classes = useStyles();
  const src = useSelector(editorSelectors.selectAddOverlaySrc);
  const store = useStore();
  const token = useSelector(accountSelectors.selectAccessToken);
  const blobs = useSelector(editorSelectors.selectBlobFiles);
  const [thumbnail, setThumbnail] = useState('');
  const [alertAlreadyUsed, setAlertAlreadyUsed] = useState(false);

  async function parseModelUrl(url) {
    if (url) {
      const baseUrl = url.substring(0, 32);
      if (baseUrl === modelsBaseUrl) {
        const pieces = url.split('-');
        const modelId = pieces[pieces.length - 1];
        const metadataUrl = `https://api.sketchfab.com/v3/models/${modelId}`;
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          mode: 'cors',
        };
        const response = await fetch(metadataUrl, options);
        if (response.ok) {
          const metadata = await response.json();
          if (metadata.isDownloadable) {
            return metadata.thumbnails.images[0].url;
          }
        }
      }
    }
    return undefined;
  }

  useEffect(async () => {
    store.dispatch(editorActions.setAddOverlayIsValid(false));
    setAlertAlreadyUsed(false);
    setThumbnail('');
    const thumbnailUrl = await parseModelUrl(src);
    if (thumbnailUrl) {
      setThumbnail(thumbnailUrl);
      if (blobs[src]) {
        setAlertAlreadyUsed(true);
      } else {
        store.dispatch(editorActions.setAddOverlayIsValid(true));
      }
    }
  }, [src]);

  return (
    <>
      <img
        className={classes.img}
        src={thumbnail}
        alt=""
      />
      <Snackbar
        autoHideDuration={null}
        severity="error"
        TransitionComponent={Slide}
        open={alertAlreadyUsed}
        message="Modelo já adicionado."
      />
    </>
  );
}
