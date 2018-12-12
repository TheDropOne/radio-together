import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pages from './pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Pages} />
    </Switch>
  </Router>
);


export default App;
