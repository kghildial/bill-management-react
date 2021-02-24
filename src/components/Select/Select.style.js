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
  width: 300px;
  margin-left: 30px;

  &:hover {
    box-shadow: 14px 14px 30px 0 rgb(0 0 0 / 30%);
  }
`;
