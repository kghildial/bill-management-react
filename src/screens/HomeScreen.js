import React from 'react';

// Custom component(s) import(s)
import Container from '../components/Container';

const HomeScreen = () => {
  return (
    <Container type="contentWrapper">
      <Container type="billsListContainer">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </Container>
      <Container type="chartContainer">
        <h1>Expense Chart</h1>
      </Container>
    </Container>
  );
};

export default HomeScreen;
