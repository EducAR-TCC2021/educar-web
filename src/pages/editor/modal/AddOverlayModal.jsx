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
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import { editorActions, editorSelectors, typeEnums } from '../../../state/slices/editor';
import ImagePreview from './ImagePreview';
import ModelPreview from './ModelPreview';
import { parseSketchfabUrl } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: '100%',
  },
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

const overlayPreview = (type) => {
  switch (type) {
    case typeEnums.IMAGE:
      return <ImagePreview />;
    case typeEnums.MODEL:
      return <ModelPreview />;
    default:
      return null;
  }
};

export default function AddOverlayModal() {
  const classes = useStyles();
  const open = useSelector(editorSelectors.selectIsAddingOverlay);
  const store = useStore();
  const srcValue = useSelector(editorSelectors.selectAddOverlaySrc);
  const isValid = useSelector(editorSelectors.selectIsValidAddOverlay);
  const type = useSelector(editorSelectors.selectAddOverlayType);

  const handleClose = () => store.dispatch(editorActions.setIsAddingOverlay(false));

  const handleSrcChange = (src) => store.dispatch(editorActions.setAddOverlaySrc(src));

  const handleTypeChange = (newType) => store.dispatch(editorActions.setAddOverlayType(newType));

  const handleAddOverlay = () => {
    if (type === typeEnums.MODEL) {
      store.dispatch(editorActions.setAddOverlaySrc(parseSketchfabUrl(srcValue)));
    }

    store.dispatch(editorActions.addOverlay());
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xl" className={classes.dialog}>
      <DialogTitle id="form-dialog-title">Adicionar Overlay</DialogTitle>
      <DialogContent>
        <FormControl variant="outlined" className={classes.form}>
          <Select
            id="markerType"
            value={type}
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            <MenuItem value={typeEnums.IMAGE}>Imagem</MenuItem>
            <MenuItem value={typeEnums.MODEL}>Modelo 3D</MenuItem>
          </Select>
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
        </FormControl>
        <Paper variant="outlined" className={classes.previewContainer} square>
          {overlayPreview(type)}
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
