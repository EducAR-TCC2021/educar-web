import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { editorSelectors } from '../../state/slices/editor';

const useStyles = makeStyles(() => ({
  selected: {
    backgroundColor: '#7070A7',
  },
  normal: {
    backgroundColor: '#505050',
  },
}));

function OverlayMenuItem({ id, nome }) {
  const selected = useSelector(editorSelectors.selectOverlaySelection);
  const classes = useStyles();
  const style = (id in selected) ? classes.selected : classes.normal;
  return (
    <Button className={style}>{nome}</Button>
  );
}

OverlayMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
};

export default OverlayMenuItem;
