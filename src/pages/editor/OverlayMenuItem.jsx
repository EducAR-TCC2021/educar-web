import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useStore } from 'react-redux';
import { editorActions, editorSelectors } from '../../state/slices/editor';

const useStyles = makeStyles(() => ({
  selected: {
    marginTop: 4,
    backgroundColor: '#6565B0',
    color: '#FFFFFF',
  },
  normal: {
    marginTop: 4,
    backgroundColor: '#505050',
    color: '#FFFFFF',
  },
}));

function OverlayMenuItem({ id, nome }) {
  const classes = useStyles();
  const selected = useSelector(editorSelectors.selectOverlaySelection);
  const style = (selected.includes(id)) ? classes.selected : classes.normal;
  const store = useStore();

  const handleClick = () => {
    const payload = [id];
    store.dispatch(editorActions.setOverlaySelection(payload));
  };

  return (
    <Button
      className={style}
      variant="contained"
      onClick={handleClick}
      disableElevation
    >
      {nome}
    </Button>
  );
}

OverlayMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
};

export default OverlayMenuItem;
