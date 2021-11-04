import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  menu: {
    zIndex: 2,
    top: '48px',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '20%',
  },
}));

export default function SideMenu({ children, alignment }) {
  const classes = useStyles(alignment);
  return (
    <Box
      className={classes.menu}
      style={{
        left: alignment === 'left' ? 0 : 'auto',
      }}
    >
      {children}
    </Box>
  );
}
SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  alignment: PropTypes.string.isRequired,
};
