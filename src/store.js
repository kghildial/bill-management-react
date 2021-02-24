import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import seederData from './seeder';

// Reducer(s) import(s)
import { uiStatesReducer } from './reducers/uiStateReducers';
import { billDataReducers } from './reducers/billDataReducers';

const initialState = {
  uiStates: {
    popupState: {
      isOpen: false,
      callType: null,
    },
  },
  billsData: seederData.bills,
};

const reducer = combineReducers({
  uiStates: uiStatesReducer,
  billsData: billDataReducers,
});

const middleware = [];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
