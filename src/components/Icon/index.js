import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import Container from '../Container';
import List from '../List';
import { IconTag } from './Icon.style';

// Action(s) import(s)
import { updatePopupState } from '../../actions/uiStateActions';

const Icon = ({ type, iconVal, iconMenuList, customClickHandler }) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(true);
  };

  const onListItemCLick = option => {
    setIsMenuOpen(false);
    dispatch(updatePopupState({ isOpen: true, callType: option }));
  };

  return (
    <Container type={type} onClick={customClickHandler || clickHandler}>
      <IconTag type={type} icon={iconVal} />
      {iconMenuList && (
        <List
          type="iconMenu"
          listData={iconMenuList}
          trigger={isMenuOpen}
          outsideClickCallback={() => setIsMenuOpen(false)}
          handleClickCallback={onListItemCLick}
        />
      )}
    </Container>
  );
};

Icon.propTypes = {
  iconVal: PropTypes.object.isRequired,
  iconMenuList: PropTypes.array,
};

export default Icon;
