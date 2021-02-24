import { UPDATE_POPUP_STATE } from '../constants/uiStateConstants';

export const uiStatesReducer = (
  state = { uiStates: { popupState: {} } },
  action
) => {
  switch (action.type) {
    case UPDATE_POPUP_STATE:
      return {
        ...state.uiStates,
        ...{
          popupState: {
            isOpen: action.payload.isOpen,
            callType: action.payload.callType,
          },
        },
      };
    default:
      return state;
  }
};
