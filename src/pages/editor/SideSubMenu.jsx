import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, makeStyles } from '@material-ui/core';

const BORDER_RADIUS = 3;

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#505050',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.5)',
  },
  title: {
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
  },
}));

function SideSubMenu({ title, options, children }) {
  const classes = useStyles();
  return (
    <Box className={classes.container} m={1}>
      <Box className={classes.title}>
        {title}
      </Box>
      <Divider />
      <Box m={1} className={classes.body}>
        {children}
      </Box>
      <Divider />
      <Box className={classes.footer}>
        {options}
      </Box>
    </Box>
  );
}

SideSubMenu.defaultProps = {
  children: <div />,
  options: <div />,
};
SideSubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  options: PropTypes.node,
};

export default SideSubMenu;
