import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Row = styled.tr``;

export const Cell = styled(props =>
  React.createElement(props.type === 'headCell' ? 'th' : 'td', props)
)`
  padding: 10px 20px;
  text-align: center;
`;
