import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function NextPageButton({
  children, redirectTo, onClick, disabled,
}) {
  const history = useHistory();

  function handleClick() {
    onClick();
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
NextPageButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default NextPageButton;
