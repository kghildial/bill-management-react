import React from 'react';
import { useDispatch } from 'react-redux';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import Container from '../../components/Container';
import Icon from '../Icon';
import { Select, Label } from './ControlsCenter.style';

// Action(s) import(s)
import { updatePopupState } from '../../actions/uiStateActions';

const ControlsCenter = () => {
  const dispatch = useDispatch();

  return (
    <Container type="controlsCenterWrapper">
      <Icon
        type="addBillIcon"
        label="Add"
        iconVal={faPlus}
        customClickHandler={() =>
          dispatch(updatePopupState({ isOpen: true, callType: 'Add' }))
        }
      />

      <Label htmlFor="categoryFilter">Filter by category:</Label>
      <Select id="categoryFilter" name="categoryFilter" value="">
        <option value="none">None</option>
      </Select>
    </Container>
  );
};

export default ControlsCenter;
