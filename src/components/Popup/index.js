import React from 'react';

// Custom component(s) import(s)
import Container from '../Container';

const Popup = ({ children, trigger }) => {
  return (
    <Container type="popupBackdrop" trigger={trigger}>
      <Container type="popupCard" trigger={trigger}>
        {children}
      </Container>
    </Container>
  );
};

export default Popup;
