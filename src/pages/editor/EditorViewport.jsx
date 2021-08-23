import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Scene from './Scene';

const useStyles = makeStyles(() => ({
  viewport: {
    backgroundColor: 'white',
    flex: 3,
  },
}));

export default function EditorViewport() {
  const classes = useStyles();
  return (
    <Box className={classes.viewport}>
      <Scene />
    </Box>
  );
}
