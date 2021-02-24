import styled from 'styled-components';

export const ListTag = styled.ul`
  list-style: none;
  z-index: 999;
  padding: 0;
  margin: 0;
  position: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return 'absolute';
      default:
        return '';
    }
  }};

  top: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return '10px';
      default:
        return '';
    }
  }};

  left: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return '-100px';
      default:
        return '';
    }
  }};

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return '100px';
      default:
        return '';
    }
  }};

  height: ${({ type, trigger }) => {
    switch (type) {
      case 'iconMenu':
        return trigger ? '90px' : '0';
      default:
        return '';
    }
  }};

  box-shadow: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return '14px 14px 60px 0 rgb(0 0 0 / 30%), -1px -2px 10px rgb(0 0 0 / 10%);';
      default:
        return '';
    }
  }};

  border-radius: ${({ type }) => {
    switch (type) {
      case 'iconMenu':
        return '5px';
      default:
        return '';
    }
  }};

  transition: height 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  overflow: hidden;
`;

export const ListItem = styled.li`
  padding: 10px 20px;

  border-bottom: 1px solid #ccc;

  width: 100%;
  text-align: left;

  transition: 0.3s linear;

  &:hover {
    background: #009eff;
    color: #fff;
  }
`;
