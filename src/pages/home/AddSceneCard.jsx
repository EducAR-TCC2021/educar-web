/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import React, { useState } from 'react';

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
  },
});

function EditingCard({ setState }) {
  const classes = useStyles();
  const [sceneName, setSceneName] = useState('');

  return (
    <Card
      className={classes.card}
    >
      <ButtonBase
        className={classes.buttonBase}
        onClick={() => {}}
      >
        <CardMedia
          className={classes.cardMedia}
          title="marker"
        />
      </ButtonBase>
      <CardContent className={classes.editingCardContent}>
        <TextField
          value={sceneName}
          placeholder="Nome da cena"
          onChange={(e) => setSceneName(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setState('blank')}>
          Salvar
        </Button>
      </CardActions>
    </Card>
  );
}

function BlankCard({ setState }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      classes={{ root: classes.cardDesign }}
    >
      <ButtonBase
        className={classes.buttonBase}
        onClick={() => {
          setState('editing');
        }}
      >
        <CardContent className={classes.cardContent}>
          Nova Cena
          <Add />
        </CardContent>
      </ButtonBase>
    </Card>
  );
}

function AddSceneCard() {
  const classes = useStyles();
  const [state, setState] = useState('blank');

  const CardSelector = ({ type }) => {
    switch (type) {
      case 'blank':
        return <BlankCard setState={setState} />;
      case 'editing':
        return <EditingCard setState={setState} />;
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
