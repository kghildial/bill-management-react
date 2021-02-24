import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  justify-content: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
      case 'iconWrapper':
        return 'center';
      default:
        return '';
    }
  }};

  align-items: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
      case 'headerContainer':
      case 'iconWrapper':
        return 'center';
      default:
        return '';
    }
  }};

  position: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return 'fixed';
      default:
        return 'relative';
    }
  }};

  top: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return '90px';
      // case 'popupCard':
      //   return '-100vh';
      default:
        return '';
    }
  }};

  left: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return '0';
      default:
        return '';
    }
  }};

  width: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
      case 'popupBackdrop':
        return '100vw';
      case 'contentWrapper':
        return '95vw';
      case 'chartContainer':
        return '45%';
      case 'billsListContainer':
        return '55%';
      case 'iconWrapper':
        return '30px';
      default:
        return '';
    }
  }};

  height: ${({ type }) => {
    switch (type) {
      case 'iconWrapper':
        return '30px';
      case 'popupBackdrop':
        return 'calc(100vh - 90px)';
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
      case 'iconWrapper':
        return '0 10px';
      default:
        return '';
    }
  }};

  padding: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
        return '0 20px';
      case 'iconWrapper':
        return '5px';
      case 'popupCard':
        return '30px 50px';
      default:
        return '';
    }
  }};

  background: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return 'rgb(0 0 0 / 50%)';
      case 'popupCard':
        return '#fff';
      default:
        return '';
    }
  }};

  backdrop-filter: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return 'blur(5px)';
      default:
        return '';
    }
  }};

  z-index: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
        return '9999';
      default:
        return '';
    }
  }};

  border-radius: ${({ type }) => {
    switch (type) {
      case 'chartContainer':
      case 'billsListContainer':
      case 'iconWrapper':
        return '5px';
      case 'popupCard':
        return '10px';
      default:
        return '';
    }
  }};

  box-shadow: ${({ type, variant }) => {
    switch (type) {
      case 'headerContainer':
      case 'chartContainer':
      case 'billsListContainer':
        return '14px 14px 60px 0 rgb(0 0 0 / 20%)';
      case 'iconWrapper':
        return variant !== 'noShadow'
          ? '3px 3px 10px rgb(0 0 0 / 20%), -3px -3px 20px rgb(0 0 0 / 10%)'
          : '';
      default:
        return '';
    }
  }};

  cursor: ${({ type }) => {
    switch (type) {
      case 'iconWrapper':
        return 'pointer';
      default:
        return '';
    }
  }};

  transition: ${({ type }) => {
    switch (type) {
      case 'popupCard':
        return '0.5s cubic-bezier(0, 0, 0.56, 1.33)';
      default:
        return '';
    }
  }};
`;

export default Container;
