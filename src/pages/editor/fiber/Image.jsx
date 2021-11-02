import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

const ImageObject = (props) => {
  const { url, initialParam } = props;
  const [ratio, setRatio] = useState(undefined);
  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = initialParam;

  const texture = useTexture(`https://hd1y3043rd.execute-api.us-east-1.amazonaws.com/dev?url=${url}`);

  useEffect(() => {
    setRatio(texture.image.naturalHeight / texture.image.naturalWidth);
  }, [texture]);

  return (!url || !texture || !ratio) ? null : (
    <Suspense fallback={null}>
      <mesh
        position={initialPosition}
        rotation={initialRotation}
        scale={initialScale}
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

ImageObject.propTypes = {
  url: PropTypes.string.isRequired,
  initialParam: PropTypes.shape({
    initialPosition: xyz,
    initialRotation: xyz,
    initialScale: xyz,
  }).isRequired,
};

export default ImageObject;
