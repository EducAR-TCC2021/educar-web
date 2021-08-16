import React from 'react';
import {
  Brightness4,
  Brightness7,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useStore } from 'react-redux';
import { togglePaletteType } from '../state/slices/settings';

function renderIcon(paletteType) {
  switch (paletteType) {
    case 'light': return <Brightness4 />;
    case 'dark': return <Brightness7 />;
    default: return null;
  }
}

function PaletteTypeButton() {
  const paletteType = useSelector((state) => state.settings.paletteType);
  const store = useStore();

  const clicked = () => store.dispatch(togglePaletteType());

  return (
    <IconButton onClick={clicked} aria-label="Toggle light/dark theme">
      { renderIcon(paletteType) }
    </IconButton>
  );
}

export default PaletteTypeButton;
