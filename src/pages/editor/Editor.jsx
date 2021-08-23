import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import TopMenu from '../../components/TopMenu';
import SideMenu from './SideMenu';
import EditorViewport from './EditorViewport';

const useStyles = makeStyles(() => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 48px )',
  },
}));

export default function Editor() {
  const classes = useStyles();
  return (
    <div>
      <TopMenu />
      <Box className={classes.horizontal}>
        <SideMenu>
          <Box> Cool </Box>
        </SideMenu>
        <EditorViewport />
        <SideMenu>
          <Box> Other Cool </Box>
        </SideMenu>
      </Box>
    </div>
  );
}
