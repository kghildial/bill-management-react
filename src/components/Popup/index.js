import React from 'react';

// Custom component(s) import(s)
import Container from '../Container';

const Popup = ({ children }) => {
  return (
    <Container type="popupBackdrop">
      <Container type="popupCard">{children}</Container>
    </Container>
  );
};

export default Popup;
