import React, {
  useEffect,
  useState,
} from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import {
  useSelector,
  useStore,
} from 'react-redux';

import { accountSelectors } from '../../../state/slices/account';
import { parseSketchfabUrl } from '../../../utils';
import { blobFilesSelectors } from '../../../state/slices/blobs';
import { overlayModalActions, overlayModalSelectors } from '../../../state/slices/overlayModal';
import SnackbarAlert from '../../../components/SnackbarAlert';

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const modelsBaseUrl = 'https://sketchfab.com/3d-models/';

export default function ModelPreview() {
  const classes = useStyles();
  const src = useSelector(overlayModalSelectors.selectAddOverlaySrc);
  const store = useStore();
  const token = useSelector(accountSelectors.selectAccessToken);
  const blobs = useSelector(blobFilesSelectors.selectBlobFiles);
  const [thumbnail, setThumbnail] = useState('');
  const [alertAlreadyUsed, setAlertAlreadyUsed] = useState(false);

  const snackbarAnchor = {
    vertical: 'top',
    horizontal: 'center',
  };

  async function parseModelUrl(url) {
    if (url) {
      const baseUrl = url.substring(0, 32);
      if (baseUrl === modelsBaseUrl) {
        const modelId = parseSketchfabUrl(url);
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
            return [
              metadata.thumbnails.images[0].url,
              {
                license: { name: metadata.license.label, url: metadata.license.url },
                user: { name: metadata.user.displayName, url: metadata.user.profileUrl },
                model: { name: metadata.name, url: metadata.viewerUrl },
              },
            ];
          }
        }
      }
    }
    return [undefined, undefined];
  }

  useEffect(async () => {
    store.dispatch(overlayModalActions.setAddOverlayIsValid(false));
    setAlertAlreadyUsed(false);
    setThumbnail('');
    const [thumbnailUrl, metadata] = await parseModelUrl(src);
    if (thumbnailUrl) {
      setThumbnail(thumbnailUrl);
      if (blobs[src]) {
        setAlertAlreadyUsed(true);
      } else {
        store.dispatch(overlayModalActions.setAddOverlayAttribution(metadata));
        store.dispatch(overlayModalActions.setAddOverlayIsValid(true));
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
      <SnackbarAlert
        open={alertAlreadyUsed}
        severity="error"
        onClose={() => setAlertAlreadyUsed(false)}
        anchorOrigin={snackbarAnchor}
      >
        Modelo já adicionado.
      </SnackbarAlert>
    </>
  );
}
