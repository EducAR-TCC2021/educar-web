import React from 'react';
import { useSelector, useStore } from 'react-redux';
import {
  makeStyles,
  Container,
  TextField,
} from '@material-ui/core';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import PageTitle from '../../components/PageTitle';
import { setTriggerSrc } from '../../state/slices/editor';
import TriggerPreview from './TriggerPreview';
import NextPageButton from '../../components/NextPageButton';

const useStyles = makeStyles({
  content: {
    padding: '0',
  },
});

function MarkerSelection() {
  const store = useStore();
  const classes = useStyles();

  const isValidTriggerSrc = useSelector((state) => state.editor.trigger.isValid);
  const triggerSrcValue = useSelector((state) => state.editor.trigger.src);

  const handleChange = (v) => {
    store.dispatch(setTriggerSrc(v));
  };

  return (
    <>
      <TopMenu>
        <PaletteTypeButton />
        <ProfileDropdown />
        <NextPageButton redirectTo="/editor" disabled={!isValidTriggerSrc}>Prosseguir</NextPageButton>
      </TopMenu>
      <PageTitle title="Selecionar Marcador" />
      <Container maxWidth="md" className={classes.content}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="triggerSrc"
          label="Link da imagem"
          name="triggerSrc"
          autoFocus
          onChange={(e) => handleChange(e.target.value)}
          value={triggerSrcValue}
        />
        <TriggerPreview />
      </Container>
    </>
  );
}

export default MarkerSelection;
