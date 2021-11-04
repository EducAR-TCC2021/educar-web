import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Scene from './fiber/Scene';

// '#282c34',

const useStyles = makeStyles(() => ({
  viewport: {
    background: 'linear-gradient(180deg, rgba(50,57,71,1) 0%, rgba(40,44,52,1) 100%)',
    // background: 'linear-gradient(0deg, rgba(229,232,240,1) 0%, rgba(255,255,255,1) 59%)',
    flex: 3,
    maxWidth: '100vw',
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
