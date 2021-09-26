import { Container, TextField, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { editorActions, editorSelectors } from '../../state/slices/editor';
import MarkerPreview from './MarkerPreview';

const useStyles = makeStyles({
  content: {
    padding: '0',
  },
});

function MarkerSelectionContainer() {
  const store = useStore();
  const classes = useStyles();

  const markerSrcValue = useSelector(editorSelectors.selectMarkerSrc);

  const handleChange = (v) => {
    store.dispatch(editorActions.setMarkerSrc(v));
  };

  return (
    <Container maxWidth="md" className={classes.content}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="markerSrc"
        label="Link da imagem"
        name="markerSrc"
        autoFocus
        onChange={(e) => handleChange(e.target.value)}
        value={markerSrcValue}
      />
      <MarkerPreview />
    </Container>
  );
}

export default MarkerSelectionContainer;
