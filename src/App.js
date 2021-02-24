import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Custom component(s) import(s)
import Headar from './components/Header';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Router>
      <Headar />
      <Route path="/" exact component={Dashboard}></Route>
      {/* TODO: Render Footer here */}
    </Router>
  );
}

export default App;
