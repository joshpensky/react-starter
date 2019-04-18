import React from 'react';
import { Home, NotFound } from 'containers';

export default [
  {
    path: '/',
    exact: true,
    render(props) {
      return <Home {...props} />;
    },
  },
  {
    path: '*',
    render(props) {
      return <NotFound {...props} />;
    },
  },
];
