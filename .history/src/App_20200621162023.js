import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Router exact path="/" component={Home} />
          <Router path="/about" component={About} />
          <Router path="/contact" component={Contact} />
          <Router component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
