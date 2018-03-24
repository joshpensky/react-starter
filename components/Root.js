import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'style/global';
import Home from 'pages/Home';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}