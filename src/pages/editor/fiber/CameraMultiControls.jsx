/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { TransformControls } from '@react-three/drei';
import PropTypes from 'prop-types';

const CameraMultiControls = React.forwardRef((props, transformRef) => {
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
        if (modelRef && modelRef.current) {
          console.log(modelRef.current.matrixWorld.elements);
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
    <TransformControls ref={transformRef}>
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
