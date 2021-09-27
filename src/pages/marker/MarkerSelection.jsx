import React from 'react';
import { useSelector } from 'react-redux';
import NextPageButton from '../../components/NextPageButton';
import PageTitle from '../../components/PageTitle';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { editorSelectors } from '../../state/slices/editor';
import MarkerSelectionContainer from './MarkerSelectionContainer';

function MarkerSelection() {
  const isValidMarkerSrc = useSelector(editorSelectors.selectMarkerIsValid);

  return (
    <>
      <TopMenu>
        <PaletteTypeButton />
        <ProfileDropdown />
        <NextPageButton redirectTo="/editor" disabled={!isValidMarkerSrc}>Prosseguir</NextPageButton>
      </TopMenu>
      <PageTitle title="Selecionar Marcador" />
      <MarkerSelectionContainer />
    </>
  );
}

export default MarkerSelection;
