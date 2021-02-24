import React from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import Container from '../Container';
import { Label, InputTag } from './Input.style';

const Input = ({ type, name, label, placeholder, validationFn }) => {
  return (
    <Container type="inputWrapper">
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputTag
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        validate={validationFn}
      />
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
