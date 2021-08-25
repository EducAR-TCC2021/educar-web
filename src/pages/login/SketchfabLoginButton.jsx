import React, {
  useState,
} from 'react';
import {
  makeStyles,
  Button,
} from '@material-ui/core';
import { useStore } from 'react-redux';
import { userLoggedIn } from '../../state/slices/user';

const CLIENT_ID = 'Qj6hQl5K04dccP4SsGykPq4Pyp8kTYkny5gAqBBY';
const SKETCHFAB_URL = `https://sketchfab.com/oauth2/authorize/?state=123456789&response_type=token&client_id=${CLIENT_ID}`;
const BASE_URL = 'http://localhost:3000';

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(6),
    margin: theme.spacing(3, 0, 2),
  },
}));

function SketchfabLoginButton() {
  const classes = useStyles();
  const [windowReference, setWindowReference] = useState(null);
  const store = useStore();

  const receiveMessage = (event) => {
    if (event.origin !== BASE_URL) {
      return;
    }
    const { data } = event;
    if (data.source === 'Sketchfab OAuth2 Login') {
      window.removeEventListener('message', receiveMessage, false);
      store.dispatch(userLoggedIn(data.accessToken));
    }
  };

  const openSketchfab = () => {
    window.removeEventListener('message', receiveMessage, false);
    const y = window.top.outerHeight / 2 + window.top.screenY - 275;
    const x = window.top.outerWidth / 2 + window.top.screenX - 225;
    if (windowReference === null || windowReference.closed) {
      const ref = window.open(SKETCHFAB_URL, 'Sketchfab OAuth2 Login', `innerHeight=550,innerWidth=450,top=${y},left=${x}`);
      setWindowReference(ref);
    } else {
      windowReference.focus();
    }
    window.addEventListener('message', receiveMessage, false);
  };

  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={openSketchfab}
    >
      Entrar com Sketchfab
    </Button>
  );
}

export default SketchfabLoginButton;
