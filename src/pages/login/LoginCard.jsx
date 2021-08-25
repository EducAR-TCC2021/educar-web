import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import SketchfabLoginButton from './SketchfabLoginButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: '0 auto',
    padding: '10px',
  },
  title: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(6),
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
    >
      <CardContent>
        <Typography className={classes.title} component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <SketchfabLoginButton />
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
