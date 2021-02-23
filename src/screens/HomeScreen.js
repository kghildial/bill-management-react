import React from 'react';

import seederData from '../seeder';

// Custom component(s) import(s)
import Container from '../components/Container';
import ExpenseTable from '../components/ExpenseTable';

const HomeScreen = () => {
  return (
    <Container type="contentWrapper">
      <Container type="billsListContainer">
        <ExpenseTable
          headingData={['ID', 'Date', 'Category', 'Description', 'Amount', '']}
          widthData={['10%', '20%', '20%', '20%', '20%', '10%']}
          data={seederData.bills}
        />
      </Container>
      <Container type="chartContainer">
        <h1>Expense Chart</h1>
      </Container>
    </Container>
  );
};

export default HomeScreen;
