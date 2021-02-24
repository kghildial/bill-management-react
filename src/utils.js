import React, { useEffect } from 'react';

export const isRequired = arg => {
  throw new Error(`${arg} is a required argument.`);
};

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

    // Clean up the evenet created in this useEffect
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};
