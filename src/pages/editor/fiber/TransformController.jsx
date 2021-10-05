/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { TransformControls } from '@react-three/drei';
import PropTypes from 'prop-types';
import { Euler } from 'three';
import { useSelector, useStore } from 'react-redux';
import { editorActions, editorSelectors } from '../../../state/slices/editor';
import { toDegrees, getInitialPosRotScale } from '../../../utils';

const TransformController = (props) => {
  const modelSelection = useSelector(editorSelectors.selectOverlaySelection);
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlay = overlays[modelSelection[0]];
  const store = useStore();

  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = getInitialPosRotScale(false, overlay);

  const {
    orbitRef, controlMode, children, transformRef,
  } = props;

  useEffect(() => {
    if (transformRef.current && orbitRef.current) {
      const controls = transformRef.current;

      controls.setMode(controlMode);

      // Desabilita o controle de câmera orbital durante
      // utilização do controle de transform.
      const callback = (event) => { orbitRef.current.enabled = !event.value; };

      // Guarda os parâmetros globais do objeto na Store.
      const storeTransform = (event) => {
        const translation = controls.worldPosition;
        const rotation = new Euler().setFromQuaternion(controls.worldQuaternion);
        const scale = controls.worldScale;
        const posRotScale = {
          id: modelSelection[0],
          posRotScale: {
            position: { ...translation },
            rotation: {
              x: toDegrees(rotation._x),
              y: toDegrees(rotation._y),
              z: toDegrees(rotation._z),
            },
            scale: { ...scale },
          },
        };
        store.dispatch(editorActions.setOverlayTransform(posRotScale));
      };

      controls.addEventListener('dragging-changed', callback);
      controls.addEventListener('mouseUp', storeTransform);
      return () => {
        controls.removeEventListener('dragging-changed', callback);
        controls.removeEventListener('mouseUp', storeTransform);
      };
    }
  });

  return (
    <TransformControls
      ref={transformRef}
      position={initialPosition}
      rotation={initialRotation}
      scale={initialScale}
    >
      {children}
    </TransformControls>
  );
};
TransformController.propTypes = {
  orbitRef: PropTypes.any.isRequired,
  controlMode: PropTypes.string.isRequired,
  transformRef: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default TransformController;
