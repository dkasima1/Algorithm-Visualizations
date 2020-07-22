import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
      </Router>
    </React.Fragment>
  );
}

export default App;
