import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Custom component(s) import(s)
import { ListTag, ListItem } from './List.style';

// Custom hook(s) / util method(s) import(s)
import { useOutsideAlerter } from '../../utils';

const List = ({
  type,
  listData,
  trigger,
  outsideClickCallback,
  handleClickCallback,
}) => {
  const listRef = useRef(null);

  // Custom hook that triggers user defined changes on clicking outside the list
  useOutsideAlerter(listRef, isOutsideClicked => {
    if (isOutsideClicked && outsideClickCallback) outsideClickCallback();
  });

  return (
    <ListTag ref={listRef} type={type} trigger={trigger}>
      {listData.map((item, index) => (
        <ListItem
          key={`listItem_${index + 1}`}
          type={type}
          onClick={event => {
            event.stopPropagation();
            handleClickCallback(item);
          }}
        >
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
