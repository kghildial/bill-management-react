import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Custom component(s) import(s)
import Headar from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Headar />
      <Route path="/" exact component={HomeScreen}></Route>
      {/* TODO: Render Footer here */}
    </Router>
  );
}

export default App;
