/* eslint-disable no-console */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { editorSelectors } from '../../../state/slices/editor';

const PI = 3.14;

const Image = React.forwardRef((props, fwdRef) => {
  const { id, url } = props;
  const texture = useTexture(url);
  const overlay = useSelector(editorSelectors.selectOverlays)[id];
  console.log(overlay);

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
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
