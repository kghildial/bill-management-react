import React from 'react';

// Custom component(s) import(s)
import Container from './Container';
import Heading from './Heading';

const Header = () => {
  return (
    <Container type="headerContainer">
      <Heading type="logo" level="1" text="Car Wash Bill Manager" />
    </Container>
  );
};

export default Header;
