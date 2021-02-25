import React from 'react';
import styled from 'styled-components';

export const HeadingTag = styled(props =>
  React.createElement(`h${props.level}`, props)
)`
  margin: ${({ type }) => {
    switch (type) {
      case 'popupHeading':
        return '0';
      case 'chartHeading':
        return '0 30px';
      default:
        return '';
    }
  }};

  @media only screen and (max-width: 768px) {
    font-size: ${({ type }) => {
      switch (type) {
        case 'logo':
          return '25px';
        case 'chartHeading':
          return '17px';
        default:
          return '';
      }
    }};
  }

  @media only screen and (max-width: 385px) {
    margin: ${({ type }) => {
      switch (type) {
        case 'chartHeading':
          return '0 10px';
        default:
          return '';
      }
    }};
  }
`;
