/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { typeEnums } from '../../../state/slices/editor';
import Image from './Image';
import Model from './Model';

const Asset = React.forwardRef((props, fwdRef) => {
  const { id, type, url } = props;
  switch (type) {
    case typeEnums.IMAGE:
      return <Image id={id} url={url} ref={fwdRef} />;
    case typeEnums.MODEL:
      return <Model id={id} url={url} ref={fwdRef} />;
    case typeEnums.VIDEO:
      return null;
    default:
      return null;
  }
});

Asset.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Asset;
