import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble_Sort from "./components/Sorting/Bubble_Sort"
import Canvas from "./components/Graph/Canvas"

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <BarGraph />
        <Switch>
          <Route path="/Sorting/Bubble_Sort" component={ Canvas } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
