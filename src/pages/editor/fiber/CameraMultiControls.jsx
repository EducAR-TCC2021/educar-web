/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { TransformControls } from '@react-three/drei';
import PropTypes from 'prop-types';

const CameraMultiControls = React.forwardRef((props, transformRef) => {
  const { orbitRef, controlMode, children } = props;
  // Desabilita o controle de câmera orbital durante
  // utilização do controle de transform.
  useEffect(() => {
    if (transformRef.current && orbitRef.current) {
      const controls = transformRef.current;
      controls.setMode(controlMode);
      const callback = (event) => {
        if (orbitRef.current) {
          orbitRef.current.enabled = !event.value;
        }
      };
      controls.addEventListener('dragging-changed', callback);
      return () => {
        controls.removeEventListener('dragging-changed', callback);
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
  orbitRef: PropTypes.any.isRequired,
  controlMode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CameraMultiControls;
