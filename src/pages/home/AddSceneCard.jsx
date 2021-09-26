import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: 4,
    borderColor: '#00ffff',
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
});

function AddSceneCard() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={() => {}}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2"> </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => {}}>
            Editar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AddSceneCard;
