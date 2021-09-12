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
import { Vector3, Quaternion, Euler } from 'three';
import { useSelector, useStore } from 'react-redux';
import { editorActions, editorSelectors } from '../../../state/slices/editor';

function getInitialPosRotScale({ position, rotation, scale }) {
  return {
    initialPosition: [position.x, position.y, position.z],
    initialRotation: [rotation.x, rotation.y, rotation.z],
    initialScale: [scale.x, scale.y, scale.z],
  };
}

const TransformController = React.forwardRef((props, transformRef) => {
  const modelSelection = useSelector(editorSelectors.selectOverlaySelection);
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlay = overlays[modelSelection[0]];
  const store = useStore();

  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = getInitialPosRotScale(overlay);

  const {
    orbitRef, modelRef, controlMode, children,
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
        const translation = new Vector3();
        const rotation = new Euler();
        const scale = new Vector3();
        const quaternion = new Quaternion();

        if (modelRef && modelRef.current) {
          modelRef.current.matrixWorld.decompose(translation, quaternion, scale);
          rotation.setFromQuaternion(quaternion);
          const posRotScale = {
            id: modelSelection[0],
            posRotScale: {
              position: { ...translation },
              rotation: { x: rotation._x, y: rotation._y, z: rotation._z },
              scale: { ...scale },
            },
          };
          store.dispatch(editorActions.setOverlayTransform(posRotScale));
        }
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
});
TransformController.propTypes = {
  modelRef: PropTypes.any.isRequired,
  orbitRef: PropTypes.any.isRequired,
  controlMode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TransformController;
