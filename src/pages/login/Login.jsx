import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 500,
    margin: '0 auto',
    padding: '20px',
    marginTop: '100px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function LoginCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
    >
      <CardContent>
        <Typography>Login</Typography>
      </CardContent>
    </Card>
  );
}

function Login() {
  return (
    <div>
      <TopMenu>
        <PaletteTypeButton />
      </TopMenu>
      <LoginCard />
    </div>
  );
}

export default Login;
