import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import {
  useSelector,
  useStore,
} from 'react-redux';

import { overlayModalActions, overlayModalSelectors } from '../../../state/slices/overlayModal';

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default function ImagePreview() {
  const classes = useStyles();
  const src = useSelector(overlayModalSelectors.selectAddOverlaySrc);
  const store = useStore();

  const handleImgValid = () => {
    store.dispatch(overlayModalActions.setAddOverlayAttribution({
      url: src,
    }));
    store.dispatch(overlayModalActions.setAddOverlayIsValid(true));
  };

  const handleImgInvalid = () => {
    store.dispatch(overlayModalActions.setAddOverlayIsValid(false));
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
