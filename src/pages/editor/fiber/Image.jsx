/* eslint-disable no-console */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

const PI = 3.14;

function Image({ url, ref }) {
  console.log('Loading omegalul', url);
  const image = (!url) ? 'https://static.dw.com/image/37030280_101.jpg' : url;
  const texture = useTexture(image);
  return (
    <Suspense fallback={null}>
      <mesh ref={ref} rotation={[-PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </Suspense>
  );
}
Image.propTypes = {
  url: PropTypes.string.isRequired,
  ref: PropTypes.element.isRequired,
};

export default Image;
