import React, { useState, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';
import { editorSelectors } from '../../state/slices/editor';
import { homeSelectors } from '../../state/slices/home';
import SnackbarAlert from '../../components/SnackbarAlert';

const SaveSceneButton = forwardRef((_props, ref) => {
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const channels = useSelector(accountSelectors.selectChannelsMeta);
  const channelIndex = useSelector(homeSelectors.selectSelectedChannelIndex);
  const selectedChannel = channels[channelIndex];
  const { sceneId, sceneInfo } = useSelector(editorSelectors.selectScene);
  const request = channelRequests.updateScene({
    accessToken,
    channelId: selectedChannel.id,
    sceneId,
    scene: sceneInfo,
  });
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);

  const onSuccessClose = () => setSuccess(false);
  const onFailureClose = () => setFailure(false);
  const saveScene = () => {
    if (isRequesting) return;
    setIsRequesting(true);
    axios(request)
      .then((response) => {
        setIsRequesting(false);
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setFailure(true);
        }
      })
      .catch((error) => {
        setIsRequesting(false);
        setFailure(true);
        setErrorMsg(error.message);
      });
  };

  useImperativeHandle(ref, () => ({ saveScene }));

  const snackbarAnchor = {
    vertical: 'top',
    horizontal: 'center',
  };

  return (
    <>
      <Button
        disabled={isRequesting}
        variant="contained"
        onClick={saveScene}
      >
        Salvar Cena
      </Button>
      <SnackbarAlert
        open={success}
        severity="success"
        onClose={onSuccessClose}
        anchorOrigin={snackbarAnchor}
      >
        Cena salva com sucesso.
      </SnackbarAlert>
      <SnackbarAlert
        open={failure}
        severity="error"
        onClose={onFailureClose}
        anchorOrigin={snackbarAnchor}
      >
        {`Erro: ${errorMsg}.`}
      </SnackbarAlert>
    </>
  );
});

export default SaveSceneButton;
