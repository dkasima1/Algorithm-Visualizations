import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble_Sort from "./components/Sorting/Bubble_Sort"
import Quick_Sort from "./components/Sorting/Quick_Sort"

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        {/* <Canvas /> */}
        <Switch>
          <Route path="/Sorting/Bubble_Sort" component={ Bubble_Sort } />
          <Route path="/Sorting/Quick_Sort" component={ Quick_Sort } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
