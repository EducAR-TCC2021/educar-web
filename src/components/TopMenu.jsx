import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 0,
    marginLeft: 0,
  },
});

function TopMenu({ children, hideLogo }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
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
};
TopMenu.propTypes = {
  children: PropTypes.node.isRequired,
  hideLogo: PropTypes.bool,
};

export default TopMenu;
