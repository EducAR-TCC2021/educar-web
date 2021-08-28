/* eslint-disable no-console */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

function Image({ url }) {
  console.log('Loading omegalul', url);
  const image = (!url) ? 'https://static.dw.com/image/37030280_101.jpg' : url;
  const texture = useTexture(image);
  return (
    <Suspense fallback={null}>
      <mesh rotation={[-3.14 / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </Suspense>
  );
}
Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
