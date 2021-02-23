import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({ type }) => (type === 'headerContainer' ? '100vw' : '')};
  padding: ${({ type }) => (type === 'headerContainer' ? '0 20px' : '')};
  box-shadow: ${({ type }) =>
    type === 'headerContainer' ? '14px 14px 60px 0 rgb(0 0 0 / 30%)' : ''};
`;

export default Container;
