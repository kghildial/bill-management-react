import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import seederData from './seeder';

// Reducer(s) import(s)
import { uiStatesReducer } from './reducers/uiStateReducers';
import { billDataReducer } from './reducers/billDataReducers';

const initialState = {
  uiStates: {
    popupState: {
      isOpen: false,
      callType: null,
      id: null,
    },
    activeMonth: 1,
    activeCategory: '',
    activeBudget: 50000,
    budgetAnalysis: {
      isOn: false,
      highlightedSet: [],
    },
  },
  billsData: seederData,
};

const reducer = combineReducers({
  uiStates: uiStatesReducer,
  billsData: billDataReducer,
  categories: () => [
    'Convertible',
    'Coupe',
    'Crossover',
    'Hatchback',
    'Minivan',
    'Pickup Truck',
    'Sedan',
    'Station Wagon',
    'SUV',
    'Van',
  ],
});

const middleware = [];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
