/* eslint-disable no-unused-vars */
import {
  Box, Button, Container,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';
import { spaceToDash } from '../../utils';

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
      .then(() => {
        window.location.reload();
      })
      .catch(() => {});
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ display: 'flex' }}>
        <Container>
          <Typography variant="h6">Adicionar Canal</Typography>
          <Box m={2}>
            <TextField
              placeholder="Nome do Canal"
              id="channelId"
              name="channelId"
              required
              value={channelId}
              onChange={(e) => setChannelId(spaceToDash(e.target.value))}
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
        <Button onClick={handleSave}>Salvar</Button>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
AddChannelDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddChannelDialog;
