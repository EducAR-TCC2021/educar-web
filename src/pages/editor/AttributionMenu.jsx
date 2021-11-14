/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';

import { editorSelectors, typeEnums } from '../../state/slices/editor';
import SideSubMenu from './SideSubMenu';

export default function AttributionMenu() {
  const attribution = useSelector(editorSelectors.selectAttribution);
  const overlayType = useSelector(editorSelectors.selectType);

  return (
    <SideSubMenu
      title="Atribuição"
    >
      <div>
        {(() => {
          switch (overlayType) {
            case typeEnums.MODEL:
              return (
                <div>
                  Modelo <a href={attribution.model.url} target="_blank" rel="noreferrer noopener">{attribution.model.name}</a>,
                  do autor <a href={attribution.user.url} target="_blank" rel="noreferrer noopener">{attribution.user.name}</a>,
                  distribuído sob a licensa <a href={attribution.license.url} target="_blank" rel="noreferrer noopener">{attribution.license.name}</a>
                </div>
              );
            case typeEnums.IMAGE:
              return (
                <div> Imagem disponível em <a href={attribution.url}>{attribution.url}</a></div>
              );
            default:
              return (
                <div>
                  {overlayType}
                </div>
              );
          }
        })()}
      </div>
    </SideSubMenu>
  );
}
