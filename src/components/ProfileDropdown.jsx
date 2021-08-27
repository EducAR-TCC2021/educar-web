import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useStore } from 'react-redux';

import { accountActions } from '../state/slices/account';

function ProfileDropdown() {
  const store = useStore();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    store.dispatch(accountActions.userLoggedOff());
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true">
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileDropdown;
