/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { useSelector, Provider, useStore } from 'react-redux';
import { editorSelectors } from '../../../state/slices/editor';
import CameraMultiControls from './CameraMultiControls';
import Image from './Image';
import Asset from './Asset';
import store from '../../../state/store';

export default function Scene() {
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlaySelection = useSelector(editorSelectors.selectOverlaySelection);
  const controlMode = useSelector(editorSelectors.selectControlMode);
  const markerSrc = useSelector(editorSelectors.selectMarkerSrc);

  console.log('marker?', markerSrc);

  const selection = overlaySelection[0];

  // Selected
  const modelRef = useRef();

  // Cameras
  const orbitRef = useRef();
  const transformRef = useRef();

  return (
    <Canvas>
      <Provider store={store}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          overlays.map((overlay, index) => {
            const { type, url } = overlay;

            return ((index === selection)
              ? (
                <CameraMultiControls
                  orbitRef={orbitRef}
                  transformRef={transformRef}
                  controlMode={controlMode}
                >
                  <Suspense fallback={null}>
                    <Asset type={type} ref={modelRef} url={url} />
                  </Suspense>
                </CameraMultiControls>
              )
              : (
                <Suspense fallback={null}>
                  <Asset type={type} ref={null} url={url} />
                </Suspense>
              )
            );
          })
        }
        <Suspense fallback={null}>
          <Image url={markerSrc} ref={null} />
        </Suspense>
        <OrbitControls ref={orbitRef} />
      </Provider>
    </Canvas>

  );
}
