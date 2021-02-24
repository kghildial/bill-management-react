import React from 'react';
import styled from 'styled-components';

export const HeadingTag = styled(props =>
  React.createElement(`h${props.level}`, props)
)`
  margin: ${({ type }) => {
    switch (type) {
      case 'popupHeading':
        return '0';
      default:
        return '';
    }
  }};
`;
