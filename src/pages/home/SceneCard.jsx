import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
import { editorActions } from '../../state/slices/editor';

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

  const editOnClick = () => {
    store.dispatch(editorActions.setStateFromScene({ name, scene }));
    history.push('/editor');
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
