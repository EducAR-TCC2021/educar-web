import React, { useRef } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Cached, Height, OpenWith } from '@material-ui/icons';
import { useStore } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';
import { ActionCreators } from 'redux-undo';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { editorActions, modesEnum } from '../../state/slices/editor';
import AddOverlayModal from './modal/AddOverlayModal';
import EditorViewport from './EditorViewport';
import IconTool from './IconTool';
import OverlayMenu from './OverlayMenu';
import SceneTextField from './SceneTextField';
import SideMenu from './SideMenu';
import SaveSceneButton from './SaveSceneButton';
import Logo from '../../components/Logo';
import InfoMenu from './InfoMenu';
import AttributionMenu from './AttributionMenu';
import ShortcutMenu from './ShortcutMenu';

const useStyles = makeStyles(() => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 48px)',
    width: '100%',
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
  const saveButtonRef = useRef();

  useHotkeys('q', () => setControlMode(modesEnum.TRANSLATE));
  useHotkeys('w', () => setControlMode(modesEnum.ROTATE));
  useHotkeys('e', () => setControlMode(modesEnum.SCALE));
  useHotkeys('ctrl+z', () => store.dispatch(ActionCreators.undo()));
  useHotkeys('ctrl+y', () => store.dispatch(ActionCreators.redo()));
  useHotkeys('e', () => setControlMode(modesEnum.SCALE));
  useHotkeys('shift+s', () => {
    if (saveButtonRef.current) {
      saveButtonRef.current.saveScene();
    }
  });

  return (
    <div>
      <TopMenu hideLogo>
        <div className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <Logo />
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
            <SaveSceneButton ref={saveButtonRef} />
          </div>
        </div>
      </TopMenu>
      <Box className={classes.horizontal}>
        <SideMenu alignment="left">
          <OverlayMenu />
          <ShortcutMenu />
        </SideMenu>
        <EditorViewport />
        <SideMenu alignment="right">
          <InfoMenu />
          <AttributionMenu />
        </SideMenu>
      </Box>
      <AddOverlayModal />
    </div>
  );
}
