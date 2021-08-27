import React from 'react';
import { useStore, useSelector } from 'react-redux';
import {
  makeStyles,
  Container,
  TextField,
} from '@material-ui/core';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import PageTitle from '../../components/PageTitle';
import { editorSelectors, editorActions } from '../../state/slices/editor';
import MarkerPreview from './MarkerPreview';
import NextPageButton from '../../components/NextPageButton';

const useStyles = makeStyles({
  content: {
    padding: '0',
  },
});

function MarkerSelection() {
  const store = useStore();
  const classes = useStyles();

  const isValidMarkerSrc = useSelector(editorSelectors.selectMarkerIsValid);
  const markerSrcValue = useSelector(editorSelectors.selectMarkerSrc);

  const handleChange = (v) => {
    store.dispatch(editorActions.setMarkerSrc(v));
  };

  return (
    <>
      <TopMenu>
        <PaletteTypeButton />
        <ProfileDropdown />
        <NextPageButton redirectTo="/editor" disabled={!isValidMarkerSrc}>Prosseguir</NextPageButton>
      </TopMenu>
      <PageTitle title="Selecionar Marcador" />
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
    </>
  );
}

export default MarkerSelection;
