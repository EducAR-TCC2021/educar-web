import React from 'react';
import { useSelector, useStore } from 'react-redux';
import {
  makeStyles,
  Paper,
} from '@material-ui/core';

import {
  setValidTrigger,
  setInvalidTrigger,
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

function TriggerPreview() {
  const classes = useStyles();
  const store = useStore();
  const src = useSelector((state) => state.editor.trigger.src);

  const handleValidImage = () => {
    store.dispatch(setValidTrigger());
  };

  const handleInvalidImage = () => {
    store.dispatch(setInvalidTrigger());
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

export default TriggerPreview;
