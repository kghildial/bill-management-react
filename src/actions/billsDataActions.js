import {
  ADD_BILL,
  EDIT_BILL,
  DELETE_BILL,
} from '../constants/billsDataConstants';

export const addBillData = payload => ({
  type: ADD_BILL,
  payload,
});

export const editBillData = payload => ({
  type: EDIT_BILL,
  payload,
});

export const deleteBillData = payload => ({
  type: DELETE_BILL,
  payload,
});
