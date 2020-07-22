import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <NavigationBar />
    <Router>
      <Switch>
        <Route path="/Sorting/Bubble_Sort" component={ Bubble_Sort } />
      </Switch>
    </Router>
  );
}

export default App;
