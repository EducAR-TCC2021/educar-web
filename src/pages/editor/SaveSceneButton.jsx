import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';
import { editorSelectors } from '../../state/slices/editor';
import { homeSelectors } from '../../state/slices/home';

function SaveSceneButton() {
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

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          axios(request)
            .then(() => {})
            .catch(() => {});
        }}
      >
        Salvar Cena
      </Button>
    </>
  );
}

export default SaveSceneButton;
