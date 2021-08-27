import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { Sphere } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 * Uma esfera rosa para ser apresentada quando o overlay estiver carregando.
 * @param {*} props
 * @returns
 */
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

/**
 * Overlay.
 * @param {*} props
 * @returns
 */
function Model({ path, modelRef }) {
  const [gltf, setGltf] = useState();
  const [loading, setLoading] = useState(true);

  function onLoad(gltfObj) {
    setGltf(gltfObj);
    setLoading(false);
  }

  useMemo(() => { new GLTFLoader().load(path, onLoad); }, [path]);

  useEffect(() => {
    if (modelRef && modelRef.current) {
      setLoading(true);
      modelRef.current.clear();
    }
  }, [modelRef, path]);

  // Enquanto o modelo carrega, exibir modelo de Fallback
  return (gltf && !loading)
    ? (
      <Suspense fallback={<div />}>
        <primitive ref={modelRef} name="3dmodel" object={gltf.scene} />
      </Suspense>
    )
    : <Fallback />;
}
Model.propTypes = {
  path: PropTypes.string.isRequired,
  modelRef: PropTypes.element.isRequired,
};

export default Model;
