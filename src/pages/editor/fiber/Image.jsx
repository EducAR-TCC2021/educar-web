/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

const Image = React.forwardRef((props, fwdRef) => {
  const { url, initialParam } = props;
  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = initialParam;
  const texture = useTexture(url);

  return (!url || !texture) ? null : (
    <Suspense fallback={null}>
      <mesh
        ref={fwdRef}
        position={initialPosition}
        rotation={initialRotation}
        scale={initialScale}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 0]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </Suspense>
  );
});
Image.propTypes = {
  url: PropTypes.string.isRequired,
  initialParam: PropTypes.any.isRequired,
};

export default Image;
