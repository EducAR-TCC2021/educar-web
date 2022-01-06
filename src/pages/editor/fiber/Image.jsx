import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

const ImageObject = ({ url, initialParam, onDoubleClick }) => {
  const [ratio, setRatio] = useState(undefined);
  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = initialParam;

  const texture = useTexture(`https://pzvyi9cp9i.execute-api.sa-east-1.amazonaws.com/qa?url=${url.split(/[?#]/)[0]}`);

  useEffect(() => {
    setRatio(texture.image.naturalHeight / texture.image.naturalWidth);
  }, [texture]);

  return (!url || !texture || !ratio) ? null : (
    <Suspense fallback={null}>
      <mesh
        position={initialPosition}
        rotation={initialRotation}
        scale={initialScale}
        onDoubleClick={onDoubleClick}
      >
        <boxBufferGeometry attach="geometry" args={[1, ratio, 0]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </Suspense>
  );
};

const xyz = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
});
ImageObject.defaultProps = {
  onDoubleClick: () => {},
};
ImageObject.propTypes = {
  url: PropTypes.string.isRequired,
  initialParam: PropTypes.shape({
    initialPosition: xyz,
    initialRotation: xyz,
    initialScale: xyz,
  }).isRequired,
  onDoubleClick: PropTypes.func,
};

export default ImageObject;
