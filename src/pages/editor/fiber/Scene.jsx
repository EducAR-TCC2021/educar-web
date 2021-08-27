/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSelector } from 'react-redux';
import Model from './Model';
import { editorSelectors } from '../../../state/slices/editor';
import CameraMultiControls from './CameraMultiControls';

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // eslint-disable-next-line no-unused-vars
  useFrame((_state, _delta) => {
    ref.current.rotation.x += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(_event) => setActive(!active)}
      onPointerOver={(_event) => setHover(true)}
      onPointerOut={(_event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default function Scene() {
  const overlays = useSelector(editorSelectors.selectOverlays);
  const overlaySelection = useSelector(editorSelectors.selectOverlaySelection);
  const controlMode = useSelector(editorSelectors.selectControlMode);

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
      <Box position={[1.2, 0, 0]} />
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
      <OrbitControls ref={orbitRef} />
    </Canvas>
  );
}
