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
      return '';
    case DELETE_BILL:
      return '';
    default:
      return state;
  }
};
