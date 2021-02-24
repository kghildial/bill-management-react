import React from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import { ListTag, ListItem } from './List.style';

const List = ({ type, listData, trigger }) => {
  return (
    <ListTag type={type} trigger={trigger}>
      {listData.map((item, index) => (
        <ListItem key={`listItem_${index + 1}`} type={type}>
          {item}
        </ListItem>
      ))}
    </ListTag>
  );
};

List.propTypes = {
  type: PropTypes.string,
  listData: PropTypes.array.isRequired,
};

export default List;
