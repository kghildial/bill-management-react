import {
  UPDATE_POPUP_STATE,
  UPDATE_ACTIVE_MONTH,
} from '../constants/uiStateConstants';

export const updatePopupState = payload => ({
  type: UPDATE_POPUP_STATE,
  payload,
});

export const updateActiveMonth = payload => ({
  type: UPDATE_ACTIVE_MONTH,
  payload,
});
