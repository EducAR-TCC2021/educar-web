import React from 'react';
import TopMenu from "../../components/TopMenu";
import SideMenu from './SideMenu';


export default function Editor() {
  return (
    <div>
      <TopMenu />
      <SideMenu>

      </SideMenu>
      <EditorViewport />
      <SideMenu>

      </SideMenu>
    </div>
  );
}
