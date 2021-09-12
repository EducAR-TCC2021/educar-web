/* eslint-disable no-console */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

const PI = 3.14;

const Image = React.forwardRef((props, fwdRef) => {
  const { url } = props;
  const texture = useTexture(url);

  return (!url || !texture) ? null : (
    <Suspense fallback={null}>
      <mesh ref={fwdRef} rotation={[-PI / 2, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 0]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </Suspense>
  );
});
Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
