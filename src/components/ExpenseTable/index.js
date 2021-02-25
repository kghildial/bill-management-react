/**
 * Generates List of expenses
 */

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// Custom component(s) import(s)
import { Table, Row, Cell } from './ExpenseTable.style';
import Icon from '../Icon';
import Container from '../Container';

const ExpenseTable = props => {
  const storeData = {
    activeMonth: useSelector(state => state.uiStates.activeMonth),
    billsData: useSelector(state => state.billsData),
  };

  return (
    <>
      <Table type="headerTable">
        <thead>
          <Row>
            {props.headingData.map(
              (item, index) =>
                !(item === 'Category' && window.innerWidth <= 768) && (
                  <Cell
                    type="headCell"
                    key={`heading_${index + 1}`}
                    width={props.widthData[index]}
                  >
                    {item}
                  </Cell>
                )
            )}
          </Row>
        </thead>
      </Table>
      <Container type="tableBodyWrapper">
        <Table>
          <thead>
            <Row>
              {props.headingData.map(
                (item, index) =>
                  !(item === 'Category' && window.innerWidth <= 768) && (
                    <Cell
                      type="headCell"
                      key={`heading_${index + 1}`}
                      width={props.widthData[index]}
                    >
                      {item}
                    </Cell>
                  )
              )}
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
                {window.innerWidth > 768 && (
                  <Cell key={`categoryCell_${item.id}`} type="dataCell">
                    {item.category}
                  </Cell>
                )}
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
                    itemID={item.id}
                  />
                  {/* <Icon iconVal={faEdit} /> */}
                  {/* <Icon iconVal={faTrash} /> */}
                </Cell>
              </Row>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

ExpenseTable.propsTypes = {
  headingData: PropTypes.array.isRequired,
  data: PropTypes.array,
};

export default ExpenseTable;
