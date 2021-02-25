import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faPlus, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import Container from '../../components/Container';
import Icon from '../Icon';
import Heading from '../Heading';
import { Select, Label } from './ControlsCenter.style';

// Action(s) import(s)
import {
  updatePopupState,
  updateActiveMonth,
  updateActiveCategory,
  updateBudgetAnalysisState,
} from '../../actions/uiStateActions';

// Custom util method(s) import(s)
import { getBudgetAnalysisData } from '../../utils';

const ControlsCenter = ({ variant }) => {
  const dispatch = useDispatch();
  const storeData = {
    billsData: useSelector(state => state.billsData),
    activeMonth: useSelector(state => state.uiStates.activeMonth),
    categories: useSelector(state => state.categories),
    activeCategory: useSelector(state => state.uiStates.activeCategory),
    activeBudget: useSelector(state => state.uiStates.activeBudget),
    budgetAnalysis: useSelector(state => state.uiStates.budgetAnalysis),
  };

  return (
    <Container type="controlsCenterWrapper" variant={variant}>
      {variant === 'expenseTable' ? (
        <>
          <Icon
            type="addBillIcon"
            label={window.innerWidth >= 768 ? 'Add' : ''}
            iconVal={faPlus}
            customClickHandler={() =>
              dispatch(updatePopupState({ isOpen: true, callType: 'Add' }))
            }
          />
          {window.innerWidth > 768 && (
            <Label htmlFor="categoryFilter">Month:</Label>
          )}
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
          <Select
            id="categoryFilter"
            name="categoryFilter"
            value={storeData.activeCategory}
            onChange={event => {
              dispatch(updateActiveCategory(event.target.value));
            }}
          >
            <option value="">Filter by category ?</option>
            {storeData.categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </>
      ) : (
        <>
          <Heading type="chartHeading" level="3" text="Time-Series chart" />
          <Icon
            isactive={storeData.budgetAnalysis.isOn}
            type="paymentStatsIcon"
            label="View budget Analysis"
            iconVal={faMoneyCheck}
            customClickHandler={() => {
              if (storeData.budgetAnalysis.isOn) {
                dispatch(
                  updateBudgetAnalysisState({ isOn: false, highlightedSet: [] })
                );
              } else {
                dispatch(
                  updateBudgetAnalysisState({
                    isOn: true,
                    highlightedSet: getBudgetAnalysisData(storeData),
                  })
                );
              }
            }}
          />
        </>
      )}
    </Container>
  );
};

export default ControlsCenter;
