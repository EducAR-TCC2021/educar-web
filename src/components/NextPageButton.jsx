import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function NextPageButton({ children, redirectTo, disabled }) {
  const history = useHistory();

  function handleClick() {
    history.push(redirectTo);
  }

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
NextPageButton.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
NextPageButton.defaultProps = {
  disabled: false,
};

export default NextPageButton;
