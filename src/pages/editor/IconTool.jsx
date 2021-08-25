import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  iconTool: {
    marginLeft: '10px',
  },
}));

function IconTool({ toolName, icon }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.iconTool}
      variant="text"
      color="default"
      startIcon={icon}
    >
      {toolName}
    </Button>
  );
}
IconTool.propTypes = {
  toolName: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

export default IconTool;
