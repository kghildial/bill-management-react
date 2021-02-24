import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 30px;
  background: #009eff;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s linear;

  margin: ${({ variant, callType }) => {
    switch (variant) {
      case 'formSubmitBtn':
        return callType !== 'Delete' ? '20px 0' : '20px 30px 20px 0';
      default:
        return '';
    }
  }};

  float: ${({ variant, callType }) => {
    switch (variant) {
      case 'formSubmitBtn':
        return callType !== 'Delete' ? 'right' : '';
      default:
        return '';
    }
  }};

  &:hover {
    box-shadow: 14px 14px 30px 0 rgb(0 0 0 / 30%);
  }

  &:focus {
    box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 50%);
  }
`;

export default Button;
