import React from 'react';
import Button from '@material-ui/core/Button';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';

function MarkerSelection() {
  return (
    <TopMenu>
      <PaletteTypeButton />
      <ProfileDropdown />
      <Button variant="contained">Prosseguir</Button>
    </TopMenu>
  );
}

export default MarkerSelection;
