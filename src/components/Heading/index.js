/**
 * Generates styled h1 - h6 based on the incoming props
 */

import React from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import { HeadingTag } from './Heading.style';

const Heading = ({ level, type, text }) => {
  return (
    <HeadingTag level={level} type={type}>
      {text}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Heading;
