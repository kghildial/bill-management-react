import {
  UPDATE_POPUP_STATE,
  UPDATE_ACTIVE_MONTH,
  UPDATE_ACTIVE_CATEGORY,
  UPDATE_ACTIVE_BUDGET,
  UPDATE_BUDGET_ANALYSIS,
} from '../constants/uiStateConstants';

export const uiStatesReducer = (
  state = {
    uiStates: {
      popupState: {},
      activeMonth: 1,
      activeCategory: '',
      activeBudget: 50000,
      budgetAnalysis: {
        isOn: false,
        highlightedSet: [],
      },
    },
  },
  action
) => {
  switch (action.type) {
    case UPDATE_POPUP_STATE:
      const newState = {
        ...state,
        ...{
          popupState: {
            isOpen: action.payload.isOpen,
            callType: action.payload.callType,
            id: action.payload.id,
          },
        },
      };

      return newState;
    case UPDATE_ACTIVE_MONTH:
      return { ...state, ...{ activeMonth: action.payload } };
    case UPDATE_ACTIVE_CATEGORY:
      return { ...state, ...{ activeCategory: action.payload } };
    case UPDATE_ACTIVE_BUDGET:
      return { ...state, ...{ activeBudget: action.payload } };
    case UPDATE_BUDGET_ANALYSIS:
      return { ...state, ...{ budgetAnalysis: action.payload } };
    default:
      return state;
  }
};
