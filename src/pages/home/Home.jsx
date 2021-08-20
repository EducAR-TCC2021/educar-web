import React from 'react';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import NextPageButton from '../../components/NextPageButton';

function Home() {
  return (
    <TopMenu>
      <PaletteTypeButton />
      <NextPageButton redirectTo="/marcador">Criar Cena</NextPageButton>
    </TopMenu>
  );
}

export default Home;
