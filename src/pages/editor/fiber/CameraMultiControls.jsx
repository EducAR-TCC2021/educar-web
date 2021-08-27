import React, { useRef, useEffect } from 'react';
import { OrbitControls, TransformControls } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { editorSelectors } from '../../../state/slices/editor';

function CameraMultiControls() {
  const orbit = useRef();
  const controlMode = useSelector(editorSelectors.selectControlMode);
  const transform = props.controlRef;

  const callbackWrapper = (event) => {
    props.callback(props.modelRef.current.matrixWorld);
  };

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      controls.setMode(controlMode);
      const callback = (event) => (orbit.current.enabled = !event.value);
      controls.addEventListener('dragging-changed', callback);
      controls.addEventListener('mouseUp', callbackWrapper);
      return () => {
        controls.removeEventListener('dragging-changed', callback);
        controls.removeEventListener('mouseUp', callbackWrapper);
      };
    }
  });

  return (
    <>
      <TransformControls ref={transform}>
        {props.children}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </>
  );
}

export default CameraMultiControls;
