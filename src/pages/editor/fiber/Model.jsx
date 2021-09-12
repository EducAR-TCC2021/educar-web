/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { Sphere, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSelector } from 'react-redux';
import { editorSelectors } from '../../../state/slices/editor';

// Esfera rosa representando que o modelo está carregando.
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

// Modelo 3D
const Model = React.forwardRef((props, fwdRef) => {
  const { id, url } = props;
  const [loading, setLoading] = useState(false);
  const scene = useGLTF(url);
  const [gltf, setGltf] = useState(scene);

  const overlays = useSelector(editorSelectors.selectOverlays);
  const selection = useSelector(editorSelectors.selectOverlaySelection);
  const isSelected = selection[0] === id;
  const { position, rotation, scale } = overlays[id];
  const initialPosition = (!isSelected) ? [position.x, position.y, position.z] : [0, 0, 0];
  const initialRotation = (!isSelected) ? [rotation.x, rotation.y, rotation.z] : [0, 0, 0];
  const initialScale = (!isSelected) ? [scale.x, scale.y, scale.z] : [0, 0, 0];

  console.log('model overlays', position, initialPosition);

  function onLoad(gltfObj) {
    setGltf(gltfObj);
    setLoading(false);
  }

  // useMemo(() => { new GLTFLoader().load(url, onLoad); }, [url]);

  useEffect(() => {
    if (fwdRef && fwdRef.current) {
      // fwdRef.current.clear();
    }
  }, [fwdRef, url]);

  // Enquanto o modelo carrega, exibir modelo de Fallback
  return (gltf && !loading)
    ? (
      <Suspense fallback={<div />}>
        <primitive
          position={initialPosition}
          ref={fwdRef}
          name="3dmodel"
          object={gltf.scene}
        />
      </Suspense>
    )
    : <Fallback />;
});
Model.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Model;
