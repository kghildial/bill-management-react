import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import seederData from './seeder';

const initialState = {
  app: {
    uiStates: {},
    dataSeed: seederData.bills,
  },
};

const reducer = combineReducers({
  app: (state = initialState) => state,
});

const middleware = [];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
