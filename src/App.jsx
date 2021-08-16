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

import Login from './pages/login';
import Home from './pages/home';
import { setPaletteType } from './state/slices/settings';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
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
