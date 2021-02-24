import React from 'react';
import { useDispatch } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import Container from '../Container';
import Icon from '../Icon';

// Action(s) import(s)
import { updatePopupState } from '../../actions/uiStateActions';

const Popup = ({ children, trigger }) => {
  const dispatch = useDispatch();

  return (
    <Container type="popupBackdrop" trigger={trigger}>
      <Container type="popupCard" trigger={trigger}>
        <Icon
          type="popupCloseIcon"
          iconVal={faTimes}
          customClickHandler={() =>
            dispatch(updatePopupState({ isOpen: false, callType: null }))
          }
        />
        {children}
      </Container>
    </Container>
  );
};

export default Popup;
