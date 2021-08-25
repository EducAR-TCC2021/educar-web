import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

function TopMenu({ children, hideLogo }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {
          (!hideLogo)
            ? <Typography variant="h6" className={classes.title}> EducAR </Typography> : null
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
  hideLogo: false,
};

export default TopMenu;
