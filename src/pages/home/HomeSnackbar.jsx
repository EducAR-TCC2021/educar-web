import { Snackbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions, homeSelectors } from '../../state/slices/home';

function HomeSnackbar() {
  const snackbar = useSelector(homeSelectors.selectSnackbar);
  console.log(snackbar);

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
