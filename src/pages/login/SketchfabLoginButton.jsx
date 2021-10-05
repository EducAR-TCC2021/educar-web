import React, {
  useState,
  useEffect,
} from 'react';
import {
  makeStyles,
  Button,
} from '@material-ui/core';
import { useStore } from 'react-redux';
import { accountActions } from '../../state/slices/account';

const CLIENT_ID = 'Qj6hQl5K04dccP4SsGykPq4Pyp8kTYkny5gAqBBY';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SKETCHFAB_URL = `https://sketchfab.com/oauth2/authorize/?response_type=token&client_id=${CLIENT_ID}&approval_prompt=auto&redirect_uri=${BASE_URL}/login`;

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: theme.spacing(6),
    margin: theme.spacing(3, 0, 2),
  },
}));

function getAccessToken() {
  const url = new URL(window.location);
  const hashParams = url.hash.split('&');
  let token = null;
  hashParams.forEach((param) => {
    if (param.indexOf('access_token') !== -1) {
      token = param.replace('#access_token=', '');
    }
  });
  return token;
}

function getError() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get('error') || null;
}

function SketchfabLoginButton() {
  const classes = useStyles();
  const [windowReference, setWindowReference] = useState(null);
  const store = useStore();

  useEffect(() => {
    if (window.opener) {
      const accessToken = getAccessToken();
      const error = getError();
      if (accessToken !== null) {
        window.opener.postMessage({ accessToken, source: window.name });
        window.close();
      } else if (error !== null) {
        window.close();
      }
    }
  });

  const receiveMessage = (event) => {
    if (event.origin !== BASE_URL) {
      return;
    }
    const { data } = event;
    if (data.source === 'Sketchfab OAuth2 Login') {
      window.removeEventListener('message', receiveMessage, false);
      store.dispatch(accountActions.userLoggedIn(data.accessToken));
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
