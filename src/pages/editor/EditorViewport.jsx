import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Scene from './fiber/Scene';

const useStyles = makeStyles(() => ({
  viewport: {
    backgroundColor: '#282c34',
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
