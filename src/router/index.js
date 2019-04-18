import React from 'react';
import PropTypes from 'prop-types';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import routes from './routes';

const Router = ({ children }) => (
  <BrowserRouter history={history}>
    <Route
      render={({ location }) =>
        children(
          <Switch>
            {routes.map(({ exact, path, render }, i) => (
              <Route key={i} path={path} exact={exact} render={render} />
            ))}
          </Switch>,
          location,
        )
      }
    />
  </BrowserRouter>
);

Router.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Router;
