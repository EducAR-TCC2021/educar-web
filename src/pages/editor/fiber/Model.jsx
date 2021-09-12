/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { Sphere, useGLTF } from '@react-three/drei';

// Esfera rosa representando que o modelo está carregando.
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

// Modelo 3D
const Model = React.forwardRef((props, fwdRef) => {
  const { url, initialParam } = props;
  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = initialParam;
  const [loading, setLoading] = useState(false);
  const scene = useGLTF(url);
  const [gltf, setGltf] = useState(scene);

  /*
  function onLoad(gltfObj) {
    setGltf(gltfObj);
    setLoading(false);
  }

  useMemo(() => { new GLTFLoader().load(url, onLoad); }, [url]);

  */
  useEffect(() => {
    if (fwdRef && fwdRef.current) {
      // fwdRef.current.clear();
    }
  }, [url]);

  // Enquanto o modelo carrega, exibir modelo de Fallback
  return (gltf && !loading)
    ? (
      <Suspense fallback={<div />}>
        <primitive
          position={initialPosition}
          rotation={initialRotation}
          scale={initialScale}
          ref={fwdRef}
          name="3dmodel"
          object={gltf.scene}
        />
      </Suspense>
    )
    : <Fallback />;
});
Model.propTypes = {
  url: PropTypes.string.isRequired,
  initialParam: PropTypes.any.isRequired,
};

export default Model;
