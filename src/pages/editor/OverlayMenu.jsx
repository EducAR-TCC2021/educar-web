import { Box, IconButton, makeStyles } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import SideSubMenu from './SideSubMenu';

import { editorSelectors } from '../../state/slices/editor';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

function OverlayMenu() {
  const classes = useStyles();
  const overlays = useSelector(editorSelectors.overlaysSelector);

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
    >
      {overlays.map((overlay) => <Box>{ overlay.name }</Box>)}
    </SideSubMenu>
  );
}

export default OverlayMenu;
