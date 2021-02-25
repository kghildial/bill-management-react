import seederData from '../seeder';
import {
  ADD_BILL,
  EDIT_BILL,
  DELETE_BILL,
} from '../constants/billsDataConstants';

export const billDataReducer = (state = { billsData: seederData }, action) => {
  switch (action.type) {
    case ADD_BILL:
      return {
        ...state,
        ...{
          [action.payload.month]: [
            ...state[action.payload.month],
            action.payload.data,
          ],
        },
      };
    case EDIT_BILL:
      const editIndex = state[action.payload.month].findIndex(
        entry => entry.id === action.payload.data.id
      );

      let editedBillsData = [...state[action.payload.month]];

      editedBillsData[editIndex] = {
        ...editedBillsData[editIndex],
        ...action.payload.data,
      };

      return { ...state, ...{ [action.payload.month]: editedBillsData } };
    case DELETE_BILL:
      const delIndex = state[action.payload.activeMonth].findIndex(
        entry => entry.id === action.payload.id
      );

      let newBillsData = [...state[action.payload.activeMonth]];
      newBillsData.splice(delIndex, 1);

      return {
        ...state,
        ...{
          [action.payload.activeMonth]: newBillsData.map((entry, index) => {
            if (index >= delIndex) entry.id -= 1;
            return entry;
          }),
        },
      };
    default:
      return state;
  }
};
