import React from 'react';
import Button from '@material-ui/core/Button';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';

function Home() {
  return (
    <TopMenu>
      <PaletteTypeButton />
      <Button variant="contained">Criar Cena</Button>
    </TopMenu>
  );
}

export default Home;
