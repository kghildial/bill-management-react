/**
 * Generates List of expenses
 */

import React from 'react';
import PropTypes from 'prop-types';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import { Table, Row, Cell } from './ExpenseTable.style';

const ExpenseTable = props => {
  return (
    <Table>
      <thead>
        <Row>
          {props.headingData.map((item, index) => (
            <Cell type="headCell" key={`heading_${index + 1}`}>
              {item}
            </Cell>
          ))}
        </Row>
      </thead>
      <tbody>
        {props.data.map(item => (
          <Row key={item.id}>
            <Cell type="dataCell">{item.id}</Cell>
            <Cell type="dataCell">{item.date}</Cell>
            <Cell type="dataCell">{item.category}</Cell>
            <Cell type="dataCell">{item.description}</Cell>
            <Cell type="dataCell">{item.amount}</Cell>
          </Row>
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
