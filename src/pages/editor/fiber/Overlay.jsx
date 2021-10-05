/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { editorSelectors, typeEnums } from '../../../state/slices/editor';
import { getInitialPosRotScale } from '../../../utils';
import ImageObject from './Image';
import SketchfabModel from './Model';

const Overlay = (props) => {
  const {
    id,
    type,
    url,
  } = props;

  const selection = useSelector(editorSelectors.selectOverlaySelection);
  const overlay = useSelector(editorSelectors.selectOverlays)[id];
  const isSelected = selection[0] === id;

  /*
    Quando o overlay está selecionado, os parâmetros iniciais do modelo devem ser [0,0,0],
    pois recebem offset vindo do objeto pai TransformController.

    Quando o overlay não está selecionado, seus parâmetros iniciais devem ser iguais aos
    da última modificação na transformada, os quais estão armazenados na Store.
  */
  const initialParam = getInitialPosRotScale(isSelected, overlay);

  useEffect(() => {
    console.log(initialParam);
  }, [initialParam]);

  switch (type) {
    case typeEnums.IMAGE:
      return (
        <ImageObject
          initialParam={initialParam}
          url={url}
        />
      );
    case typeEnums.MODEL:
      return (
        <SketchfabModel
          initialParam={initialParam}
          modelId={url}
        />
      );
    case typeEnums.VIDEO:
      return null;
    default:
      return null;
  }
};
Overlay.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Overlay;
