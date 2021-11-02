import React, {
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
  const classes = useStyles();
  const src = useSelector(editorSelectors.selectMarkerSrc);
  const store = useStore();

  const handleValidImage = () => {
    store.dispatch(editorActions.setValidMarker());
  };

  const handleInvalidImage = () => {
    store.dispatch(editorActions.setInvalidMarker());
  };

  return (
    <Paper variant="outlined" className={classes.imgContainer} square>
      <img
        className={classes.img}
        src={src}
        alt=""
        onLoad={handleValidImage}
        onError={handleInvalidImage}
      />
    </Paper>
  );
}

export default MarkerPreview;
