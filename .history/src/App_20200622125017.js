import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Router exact path="/" component={Home} />
          <Router path="/sorting" component={About} />
          <Router path="/graphs" component={Contact} />
          <Router component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
