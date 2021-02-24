import { UPDATE_POPUP_STATE } from '../constants/uiStateConstants';

export const updatePopupState = payload => ({
  type: UPDATE_POPUP_STATE,
  payload,
});
