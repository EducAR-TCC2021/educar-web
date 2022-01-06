import React from 'react';
import { makeStyles } from '@material-ui/core';

import TopMenu from '../../components/TopMenu';
import LoginCard from './LoginCard';

const useStyles = makeStyles({
  loginCard: {
    marginTop: '100px',
  },
});

function Login() {
  const classes = useStyles();

  return (
    <div>
      <TopMenu />
      <div className={classes.loginCard}>
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
