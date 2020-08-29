import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bubble_Sort from "./components/Sorting/Bubble_Sort";
import Quick_Sort from "./components/Sorting/Quick_Sort";
import Selection_Sort from "./components/Sorting/Selection_Sort";
import Kruskal from "./components/MST/Kruskal";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        {/* <Canvas /> */}
        <Switch>
          <Route path="/Sorting/Bubble_Sort" component={ Bubble_Sort } />
          <Route path="/Sorting/Selection_Sort" component={ Selection_Sort } />
          <Route path="/Sorting/Quick_Sort" component={ Quick_Sort } />
          <Route path="/MST/Kruskal" component={ Kruskal } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
