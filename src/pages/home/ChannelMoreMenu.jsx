/* eslint-disable no-unused-vars */
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';

function ChannelMoreMenu({ channelId, anchorEl, handleClose }) {
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const deleteRequest = channelRequests.deleteChannel({
    accessToken,
    channelId,
  });

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={() => {
        axios(deleteRequest)
          .then()
          .catch();
        handleClose();
      }}
      >
        Deletar
      </MenuItem>
    </Menu>
  );
}
ChannelMoreMenu.defaultProps = {
  anchorEl: null,
};
ChannelMoreMenu.propTypes = {
  channelId: PropTypes.string.isRequired,
  anchorEl: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
};

export default ChannelMoreMenu;
