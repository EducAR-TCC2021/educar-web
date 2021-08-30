import { Box, makeStyles } from '@material-ui/core';
import { Cached, Height, OpenWith } from '@material-ui/icons';
import React from 'react';
import { useStore } from 'react-redux';
import NextPageButton from '../../components/NextPageButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { editorActions, modesEnum } from '../../state/slices/editor';
import EditorViewport from './EditorViewport';
import IconTool from './IconTool';
import OverlayMenu from './OverlayMenu';
import SceneTextField from './SceneTextField';
import SideMenu from './SideMenu';
import SideSubMenu from './SideSubMenu';

const useStyles = makeStyles(() => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 48px)',
  },
  toolbar: {
    flex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarLeft: {
    flex: 1,
    display: 'flex',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  toolbarCenter: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarRight: {
    flex: 1,
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export default function Editor() {
  const store = useStore();
  const classes = useStyles();
  const setControlMode = (mode) => store.dispatch(editorActions.setControlMode(mode));

  return (
    <div>
      <TopMenu hideLogo>
        <div className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <IconTool
              toolName="Translação"
              icon={<OpenWith />}
              onClickCallback={() => setControlMode(modesEnum.TRANSLATE)}
            />
            <IconTool
              toolName="Rotação"
              icon={<Cached />}
              onClickCallback={() => setControlMode(modesEnum.ROTATE)}
            />
            <IconTool
              toolName="Escala"
              icon={<Height />}
              onClickCallback={() => setControlMode(modesEnum.SCALE)}
            />
          </div>
          <div className={classes.toolbarCenter}>
            <SceneTextField />
          </div>
          <div className={classes.toolbarRight}>
            <ProfileDropdown />
            <NextPageButton>Salvar Cena</NextPageButton>
          </div>
        </div>
      </TopMenu>
      <Box className={classes.horizontal}>
        <SideMenu>
          <OverlayMenu />
          <SideSubMenu title="Adicionar um Link" />
        </SideMenu>
        <EditorViewport />
        <SideMenu>
          <SideSubMenu title="Info" />
        </SideMenu>
      </Box>
    </div>
  );
}
