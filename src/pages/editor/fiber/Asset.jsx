import React from 'react';
import PropTypes from 'prop-types';
import { typeEnums } from '../../../state/slices/editor';
import Image from './Image';
import Model from './Model';

function Asset({ type, url, ref }) {
  switch (type) {
    case typeEnums.IMAGE:
      return <Image url={url} ref={ref} />;
    case typeEnums.MODEL:
      return <Model url={url} ref={ref} />;
    case typeEnums.VIDEO:
      return null;
    default:
      return null;
  }
}
Asset.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  ref: PropTypes.element.isRequired,
};

export default Asset;
