import React from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import Container from '../Container';
import { Label, SelectField } from './Select.style';

const Select = ({ name, label, placeholder, optionsList, validationFn }) => {
  return (
    <Container type="fieldWrapper">
      {label && <Label htmlFor={name}>{label}:</Label>}
      <SelectField id={name} as="select" name={name} validate={validationFn}>
        {placeholder && <option>{placeholder}</option>}
        {optionsList.map(option => (
          <option key={`category_${option}`} value={option}>
            {option}
          </option>
        ))}
      </SelectField>
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
