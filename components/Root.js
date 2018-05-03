import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'style/global';
import Home from 'pages/Home';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Root;