import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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

// Config to generate Persisted Reducer
const persistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
  blacklist: ['router'],
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

const persistedReducer = persistReducer(persistConfig, reducer);

// Thunk / Saga not used since we don't have API calls
const middleware = [];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Persisted Store for PersistGate
export const persistor = persistStore(store);
