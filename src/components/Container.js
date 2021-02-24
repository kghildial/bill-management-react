import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    display: none;
  }
  5% {
    opacity: 0;
    display: flex;
  }
  100% {
    opacity: 1;
    display: flex;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    display: none;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(90vh);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(90vh);
  }

  100% {
    transform: translateY(0);
  }
`;

const getAnimationName = (type, trigger) => {
  switch (type) {
    case 'popupBackdrop':
      return trigger ? fadeIn : fadeOut;
    case 'popupCard':
      return trigger ? slideIn : slideOut;
    default:
      return '';
  }
};

const Container = styled.div`
  animation-name: ${({ type, trigger }) => {
    switch (type) {
      case 'popupBackdrop':
        return getAnimationName(type, trigger);
      case 'popupCard':
        return getAnimationName(type, trigger);
      default:
        return 'flex';
    }
  }};

  animation-duration: ${({ type, trigger }) => {
    switch (type) {
      case 'popupBackdrop':
        return '0.5s';
      case 'popupCard':
        return '0.5s';
      default:
        return 'flex';
    }
  }};

  animation-delay: ${({ type, trigger }) => {
    switch (type) {
      case 'popupCard':
        return '0.3s';
      default:
        return 'flex';
    }
  }};

  animation-timing-function: ${({ type, trigger }) => {
    switch (type) {
      case 'popupBackdrop':
        return 'linear';
      case 'popupCard':
        return 'cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      default:
        return 'flex';
    }
  }};

  animation-fill-mode: forwards;

  display: ${({ type, trigger }) => {
    switch (type) {
      case 'popupBackdrop':
        return trigger ? 'flex' : 'none';
      default:
        return 'flex';
    }
  }};

  flex-direction: ${({ type }) => {
    switch (type) {
      case 'popupContentWrapper':
      case 'billsListContainer':
        return 'column';
      default:
        return '';
    }
  }};

  justify-content: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
      case 'iconWrapper':
      case 'popupCloseIcon':
        return 'center';
      case 'fieldWrapper':
        return 'space-between';
      case 'controlsCenterWrapper':
        return 'flex-end';
      default:
        return '';
    }
  }};

  align-items: ${({ type }) => {
    switch (type) {
      case 'popupBackdrop':
      case 'headerContainer':
      case 'iconWrapper':
      case 'popupCloseIcon':
      case 'fieldWrapper':
      case 'controlsCenterWrapper':
      case 'addBillIcon':
        return 'center';
      default:
        return '';
    }
  }};

  position: ${({ type }) => {
    switch (type) {
      case 'popupCloseIcon':
        return 'absolute';
      case 'popupBackdrop':
        return 'fixed';
      default:
        return 'relative';
    }
  }};

  top: ${({ type }) => {
    switch (type) {
      case 'popupCloseIcon':
        return '20px';
      case 'popupBackdrop':
        return '90px';
      case 'popupCard':
        return '-100vh';
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

  right: ${({ type }) => {
    switch (type) {
      case 'popupCloseIcon':
        return '20px';
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
      case 'popupCloseIcon':
        return '30px';
      case 'fieldWrapper':
        return '100%';
      default:
        return '';
    }
  }};

  height: ${({ type }) => {
    switch (type) {
      case 'iconWrapper':
      case 'popupCloseIcon':
        return '30px';
      case 'controlsCenterWrapper':
        return '50px';
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
      case 'addBillIcon':
        return '0 10px';
      case 'fieldWrapper':
        return '30px 0 10px';
      case 'controlsCenterWrapper':
        return '10px 20px';
      default:
        return '';
    }
  }};

  padding: ${({ type }) => {
    switch (type) {
      case 'headerContainer':
        return '0 20px';
      case 'iconWrapper':
      case 'popupCloseIcon':
        return '5px';
      case 'popupCard':
        return '20px 30px';
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
      case 'popupCloseIcon':
        return '9999';
      default:
        return '';
    }
  }};

  border-right: ${({ type }) =>
    type === 'addBillIcon' ? '1px solid #ccc' : ''};

  border-radius: ${({ type }) => {
    switch (type) {
      case 'chartContainer':
      case 'billsListContainer':
      case 'iconWrapper':
      case 'controlsCenterWrapper':
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
      case 'controlsCenterWrapper':
        return '14px 14px 60px 0 rgb(0 0 0 / 20%)';
      default:
        return '';
    }
  }};

  cursor: ${({ type }) => {
    switch (type) {
      case 'iconWrapper':
      case 'popupCloseIcon':
      case 'addBillIcon':
        return 'pointer';
      default:
        return '';
    }
  }};

  transition: ${({ type }) => {
    switch (type) {
      case 'popupCard':
        return '0.75s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      default:
        return '';
    }
  }};
`;

export default Container;
