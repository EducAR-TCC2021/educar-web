/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useContextBridge } from '@react-three/drei';
import { useSelector, Provider, useStore } from 'react-redux';
import { editorActions, editorSelectors } from '../../../state/slices/editor';
import TransformController from './TransformController';
import Image from './Image';
import Overlay from './Overlay';

export default function Scene() {
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlaySelection = useSelector(editorSelectors.selectOverlaySelection);
  const controlMode = useSelector(editorSelectors.selectControlMode);
  const markerSrc = useSelector(editorSelectors.selectMarkerSrc);
  const store = useStore();

  const selection = overlaySelection[0];

  // Cameras
  const camera = useRef();
  const orbitRef = useRef();
  const transformRef = useRef();

  const overlayClicked = (index) => {
    store.dispatch(editorActions.setOverlaySelection([index]));
  };

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
                  orbitRef={orbitRef}
                  controlMode={controlMode}
                  transformRef={transformRef}
                >
                  <Suspense fallback={null}>
                    <Overlay
                      id={index}
                      type={type}
                      url={url}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                      }}
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
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      overlayClicked(index);
                    }}
                  />
                </Suspense>
              )
            );
          })
        }
        <Suspense fallback={null}>
          <Image
            initialParam={{
              initialPosition: [0, 0, 0],
              initialRotation: [-3.1415 / 2, 0, 0],
              initialScale: [1, 1, 1],
            }}
            url={markerSrc}
            fwdRef={null}
          />
        </Suspense>
        <OrbitControls ref={orbitRef} />
      </Provider>
    </Canvas>

  );
}
