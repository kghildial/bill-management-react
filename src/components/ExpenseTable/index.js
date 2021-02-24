/**
 * Generates List of expenses
 */

import React from 'react';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import { Table, Row, Cell } from './ExpenseTable.style';
import Icon from '../Icon';

const ExpenseTable = props => {
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
          <Row key={item.id}>
            <Cell key={`idCell_${item.id}`} type="dataCell">
              {item.id}
            </Cell>
            <Cell key={`dateCell_${item.id}`} type="dataCell">
              {item.date}
            </Cell>
            <Cell key={`categoryCell_${item.id}`} type="dataCell">
              {item.category}
            </Cell>
            <Cell key={`descriptionCell_${item.id}`} type="dataCell">
              {item.description}
            </Cell>
            <Cell key={`amountCell_${item.id}`} type="dataCell">
              {item.amount}
            </Cell>
            <Cell key={`actionCell_${item.id}`} type="actionCell">
              <Icon
                type="iconWrapper"
                iconVal={faEllipsisV}
                iconMenuList={['Edit', 'Delete']}
              />
              {/* <Icon iconVal={faEdit} /> */}
              {/* <Icon iconVal={faTrash} /> */}
            </Cell>
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
