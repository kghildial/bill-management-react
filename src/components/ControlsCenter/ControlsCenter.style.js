import styled from 'styled-components';

export const Label = styled.label`
  margin: 0 10px;
`;

export const Select = styled.select`
  padding: 10px 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s linear;
  outline: none;
  border: none;
  background: #ebebeb;
  /* width: ${({ id }) => {
    switch (id) {
      case 'categoryFilter':
        return '300px';
      default:
        return '';
    }
  }}; */
  margin: 0 30px 0 10px;
  cursor: pointer;

  /* &:hover {
    box-shadow: 14px 14px 30px 0 rgb(0 0 0 / 30%);
  } */
`;
