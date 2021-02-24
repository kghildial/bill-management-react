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
