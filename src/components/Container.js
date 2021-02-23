import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  align-items: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
        return 'center';
      default:
        return '';
    }
  }};

  width: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
        return '100vw';
      case 'contentWrapper':
        return '95vw';
      case 'chartContainer':
      case 'billsListContainer':
        return '48%';
      default:
        return '';
    }
  }};

  margin: ${({ type }) => {
    switch (type) {
      case 'contentWrapper':
        return '30px auto';
      case 'chartContainer':
      case 'billsListContainer':
        return '0 10px';
      default:
        return '';
    }
  }};

  padding: ${({ type }) => (type === 'headerContainer' ? '0 20px' : '')};

  border-radius: ${({ type }) => {
    switch (type) {
      case 'chartContainer':
      case 'billsListContainer':
        return '5px';
      default:
        return '';
    }
  }};

  box-shadow: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
      case 'chartContainer':
      case 'billsListContainer':
        return '14px 14px 60px 0 rgb(0 0 0 / 20%)';
      default:
        return '';
    }
  }};
`;

export default Container;
