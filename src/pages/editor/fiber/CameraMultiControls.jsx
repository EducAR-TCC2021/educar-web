/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { TransformControls } from '@react-three/drei';
import PropTypes from 'prop-types';

function CameraMultiControls({
  orbitRef,
  transformRef,
  controlMode,
  children,
}) {
  /*
  const callbackWrapper = (event) => {
    props.callback(props.modelRef.current.matrixWorld);
  };
  */
  // eslint-disable-next-line no-console
  console.log(controlMode);

  // Desabilita o controle de câmera orbital durante
  // utilização do controle de transform.
  useEffect(() => {
    if (transformRef.current) {
      const controls = transformRef.current;
      controls.setMode(controlMode);
      const callback = (event) => (orbitRef.current.enabled = !event.value);
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
}
CameraMultiControls.propTypes = {
  orbitRef: PropTypes.element.isRequired,
  transformRef: PropTypes.element.isRequired,
  controlMode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CameraMultiControls;
