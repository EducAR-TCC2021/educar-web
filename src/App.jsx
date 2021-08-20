import React, { useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  useSelector,
  useStore,
} from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

import Login from './pages/login';
import Home from './pages/home';
import { setPaletteType } from './state/slices/settings';
import MarkerSelection from './pages/marker';

function RestrictedRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        () => (isLoggedIn ? (children) : (<Redirect to="/login" />))
      }
    />
  );
}
RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

function LoginRoute({ isLoggedIn, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        () => (isLoggedIn ? (<Redirect to="/home" />) : (<Login />))
      }
    />
  );
}
LoginRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

function Routes() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Router>
      <Switch>
        <LoginRoute isLoggedIn={isLoggedIn} path="/login" />
        <RestrictedRoute isLoggedIn={isLoggedIn} path="/home"><Home /></RestrictedRoute>
        <RestrictedRoute isLoggedIn={isLoggedIn} path="/marcador"><MarkerSelection /></RestrictedRoute>
        <Redirect exact from="/" to="home" />
      </Switch>
    </Router>
  );
}

function App() {
  const paletteType = useSelector((state) => state.settings.paletteType);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const store = useStore();

  const theme = useMemo(
    () => createTheme(
      {
        palette: {
          type: paletteType,
        },
      },
    ), [paletteType],
  );

  useEffect(() => {
    store.dispatch(setPaletteType(prefersDarkMode ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
