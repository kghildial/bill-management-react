import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label``;

export const SelectField = styled(Field)`
  padding: 10px 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s linear;
  outline: none;
  border: none;
  background: #ebebeb;

  &::placeholder {
    color: #aaa;
  }
`;
