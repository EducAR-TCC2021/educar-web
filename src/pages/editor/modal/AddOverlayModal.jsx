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
  Link,
  Typography,
} from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import { editorActions, editorSelectors, typeEnums } from '../../../state/slices/editor';
import ImagePreview from './ImagePreview';
import ModelPreview from './ModelPreview';
import { parseSketchfabUrl } from '../../../utils';
import { overlayModalActions, overlayModalSelectors } from '../../../state/slices/overlayModal';

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
      return (
        <>
          <ModelPreview />
        </>
      );
    default:
      return null;
  }
};

export default function AddOverlayModal() {
  const classes = useStyles();
  const open = useSelector(overlayModalSelectors.selectIsAddingOverlay);
  const store = useStore();
  const srcValue = useSelector(overlayModalSelectors.selectAddOverlaySrc);
  const isValid = useSelector(overlayModalSelectors.selectIsValidAddOverlay);
  const type = useSelector(overlayModalSelectors.selectAddOverlayType);
  const overlayQuantity = useSelector(editorSelectors.selectOverlays).length;
  const attribution = useSelector(overlayModalSelectors.selectAddOverlayAttribution);

  const handleClose = () => store.dispatch(overlayModalActions.setIsAddingOverlay(false));

  const handleSrcChange = (src) => store.dispatch(overlayModalActions.setAddOverlaySrc(src));

  const handleTypeChange = (newType) => store.dispatch(
    overlayModalActions.setAddOverlayType(newType),
  );

  const handleAddOverlay = () => {
    const src = (type === typeEnums.MODEL) ? parseSketchfabUrl(srcValue) : srcValue;

    store.dispatch(editorActions.setOverlaySelection([overlayQuantity]));
    store.dispatch(editorActions.addOverlay({
      type,
      src,
      attribution,
    }));
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
        {
          (type === typeEnums.MODEL) ? (
            <Link href="https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=b9ddc40b93e34cdca1fc152f39b9f375&licenses=72360ff1740d419791934298b8b6d270&licenses=bbfe3f7dbcdd4122b966b85b9786a989&licenses=2628dbe5140a4e9592126c8df566c0b7&licenses=34b725081a6a4184957efaec2cb84ed3&licenses=7c23a1ba438d4306920229c12afcb5f9&sort_by=-relevance&type=models" target="_blank" color="inherit">
              <Typography>
                Pesquisar Modelos
              </Typography>
            </Link>
          ) : null
        }
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
