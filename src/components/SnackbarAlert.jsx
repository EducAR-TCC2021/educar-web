import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar, Slide } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const DEFAULT_AUTOHIDE_DURATION = 2000;
const DEFAULT_ANCHOR_ORIGIN = {
  vertical: 'bottom',
  horizontal: 'center',
};

export default function SnackbarAlert({
  children,
  open,
  severity,
  onClose,
  anchorOrigin,
  autoHideDuration,
}) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      TransitionComponent={Slide}
    >
      <Alert
        variant="filled"
        severity={severity}
      >
        {children}
      </Alert>
    </Snackbar>
  );
}
SnackbarAlert.defaultProps = {
  anchorOrigin: DEFAULT_ANCHOR_ORIGIN,
  autoHideDuration: DEFAULT_AUTOHIDE_DURATION,
};
SnackbarAlert.propTypes = {
  autoHideDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  severity: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.objectOf({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
};
