/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from 'redux-query-react';
import axios from 'axios';
import { accountSelectors } from '../../state/slices/account';
import { selectEntities } from '../../state/store';
import channelRequests from '../../state/requests/channel';
import { editorSelectors } from '../../state/slices/editor';

function SaveSceneButton() {
  const queries = useSelector(selectEntities);
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const { sceneId, sceneInfo } = useSelector(editorSelectors.selectScene);
  const request = channelRequests.updateScene({
    accessToken,
    channelId: queries.channel_id,
    sceneId,
    scene: sceneInfo,
  });
  console.log(queries);
  console.log(request);

  return (
    <Button
      variant="contained"
      onClick={() => {
        axios(request).then((res) => console.log(res)).catch((e) => console.log(e));
      }}
    >
      Salvar Cena
    </Button>
  );
}

export default SaveSceneButton;
