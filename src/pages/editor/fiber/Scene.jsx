/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useContextBridge } from '@react-three/drei';
import { useSelector, Provider, useStore } from 'react-redux';
import { editorSelectors } from '../../../state/slices/editor';
import TransformController from './TransformController';
import Image from './Image';
import Overlay from './Overlay';
import store from '../../../state/store';

export default function Scene() {
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlaySelection = useSelector(editorSelectors.selectOverlaySelection);
  const controlMode = useSelector(editorSelectors.selectControlMode);
  const markerSrc = useSelector(editorSelectors.selectMarkerSrc);

  const selection = overlaySelection[0];

  // Selected
  const modelRef = useRef();

  // Cameras
  const camera = useRef();
  const orbitRef = useRef();
  const transformRef = useRef();

  return (
    <Canvas>
      <Provider store={store}>
        <PerspectiveCamera ref={camera} position={[0, 5, 6]} rotation={[0, 3.14 / 2, 0]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          overlays.map((overlay, index) => {
            const { type, url } = overlay;

            return ((index === selection)
              ? (
                <TransformController
                  modelRef={modelRef}
                  orbitRef={orbitRef}
                  controlMode={controlMode}
                  ref={transformRef}
                >
                  <Suspense fallback={null}>
                    <Overlay
                      id={index}
                      type={type}
                      ref={modelRef}
                      url={url}
                    />
                  </Suspense>
                </TransformController>
              )
              : (
                <Suspense fallback={null}>
                  <Overlay
                    id={index}
                    type={type}
                    ref={null}
                    url={url}
                  />
                </Suspense>
              )
            );
          })
        }
        <Suspense fallback={null}>
          <Image url={markerSrc} fwdRef={null} />
        </Suspense>
        <OrbitControls ref={orbitRef} />
      </Provider>
    </Canvas>

  );
}
