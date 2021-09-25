import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/home" style={{ textDecoration: 'none', color: 'unset' }}>
      <Typography variant="h6"> EducAR </Typography>
    </NavLink>
  );
}

export default Logo;
