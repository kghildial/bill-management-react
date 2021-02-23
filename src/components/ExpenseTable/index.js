/**
 * Generates List of expenses
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  faEdit,
  faTrash,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import { Table, Row, Cell } from './ExpenseTable.style';
import Icon from '../Icon';

const ExpenseTable = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Table>
      <thead>
        <Row>
          {props.headingData.map((item, index) => (
            <Cell
              type="headCell"
              key={`heading_${index + 1}`}
              width={props.widthData[index]}
            >
              {item}
            </Cell>
          ))}
        </Row>
      </thead>
      <tbody>
        {props.data.map(item => (
          <>
            <Row key={item.id}>
              <Cell type="dataCell">{item.id}</Cell>
              <Cell type="dataCell">{item.date}</Cell>
              <Cell type="dataCell">{item.category}</Cell>
              <Cell type="dataCell">{item.description}</Cell>
              <Cell type="dataCell">{item.amount}</Cell>
              <Cell type="actionCell">
                <Icon
                  type="noShadow"
                  iconVal={faEllipsisV}
                  iconMenuData={['Edit', 'Delete']}
                />
                {/* <Icon iconVal={faEdit} /> */}
                {/* <Icon iconVal={faTrash} /> */}
              </Cell>
            </Row>
          </>
        ))}
      </tbody>
    </Table>
  );
};

ExpenseTable.propsTypes = {
  headingData: PropTypes.array.isRequired,
  data: PropTypes.array,
};

export default ExpenseTable;
