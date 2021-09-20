import React from 'react';
import {
  makeStyles,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import { editorActions, editorSelectors } from '../../../state/slices/editor';
import ImagePreview from './ImagePreview';

const useStyles = makeStyles((theme) => ({
  previewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '2 / 1',
    minWidth: '380px',
    width: 'calc(100vw - 480px)',
    maxWidth: '880px',
    marginTop: theme.spacing(4),
  },
}));

export default function AddOverlayModal() {
  const classes = useStyles();
  const open = useSelector(editorSelectors.selectIsAddingOverlay);
  const store = useStore();
  const srcValue = useSelector(editorSelectors.selectAddOverlaySrc);
  const isValid = useSelector(editorSelectors.selectIsValidAddOverlay);

  const handleClose = () => store.dispatch(editorActions.setIsAddingOverlay(false));

  const handleSrcChange = (src) => store.dispatch(editorActions.setAddOverlaySrc(src));

  const handleAddOverlay = () => store.dispatch(editorActions.addOverlay());

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xl" className={classes.dialog}>
      <DialogTitle id="form-dialog-title">Adicionar Overlay</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="markerSrc"
          label="Link do Overlay"
          name="markerSrc"
          autoFocus
          value={srcValue}
          onChange={(e) => handleSrcChange(e.target.value)}
        />
        <Paper variant="outlined" className={classes.previewContainer} square>
          <ImagePreview />
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAddOverlay} variant="contained" color="primary" disabled={!isValid}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
