import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconTag = styled(FontAwesomeIcon)`
  width: ${({ type }) => {
    switch (type) {
      case 'popupCloseIcon':
        return '15px';
      default:
        return '';
    }
  }};

  height: ${({ type }) => {
    switch (type) {
      case 'popupCloseIcon':
        return '20px';
      default:
        return '';
    }
  }};
`;
