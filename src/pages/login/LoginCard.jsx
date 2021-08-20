import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import { useStore } from 'react-redux';
import { userLoggedIn } from '../../state/slices/user';

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
  const store = useStore();

  const userLogIn = () => {
    store.dispatch(userLoggedIn());
  };

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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={userLogIn}
          >
            Entrar
          </Button>
          <Link href="/" variant="body2">
            <Typography className={classes.title}>
              Criar Conta
            </Typography>
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
