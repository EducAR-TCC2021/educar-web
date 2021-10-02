/* eslint-disable no-unused-vars */
import {
  Box, Button, Container,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';

function AddChannelDialog({ open, handleClose }) {
  const [channelId, setChannelId] = useState('');
  const [password, setPassword] = useState('');
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const request = channelRequests.createChannel({
    accessToken,
    channelId,
    password,
  });

  const handleSave = () => {
    if (channelId === '') return;
    handleClose();
    axios(request)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ display: 'flex' }}>
        <Container>
          <Box m={2}>
            <TextField
              placeholder="Nome do Canal"
              id="channelId"
              name="channelId"
              required
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
            />
          </Box>
          <Box m={2}>
            <TextField
              placeholder="Senha do Canal"
              id="channelPassword"
              name="channelPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
AddChannelDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddChannelDialog;
