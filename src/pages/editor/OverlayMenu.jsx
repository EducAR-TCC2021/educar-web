import { Box, IconButton, makeStyles } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import SideSubMenu from './SideSubMenu';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

function OverlayMenu() {
  const classes = useStyles();
  return (
    <SideSubMenu
      title="Overlays"
      options={(
        <Box className={classes.container}>
          <IconButton size="small">
            <Add />
          </IconButton>
          <IconButton size="small">
            <Remove />
          </IconButton>
        </Box>
      )}
    />
  );
}

export default OverlayMenu;
