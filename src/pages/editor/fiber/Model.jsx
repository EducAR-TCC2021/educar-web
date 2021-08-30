import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { Sphere } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Esfera rosa representando que o modelo está carregando.
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

// Modelo 3D
function Model({ url, ref }) {
  const [gltf, setGltf] = useState();
  const [loading, setLoading] = useState(true);

  function onLoad(gltfObj) {
    setGltf(gltfObj);
    setLoading(false);
  }

  useMemo(() => { new GLTFLoader().load(url, onLoad); }, [url]);

  useEffect(() => {
    if (ref && ref.current) {
      setLoading(true);
      ref.current.clear();
    }
  }, [ref, url]);

  // Enquanto o modelo carrega, exibir modelo de Fallback
  return (gltf && !loading)
    ? (
      <Suspense fallback={<div />}>
        <primitive ref={ref} name="3dmodel" object={gltf.scene} />
      </Suspense>
    )
    : <Fallback />;
}
Model.propTypes = {
  url: PropTypes.string.isRequired,
  ref: PropTypes.element.isRequired,
};

export default Model;
