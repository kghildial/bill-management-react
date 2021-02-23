import React from 'react';

// Custom component(s) import(s)
import Container from '../Container';
import { IconTag } from './Icon.style';

const Icon = ({ iconVal }) => {
  return (
    <Container type="iconWrapper" variant="noShadow">
      <IconTag icon={iconVal} />
    </Container>
  );
};

export default Icon;
