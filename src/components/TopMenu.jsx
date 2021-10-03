import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 0,
    marginLeft: 0,
  },
  appBar: {
    zIndex: 2,
  },
});

function TopMenu({ children, hideLogo, position }) {
  const classes = useStyles();
  return (
    <AppBar position={position} className={classes.appBar}>
      <Toolbar variant="dense">
        {
          (!hideLogo)
            ? (
              <Container className={classes.title}>
                <Logo />
              </Container>
            ) : null
        }
        { children }
      </Toolbar>
    </AppBar>
  );
}
TopMenu.defaultProps = {
  hideLogo: false,
  position: 'static',
  children: [],
};
TopMenu.propTypes = {
  children: PropTypes.node,
  hideLogo: PropTypes.bool,
  position: PropTypes.string,
};

export default TopMenu;
