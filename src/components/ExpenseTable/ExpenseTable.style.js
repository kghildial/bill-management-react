import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const Cell = styled(props =>
  React.createElement(props.type === 'headCell' ? 'th' : 'td', props)
)`
  display: ${({ type }) => (type === 'actionCell' ? 'flex' : '')};
  justify-content: ${({ type }) => (type === 'actionCell' ? 'center' : '')};
  padding: 10px 20px;
  text-align: center;
  word-break: break-word;

  @media only screen and (max-width: 768px) {
    padding: 10px 5px;
  }
`;
