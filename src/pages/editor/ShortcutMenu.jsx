/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SideSubMenu from './SideSubMenu';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  kbd: {
    display: 'inline',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.2)',
    borderRadius: '2px',
    color: '#000',
    padding: '2px 4px',
  },
}));

// eslint-disable-next-line react/prop-types
function Kbd({ keys }) {
  const classes = useStyles();
  const L = keys.length;
  return (
    keys.map((key, index) => (
      <>
        <Typography className={classes.kbd} variant="button">{key}</Typography>
        {(index !== L - 1) ? <span> + </span> : null}
      </>
    ))
  );
}

function ShortcutMenu() {
  const shortcutData = [
    [['q'], 'Translação'],
    [['w'], 'Rotação'],
    [['e'], 'Escala'],
    [['r'], 'Resetar Câmera'],
    [['ctrl', 'z'], 'Desfazer ação'],
    [['ctrl', 'y'], 'Refazer ação'],
    [['shift', 's'], 'Salvar cena'],
    [['clique duplo'], 'Selecionar overlay'],
  ];

  return (
    <SideSubMenu
      title="Comandos"
    >
      <Typography variant="s">
        {
          shortcutData.map(([keys, title]) => (
            <div style={{ margin: '2px 0px' }}>
              <Kbd keys={keys} /> - {title}
            </div>
          ))
        }
      </Typography>
    </SideSubMenu>
  );
}

export default ShortcutMenu;
