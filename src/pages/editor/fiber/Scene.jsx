/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSelector } from 'react-redux';
import Model from './Model';
import { editorSelectors } from '../../../state/slices/editor';
import CameraMultiControls from './CameraMultiControls';
import Image from './Image';

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
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {
        overlays.map((overlay, index) => {
          const { type, url } = overlay;

          switch (type) {
            case 'model':
              return ((index === selection)
                ? (
                  <CameraMultiControls
                    orbitRef={orbitRef}
                    transformRef={transformRef}
                    controlMode={controlMode}
                  >
                    <Model modelRef={modelRef} path={url} />
                  </CameraMultiControls>
                )
                : <Model modelRef={null} path={url} />
              );
            default:
              return null;
          }
        })
      }
      <Suspense fallback={null}>
        <Image src={markerSrc} />
      </Suspense>
      <OrbitControls ref={orbitRef} />
    </Canvas>

  );
}
