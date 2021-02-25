import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

// Custom component(s) import(s)
import Container from '../Container';
import { Label, InputTag } from './Input.style';

const Input = ({ type, name, label, placeholder, validationFn, min, max }) => {
  return (
    <Container type="fieldWrapper">
      {label && <Label htmlFor={name}>{label}:</Label>}
      <InputTag
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        validate={validationFn}
        max="2020-12-31"
        min="2020-01-01"
      />
      <Container type="fieldErrorWrapper">
        <ErrorMessage name={name} />
      </Container>
    </Container>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validationFn: PropTypes.func,
};

export default Input;
