import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import Container from '../Container';
import List from '../List';
import { IconTag } from './Icon.style';

const Icon = ({ iconVal, iconMenuList }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container type="iconWrapper" variant="noShadow">
      <IconTag icon={iconVal} />
      {iconMenuList && <List type="iconMenu" listData={iconMenuList} />}
    </Container>
  );
};

Icon.propTypes = {
  iconVal: PropTypes.object.isRequired,
  iconMenuList: PropTypes.array,
};

export default Icon;
