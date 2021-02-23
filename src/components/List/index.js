/**
 * Generates List of expenses
 */

import React from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import { ListTag, ListItem, ListItemData } from './List.style';

const List = props => {
  return (
    <ListTag>
      <ListItem type="listHeading">
        {props.headingData.map((item, index) => (
          <span key={`heading_${index + 1}`}>{item}</span>
        ))}
      </ListItem>
      {props.data.map(item => (
        <ListItem key={item.id} type="listItem">
          <span>{item.id}</span>
          <span>{item.description}</span>
          <span>{item.category}</span>
        </ListItem>
      ))}
    </ListTag>
  );
};

List.propsTypes = {
  headingData: PropTypes.array.isRequired,
  data: PropTypes.array,
};

export default List;
