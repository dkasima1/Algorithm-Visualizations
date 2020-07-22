import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble_Sort from "./components/Sorting/Bubble_Sort"

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/Sorting/Bubble_Sort" component={ Bubble_Sort } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
