import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import SideSubMenu from './SideSubMenu';
import { editorActions, editorSelectors } from '../../state/slices/editor';
import OverlayMenuItem from './OverlayMenuItem';
import { overlayModalActions } from '../../state/slices/overlayModal';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

function OverlayMenu() {
  const classes = useStyles();
  const overlays = useSelector(editorSelectors.selectOverlays);
  const store = useStore();

  const handleAdd = () => store.dispatch(overlayModalActions.setIsAddingOverlay(true));

  const handleRemove = () => store.dispatch(editorActions.removeOverlay());

  return (
    <SideSubMenu
      title="Overlays"
      options={(
        <Box className={classes.container}>
          <IconButton size="small" onClick={handleAdd}>
            <Add />
          </IconButton>
          <IconButton size="small" onClick={handleRemove}>
            <Remove />
          </IconButton>
        </Box>
      )}
    >
      {overlays.map((overlay, index) => <OverlayMenuItem key={String(index)} id={index} nome={`Overlay ${index}`} />)}
    </SideSubMenu>
  );
}

export default OverlayMenu;
