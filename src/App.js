import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Custom component(s) import(s)
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      {/* TODO: Render Header here */}
      <Route path="/" exact component={HomeScreen}></Route>
      {/* TODO: Render Footer here */}
    </Router>
  );
}

export default App;
