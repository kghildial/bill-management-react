import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import Container from '../Container';
import List from '../List';
import { IconTag, Label } from './Icon.style';

// Action(s) import(s)
import { updatePopupState } from '../../actions/uiStateActions';

const Icon = ({
  type,
  label,
  iconVal,
  iconMenuList,
  customClickHandler,
  itemID,
}) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(true);
  };

  const onListItemCLick = option => {
    setIsMenuOpen(false);
    dispatch(updatePopupState({ isOpen: true, callType: option, id: itemID }));
  };

  return (
    <Container type={type} onClick={customClickHandler || clickHandler}>
      <IconTag type={type} icon={iconVal} />
      {label && <Label>{label}</Label>}
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
