import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Container,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    padding: '0',
  },
}));

function PageTitle({ title }) {
  const classes = useStyles();

  return (
    <Container className={classes.pageTitle} maxWidth="md">
      <Typography variant="h5" component="h1">{title}</Typography>
    </Container>
  );
}
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
