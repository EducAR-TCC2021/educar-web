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

// Esfera rosa representando que o modelo está carregando.
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

// Modelo 3D
const Model = React.forwardRef((props, fwdRef) => {
  const { url } = props;
  const [loading, setLoading] = useState(false);
  const scene = useGLTF(url);
  const [gltf, setGltf] = useState(scene);

  console.log('rendering');

  function onLoad(gltfObj) {
    setGltf(gltfObj);
    setLoading(false);
  }

  useFrame(() => {
    if (fwdRef && fwdRef.current) {
      fwdRef.current.updateMatrix();
    }
  });

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
        <group ref={fwdRef}>
          <primitive name="3dmodel" object={gltf.scene} />
        </group>
      </Suspense>
    )
    : <Fallback />;
});
Model.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Model;
