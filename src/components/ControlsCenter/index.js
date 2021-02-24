import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faPlus, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import Container from '../../components/Container';
import Icon from '../Icon';
import { Select, Label } from './ControlsCenter.style';

// Action(s) import(s)
import {
  updatePopupState,
  updateActiveMonth,
} from '../../actions/uiStateActions';

const ControlsCenter = () => {
  const dispatch = useDispatch();
  const storeData = {
    activeMonth: useSelector(state => state.uiStates.activeMonth),
  };

  return (
    <Container type="controlsCenterWrapper">
      <Icon
        type="addBillIcon"
        label="Payment Statistics"
        iconVal={faMoneyCheck}
        customClickHandler={() => {}}
      />

      <Icon
        type="addBillIcon"
        label="Add"
        iconVal={faPlus}
        customClickHandler={() =>
          dispatch(updatePopupState({ isOpen: true, callType: 'Add' }))
        }
      />

      {/* <Label htmlFor="categoryFilter">Month:</Label> */}
      <Select
        id="monthFilter"
        name="monthFilter"
        value={storeData.activeMonth}
        onChange={event => {
          dispatch(updateActiveMonth(event.target.value));
        }}
      >
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </Select>

      {/* <Label htmlFor="categoryFilter">Filter by category:</Label> */}
      <Select id="categoryFilter" name="categoryFilter" value="">
        <option value="--select--">Filter by category</option>
      </Select>
    </Container>
  );
};

export default ControlsCenter;
