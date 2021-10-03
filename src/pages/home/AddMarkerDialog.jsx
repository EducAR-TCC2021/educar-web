import {
  Button, Dialog, DialogActions, DialogContent, makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { editorActions } from '../../state/slices/editor';
import MarkerSelectionContainer from '../marker/MarkerSelectionContainer';

const useStyles = makeStyles({
  window: {
    minWidth: '600px',
  },
});

function AddMarkerDialog({ open, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogContent
        className={classes.window}
      >
        <MarkerSelectionContainer />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Salvar</Button>
        <Button onClick={() => {
          handleClose();
          dispatch(editorActions.setMarkerSrc(''));
        }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
AddMarkerDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddMarkerDialog;
