import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  menu: {
    backgroundColor: 'grey',
    flex: 1,
  },
}));

export default function SideMenu({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.menu}>
      {children}
    </Box>
  );
}
SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
