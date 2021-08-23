import React from 'react';
import Box from '@material-ui/core/Box';
import TopMenu from '../../components/TopMenu';
import SideMenu from './SideMenu';

export default function Editor() {
  return (
    <div>
      <TopMenu />
      <SideMenu>
        <Box> Cool </Box>
      </SideMenu>
      <EditorViewport />
      <SideMenu>
        <Box> Other Cool </Box>
      </SideMenu>
    </div>
  );
}
