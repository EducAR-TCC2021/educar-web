/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useRef,
  Suspense,
  useCallback,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSelector, Provider, useStore } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';
import { editorActions, editorSelectors } from '../../../state/slices/editor';
import TransformController from './TransformController';
import Image from './Image';
import Overlay from './Overlay';

const INITIAL_CAMERA_POSITION = [0, 2.5, 2.5];

export default function Scene() {
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlaySelection = useSelector(editorSelectors.selectOverlaySelection);
  const controlMode = useSelector(editorSelectors.selectControlMode);
  const markerSrc = useSelector(editorSelectors.selectMarkerSrc);
  const store = useStore();
  const orbitRef = useRef();
  const selection = overlaySelection[0];

  const setCameraPosition = (position) => {
    const orbitControls = orbitRef.current;
    if (orbitControls) {
      orbitControls.object.position.set(...position);
      orbitControls.update();
    }
  };

  useHotkeys('r', () => {
    orbitRef.current.reset();
    setCameraPosition(INITIAL_CAMERA_POSITION);
  });

  const orbitCallback = useCallback((orbitControls) => {
    orbitRef.current = orbitControls;
    setCameraPosition(INITIAL_CAMERA_POSITION);
  }, []);

  const transformRef = useRef();

  const overlayClicked = (index) => {
    store.dispatch(editorActions.setOverlaySelection([index]));
  };

  return (
    <Canvas>
      <Provider store={store}>
        <OrbitControls ref={orbitCallback} dampingFactor={0.1} />
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
      </Provider>
    </Canvas>
  );
}
