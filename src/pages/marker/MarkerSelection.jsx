import React from 'react';
import Button from '@material-ui/core/Button';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';

function MarkerSelection() {
  return (
    <TopMenu>
      <PaletteTypeButton />
      <Button variant="contained">Prosseguir</Button>
    </TopMenu>
  );
}

export default MarkerSelection;
