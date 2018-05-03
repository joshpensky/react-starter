import React, { Component } from 'react';
import { H1 } from 'style';

export default class Home extends Component {
  render() {
    return (
      <div>
        <H1>React Boilerplate</H1>
        <img src="static/img/logo.png" height="50" />
      </div>
    );
  }
}