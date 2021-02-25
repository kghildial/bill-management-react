import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

// Custom component(s) import(s)
import Container from '../Container';
import { Label, SelectField } from './Select.style';

const Select = ({ name, label, placeholder, optionsList, validationFn }) => {
  return (
    <Container type="fieldWrapper">
      {label && <Label htmlFor={name}>{label}:</Label>}
      <SelectField
        id={name}
        component="select"
        name={name}
        validate={validationFn}
      >
        {placeholder && (
          <option value={placeholder} selected>
            {placeholder}
          </option>
        )}
        {optionsList.map(option => (
          <option key={`category_${option}`} value={option}>
            {option}
          </option>
        ))}
      </SelectField>
      <Container type="fieldErrorWrapper">
        <ErrorMessage name={name} />
      </Container>
    </Container>
  );
};

Select.defaultProps = {
  optionsList: [],
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  optionsList: PropTypes.array,
  label: PropTypes.string,
  validationFn: PropTypes.func,
};

export default Select;
