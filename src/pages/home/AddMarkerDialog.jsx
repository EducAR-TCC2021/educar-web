import {
  Button, Dialog, DialogActions, DialogContent, makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import MarkerSelectionContainer from '../marker/MarkerSelectionContainer';

const useStyles = makeStyles({
  window: {
    minWidth: '600px',
  },
});

function AddMarkerDialog({ open, handleClose }) {
  const classes = useStyles();
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
        <Button onClick={() => {}}>Salvar</Button>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
AddMarkerDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddMarkerDialog;
