import seederData from '../seeder';

export const billDataReducers = (state = { billsData: seederData }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
