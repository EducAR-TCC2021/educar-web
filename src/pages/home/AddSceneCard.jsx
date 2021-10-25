/* eslint-disable react/prop-types */
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';
import { editorActions, editorSelectors } from '../../state/slices/editor';
import { homeSelectors } from '../../state/slices/home';
import { spaceToDash } from '../../utils';

const useStyles = makeStyles({
  cardDesign: {
    backgroundColor: 'rgba(255, 0, 0, 0)',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editingCardContent: {
    flexGrow: 1,
  },
  buttonBase: {
    display: 'block',
    flexGrow: 1,
    height: '56.25%',
  },
  selectMarkerArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

function validateSceneInsertion(sceneId, trigger) {
  return sceneId && trigger;
}

function EditingCard({ setState, handleOpenMarker }) {
  const classes = useStyles();
  const markerSrcValue = useSelector(editorSelectors.selectMarkerSrc);
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const channels = useSelector(accountSelectors.selectChannelsMeta);
  const channelIndex = useSelector(homeSelectors.selectSelectedChannelIndex);
  const selectedChannel = channels[channelIndex];
  const store = useStore();
  const sceneName = useSelector(editorSelectors.selectSceneState).name;

  const handleSaveScene = () => {
    if (!validateSceneInsertion(sceneName, markerSrcValue)) return;

    const request = channelRequests.updateScene({
      accessToken,
      channelId: selectedChannel.id,
      sceneId: sceneName,
      scene: {
        trigger: markerSrcValue,
        overlays: [],
      },
    });

    axios(request)
      .then(() => {
        window.location.reload();
      })
      .catch();

    setState('blank');
  };

  return (
    <Card
      className={classes.card}
    >
      <ButtonBase
        className={classes.buttonBase}
        onClick={handleOpenMarker}
      >
        {
          (markerSrcValue)
            ? (
              <CardMedia
                className={classes.cardMedia}
                image={markerSrcValue || ''}
                title="marker"
              />
            )
            : (
              <CardActionArea className={classes.selectMarkerArea} square>
                <Typography>
                  Escolher Marcador
                </Typography>
              </CardActionArea>
            )
        }
      </ButtonBase>
      <CardContent className={classes.editingCardContent}>
        <TextField
          value={sceneName}
          placeholder="Nome da cena"
          onChange={(e) => store.dispatch(editorActions.setName(spaceToDash(e.target.value)))}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleSaveScene}
          disabled={!sceneName || !markerSrcValue}
        >
          Salvar
        </Button>
        <Button size="small" onClick={() => setState('blank')}>
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
}

function BlankCard({ setState }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEditNewScene = () => {
    dispatch(editorActions.setMarkerSrc(''));
    setState('editing');
  };

  return (
    <Card
      className={classes.card}
      classes={{ root: classes.cardDesign }}
    >
      <Button
        className={classes.buttonBase}
        onClick={handleEditNewScene}
      >
        <CardContent className={classes.cardContent}>
          Nova Cena
          <Add />
        </CardContent>
      </Button>
    </Card>
  );
}

function AddSceneCard({ handleOpenMarker }) {
  const [state, setState] = useState('blank');

  const CardSelector = ({ type }) => {
    switch (type) {
      case 'blank':
        return <BlankCard setState={setState} />;
      case 'editing':
        return <EditingCard setState={setState} handleOpenMarker={handleOpenMarker} />;
      default:
        return <div />;
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardSelector type={state} />
    </Grid>
  );
}

export default AddSceneCard;
