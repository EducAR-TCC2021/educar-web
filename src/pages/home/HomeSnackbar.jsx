import { Snackbar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { homeActions } from '../../state/slices/home';

function HomeSnackbar() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(homeActions.setSnackbar({
      open: false,
      message: '',
    }));
  };

  return (
    <Snackbar
      open={false}
      autoHideDuration={6000}
      message="fasd"
      onClose={handleClose}
    />
  );
}

export default HomeSnackbar;
