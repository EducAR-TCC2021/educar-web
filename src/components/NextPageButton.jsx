import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function NextPageButton({ children, redirectTo }) {
  const history = useHistory();

  function handleClick() {
    history.push(redirectTo);
  }

  return (
    <Button
      variant="contained"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
NextPageButton.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default NextPageButton;
