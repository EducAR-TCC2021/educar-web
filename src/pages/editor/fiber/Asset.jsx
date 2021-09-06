/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { typeEnums } from '../../../state/slices/editor';
import Image from './Image';
import Model from './Model';

const Asset = React.forwardRef((props, fwdRef) => {
  const { type, url } = props;
  switch (type) {
    case typeEnums.IMAGE:
      return <Image url={url} ref={fwdRef} />;
    case typeEnums.MODEL:
      return <Model url={url} ref={fwdRef} />;
    case typeEnums.VIDEO:
      return null;
    default:
      return null;
  }
});

Asset.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Asset;
