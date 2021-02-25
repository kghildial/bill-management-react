import { useEffect } from 'react';

// Checks for required attributes of a function
export const isRequired = arg => {
  throw new Error(`${arg} is a required argument.`);
};

/**
 * @description Custom hook that triggers a callback if use clicks outside the given element (ref)
 * @param {Ref} ref required
 * @param {Function} callback required
 */
export const useOutsideAlerter = (
  ref = isRequired('ref'),
  callback = isRequired('callback')
) => {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (ref.current && !ref.current.contains(event.target)) callback(true);
      else callback(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);

    // Clean up the event created in this useEffect
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};

/**
 * @description Filters array to get only unique values
 * @param {Array} categoriesList
 */
export const getUniqueCategoryValues = categoriesList => {
  const onlyUnique = (value, index, self) => self.indexOf(value) === index;

  return categoriesList.filter(onlyUnique);
};

export const getMonthName = monthNum =>
  [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][monthNum - 1];

export const getChartData = billsData => {
  const clonedData = [...billsData];

  let chartData = [];
  for (let entry of clonedData) {
    const keyName = `${entry.date.split('-')[1]} ${getMonthName(
      Number(entry.date.split('-')[0])
    )}`;
    const dataIndex = chartData.findIndex(item => item.name === keyName);

    if (dataIndex === -1) {
      chartData.push({
        name: keyName,
        amount: Number(entry.amount),
      });
    } else {
      chartData[dataIndex].amount += Number(entry.amount);
    }
  }

  // // const chartData = clonedData.map(entry => ({
  // //   name: `${entry.date.split('-')[1]} ${getMonthName(
  // //     Number(entry.date.split('-')[0])
  // //   )}`,
  // //   amount: entry.amount,
  // // }));

  return chartData;
};

export const getBudgetAnalysisData = storeData => {
  let amountsList = storeData.billsData[storeData.activeMonth].map(
    entry => entry.amount
  );
  let descAmountsList = amountsList.sort((a, b) => b - a);

  let userBudget = storeData.activeBudget;
  let filterdAmts = [];

  for (let amt of descAmountsList) {
    if (userBudget - Number(amt) >= 0) {
      filterdAmts.push(Number(amt));
      userBudget -= Number(amt);
    }
  }

  return filterdAmts;
};
