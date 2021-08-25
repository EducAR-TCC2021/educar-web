import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  iconTool: {
    marginLeft: '10px',
  },
}));

function IconTool({ toolName, icon, onClickCallback }) {
  const classes = useStyles();

  return (
    <Tooltip title={toolName}>
      <IconButton
        className={classes.iconTool}
        aria-label={toolName}
        color="default"
        onClick={onClickCallback}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

IconTool.defaultProps = {
  onClickCallback: () => null,
};

IconTool.propTypes = {
  toolName: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClickCallback: PropTypes.func,
};

export default IconTool;
