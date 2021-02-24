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

      let editedBillsData = [...state];

      editedBillsData[editIndex] = {
        ...editedBillsData[editIndex],
        ...action.payload,
      };

      return editedBillsData;
    case DELETE_BILL:
      const delIndex = state.findIndex(entry => entry.id === action.payload);

      let newBillsData = [...state];
      newBillsData.splice(delIndex, 1);

      return newBillsData.map((entry, index) => {
        if (index >= delIndex) entry.id -= 1;
        return entry;
      });
    default:
      return state;
  }
};
