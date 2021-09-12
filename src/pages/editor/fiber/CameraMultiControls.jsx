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

const CameraMultiControls = React.forwardRef((props, transformRef) => {
  const modelSelection = useSelector(editorSelectors.selectOverlaySelection);
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlay = overlays[modelSelection[0]];
  const initialPosition = [overlay.position.x, overlay.position.y, overlay.position.z];
  const initialRotation = [overlay.rotation.x, overlay.rotation.y, overlay.rotation.z];
  const store = useStore();

  const {
    orbitRef, modelRef, controlMode, children,
  } = props;
  // Desabilita o controle de câmera orbital durante
  // utilização do controle de transform.
  useEffect(() => {
    if (transformRef.current && orbitRef.current) {
      const controls = transformRef.current;
      controls.setMode(controlMode);
      const callback = (event) => { orbitRef.current.enabled = !event.value; };
      const logMatrix = (event) => {
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
              rotation: { ...rotation },
              scale: { ...scale },
            },
          };
          console.log('transformCurrent', transformRef.current);
          store.dispatch(editorActions.setOverlayTransform(posRotScale));
        }
      };
      controls.addEventListener('dragging-changed', callback);
      controls.addEventListener('mouseUp', logMatrix);
      return () => {
        controls.removeEventListener('dragging-changed', callback);
        controls.removeEventListener('mouseUp', logMatrix);
      };
    }
  });

  return (
    <TransformControls
      ref={transformRef}
      position={initialPosition}
    >
      {children}
    </TransformControls>
  );
});
CameraMultiControls.propTypes = {
  modelRef: PropTypes.any.isRequired,
  orbitRef: PropTypes.any.isRequired,
  controlMode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CameraMultiControls;
