import seederData from '../seeder';
import {
  ADD_BILL,
  EDIT_BILL,
  DELETE_BILL,
} from '../constants/billsDataConstants';

export const billDataReducer = (state = { billsData: seederData }, action) => {
  switch (action.type) {
    case ADD_BILL:
      return [...state, action.payload];
    case EDIT_BILL:
      const editIndex = state.findIndex(
        entry => entry.id === action.payload.id
      );

      let newBillsData = [...state];

      newBillsData[editIndex] = {
        ...newBillsData[editIndex],
        ...action.payload,
      };

      return newBillsData;
    case DELETE_BILL:
      return '';
    default:
      return state;
  }
};
