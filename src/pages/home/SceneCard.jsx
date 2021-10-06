import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography,
} from '@material-ui/core';
import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import channelRequests from '../../state/requests/channel';
import { accountSelectors } from '../../state/slices/account';
import { editorActions } from '../../state/slices/editor';
import { homeSelectors } from '../../state/slices/home';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

function SceneCard({ name, scene, id }) {
  const classes = useStyles();
  const store = useStore();
  const history = useHistory();
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const selectedChannel = useSelector(homeSelectors.selectSelectedChannel);

  const editOnClick = () => {
    store.dispatch(editorActions.setStateFromScene({ name, scene }));
    history.push('/editor');
  };

  const handleDelete = () => {
    const request = channelRequests.deleteScene({
      accessToken,
      channelId: selectedChannel.id,
      sceneId: name,
    });

    axios(request)
      .then(() => {
        window.location.reload();
      })
      .catch();
  };

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={scene.trigger}
          title="Thumbnail"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={editOnClick}>
            Editar
          </Button>
          <Button size="small" color="secondary" onClick={handleDelete}>
            Deletar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
SceneCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  scene: PropTypes.shape({
    name: PropTypes.string,
    trigger: PropTypes.string,
    overlays: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SceneCard;
